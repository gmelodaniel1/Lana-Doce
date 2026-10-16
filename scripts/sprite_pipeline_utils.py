"""
Utilitários compartilhados do Pipeline de Fatiamento e Tratamento de Sprites - Lana Doce
Centraliza:
1. Remoção de fundo com modelo 'isnet-anime' (rembg), opacidade sólida no corpo e clareamento de jalecos.
2. Remoção automática de legendas inferiores das folhas de referência.
3. Normalização de altura (720px) em espaço alfa pré-multiplicado com filtro Lanczos.
"""

from PIL import Image
import numpy as np
import rembg

TARGET_SPRITE_HEIGHT = 720
MARGIN_X = 16

_REMBG_SESSION = None


def get_rembg_session():
    global _REMBG_SESSION
    if _REMBG_SESSION is None:
        _REMBG_SESSION = rembg.new_session("isnet-anime")
    return _REMBG_SESSION


def remove_background_rembg(img_path):
    """
    Remove o fundo com alta fidelidade usando o modelo 'isnet-anime':
    1. Preserva 100% dos tecidos brancos, jalecos e detalhes de roupas claras.
    2. Garante opacidade 100% no interior do corpo (alpha >= 80 -> 255), eliminando translucidez acidental em fundos escuros.
    3. Trata sombras encardidas em tecidos brancos com curva de clareamento anime e neutralização fria.
    4. Mantém anti-aliasing suave nas bordas de transição (20 <= alpha < 80) com desmultiplicação limpa.
    5. Corta ruído residual fracionário (alpha < 20 -> 0) para fundo 100% transparente.
    """
    with Image.open(img_path) as raw_im:
        raw_rgb = raw_im.convert("RGB")

    clean = rembg.remove(raw_rgb, session=get_rembg_session())
    arr = np.array(clean, dtype=np.float32)

    alpha = arr[:, :, 3]

    # 1. Cortar ruído residual para transparência limpa
    arr[alpha < 20, :] = 0.0

    # 2. Desmultiplicar canais RGB apenas nas bordas suaves de transição (anti-aliasing)
    semi = (alpha >= 20) & (alpha < 80)
    for c in range(3):
        arr[semi, c] = np.clip(arr[semi, c] * 255.0 / alpha[semi], 0.0, 255.0)

    # 3. Opacidade sólida total no interior do corpo (elimina sangramento do fundo escuro através do jaleco)
    arr[alpha >= 80, 3] = 255.0

    # 4. Tratamento de jaleco e tecidos brancos (elimina aspecto encardido/sujo nas dobras)
    body = arr[:, :, 3] == 255.0
    r = arr[:, :, 0]
    g = arr[:, :, 1]
    b = arr[:, :, 2]
    mean_rgb = (r + g + b) / 3.0
    max_rgb = np.maximum(np.maximum(r, g), b)
    min_rgb = np.minimum(np.minimum(r, g), b)
    sat_diff = max_rgb - min_rgb

    is_coat = body & (mean_rgb > 155.0) & (sat_diff < 26.0)
    t = np.clip((mean_rgb - 155.0) / 100.0, 0.0, 1.0)
    boost = 4.0 * (1.0 - t) * t * 22.0
    arr[is_coat, 0] = np.clip(arr[is_coat, 0] + boost[is_coat] - 2.0, 0.0, 255.0)
    arr[is_coat, 1] = np.clip(arr[is_coat, 1] + boost[is_coat], 0.0, 255.0)
    arr[is_coat, 2] = np.clip(arr[is_coat, 2] + boost[is_coat] + 4.0, 0.0, 255.0)

    return Image.fromarray(arr.astype(np.uint8), "RGBA")


def strip_bottom_caption(sub_clean, sub_raw_gray):
    """
    Remove legendas de texto na parte inferior das poses.
    Identifica o vale branco (separador) nos últimos 30% da pose
    e zera o canal alfa a partir desse vale caso haja texto escuro abaixo dele.
    """
    arr_pose = np.array(sub_clean)
    alpha = arr_pose[:, :, 3].copy()
    h, _ = alpha.shape
    if h < 50:
        return sub_clean, alpha

    start_y = int(h * 0.70)
    sub = sub_raw_gray[start_y:, :]
    means = np.mean(sub, axis=1)

    w_rows = np.where(means > 240)[0]
    if len(w_rows) > 0:
        first_w = w_rows[0]
        below = sub[first_w:, :]
        dark_below = np.where(np.min(below, axis=1) < 130)[0]
        if len(dark_below) > 0:
            cutoff = start_y + first_w
            alpha[cutoff:, :] = 0
            arr_pose[:, :, 3] = alpha
            return Image.fromarray(arr_pose, "RGBA"), alpha

    return sub_clean, alpha


def normalize_and_resize_pose(cropped, max_h, target_height=TARGET_SPRITE_HEIGHT, margin_x=MARGIN_X):
    """
    Ancora a pose recortada na base de um canvas de altura `max_h` e redimensiona
    em espaço alfa pré-multiplicado para `target_height` sem halos escuros.
    Retorna (final_sprite, target_w).
    """
    canvas_w = cropped.width + (margin_x * 2)
    pad_canvas = Image.new("RGBA", (canvas_w, max_h), (0, 0, 0, 0))
    y_offset = max_h - cropped.height
    pad_canvas.paste(cropped, (margin_x, y_offset))

    scale = target_height / float(max_h)
    target_w = max(1, int(round(canvas_w * scale)))

    arr_pad = np.array(pad_canvas, dtype=np.float32)
    pad_alpha = arr_pad[:, :, 3:4] / 255.0
    arr_pad[:, :, :3] *= pad_alpha
    pre_im = Image.fromarray(arr_pad.astype(np.uint8), "RGBA")
    resized = pre_im.resize((target_w, target_height), Image.Resampling.LANCZOS)

    res_arr = np.array(resized, dtype=np.float32)
    res_alpha = res_arr[:, :, 3:4] / 255.0
    safe_alpha = np.maximum(res_alpha, 1e-4)
    res_arr[:, :, :3] = np.clip(res_arr[:, :, :3] / safe_alpha, 0.0, 255.0)
    res_arr[res_arr[:, :, 3] < 25, :] = 0

    return Image.fromarray(res_arr.astype(np.uint8), "RGBA"), target_w

