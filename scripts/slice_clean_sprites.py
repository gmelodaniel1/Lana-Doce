"""
Script de Fatiamento e Remoção de Fundo (Sprites Limpos) - Lana Doce
Ticket 02: Pipeline de Recorte e Remoção de Fundo (Sprites Limpos)

Processa os 9 personagens com poses já isoladas e limpas:
Alana, Álex, Beca, Gabs, Kátia, Letícia, Olga, Samara e Will.
"""

import os
from PIL import Image
import numpy as np
from sprite_pipeline_utils import (
    TARGET_SPRITE_HEIGHT,
    remove_background_rembg,
    strip_bottom_caption,
    normalize_and_resize_pose,
)

WORKSPACE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RAW_SPRITES_DIR = os.path.join(WORKSPACE_DIR, "raw_assets", "sprites")
PUBLIC_SPRITES_DIR = os.path.join(WORKSPACE_DIR, "public", "assets", "sprites")

CLEAN_CHARACTERS = {
    "katia": {
        "name": "Profa. Kátia",
        "file": "KatiaSprites.jfif",
        "expressions": ["neutral", "happy", "disappointed", "analytical"],
    },
    "alex": {
        "name": "Álex",
        "file": "AlexSprites.jfif",
        "expressions": ["neutral", "happy", "busy_lab", "overwhelmed"],
    },
    "leticia": {
        "name": "Letícia",
        "file": "LeticiaSprites.jfif",
        "expressions": ["neutral", "joyful", "caught_snacking", "hungry"],
    },
    "alana": {
        "name": "Alana",
        "file": "AlanaSprites.jfif",
        "expressions": ["neutral", "happy", "determined", "surprised"],
    },
    "beca": {
        "name": "Rebeca (Beca)",
        "file": "BecaSprites.jfif",
        "expressions": ["neutral", "blessed", "shocked_polite", "worried"],
    },
    "gabs": {
        "name": "Gabriel (Gabs)",
        "file": "GabsSprites.jfif",
        "expressions": ["neutral", "stern", "approving", "tired"],
    },
    "will": {
        "name": "Willyberg (Will)",
        "file": "WillSprites.jpg",
        "expressions": ["neutral", "chatty_excited", "tea_spilling", "unimpressed"],
    },
    "samara": {
        "name": "Samara",
        "file": "SamaraSprites.jfif",
        "expressions": ["neutral", "shy_smile", "startled", "observant"],
    },
    "olga": {
        "name": "Olga",
        "file": "OlgaSprites.jpg",
        "expressions": ["neutral", "happy", "concerned", "focused"],
    },
}


def find_optimal_cut_points(rgba_image):
    """
    Encontra o ponto médio dos vales de menor densidade de pixels nas janelas entre poses.
    """
    arr = np.array(rgba_image)
    alpha = arr[:, :, 3]
    col_density = np.sum(alpha > 10, axis=0)
    w = rgba_image.width

    cuts = [0]
    for target in [w * 0.25, w * 0.50, w * 0.75]:
        window_start = int(target - w * 0.08)
        window_end = int(target + w * 0.08)
        win = col_density[window_start:window_end]
        min_val = np.min(win)
        min_indices = np.where(win == min_val)[0]
        center_idx = min_indices[len(min_indices) // 2]
        valley = window_start + int(center_idx)
        cuts.append(valley)
    cuts.append(w)
    return cuts


def process_character(char_id, config):
    input_path = os.path.join(RAW_SPRITES_DIR, char_id, config["file"])
    if not os.path.exists(input_path):
        print(f"[ERRO] Arquivo não encontrado: {input_path}")
        return

    print(f"\n--- Processando {config['name']} ({char_id}) com rembg ---")
    clean_rgba = remove_background_rembg(input_path)
    cuts = find_optimal_cut_points(clean_rgba)

    raw_gray = np.array(Image.open(input_path).convert("L"))

    output_dir = os.path.join(PUBLIC_SPRITES_DIR, char_id)
    os.makedirs(output_dir, exist_ok=True)

    raw_poses = []
    max_h = 0
    for i in range(4):
        x_start, x_end = cuts[i], cuts[i + 1]
        sub_clean = clean_rgba.crop((x_start, 0, x_end, clean_rgba.height))
        sub_raw = raw_gray[:, x_start:x_end]

        stripped_clean, pose_alpha = strip_bottom_caption(sub_clean, sub_raw)

        rows = np.where(np.any(pose_alpha > 15, axis=1))[0]
        cols = np.where(np.any(pose_alpha > 15, axis=0))[0]

        if len(rows) == 0 or len(cols) == 0:
            print(f"  [AVISO] Pose {i} vazia em {char_id}")
            continue

        y0, y1 = int(rows[0]), int(rows[-1] + 1)
        x0, x1 = int(cols[0]), int(cols[-1] + 1)
        cropped = stripped_clean.crop((x0, y0, x1, y1))
        raw_poses.append(cropped)
        if cropped.height > max_h:
            max_h = cropped.height

    for i, cropped in enumerate(raw_poses):
        expr_name = config["expressions"][i]
        final_sprite, target_w = normalize_and_resize_pose(cropped, max_h)
        out_path = os.path.join(output_dir, f"{expr_name}.png")
        final_sprite.save(out_path, format="PNG", optimize=True)
        print(f"  -> Salvo: {expr_name}.png ({target_w}x{TARGET_SPRITE_HEIGHT})")


def main():
    print("Iniciando pipeline de fatiamento para sprites limpos (Ticket 02)...")
    for char_id, config in CLEAN_CHARACTERS.items():
        process_character(char_id, config)

    print("\nTodos os 9 personagens limpos foram processados e exportados para public/assets/sprites/!")


if __name__ == "__main__":
    main()
