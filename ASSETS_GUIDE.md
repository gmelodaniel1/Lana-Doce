# Guia de Assets & Sprites - Lana Doce (Visual Novel)

Este guia define os padrões técnicos e organizacionais para alimentar a Visual Novel com ilustrações, sprites de personagens, cenários e efeitos sonoros baseados na **Bíblia de Personagens do LANA (UFPE)** (`LanaDoce.md`).

---

## 1. Estrutura de Diretórios de Assets

Todos os arquivos estáticos devem ser colocados dentro de `public/assets/`:

```
public/assets/
├── sprites/
│   ├── gabs/
│   │   ├── neutral.png
│   │   ├── stern.png
│   │   ├── approving.png
│   │   └── tired.png
│   ├── katia/
│   │   ├── neutral.png
│   │   ├── happy.png
│   │   ├── disappointed.png
│   │   └── analytical.png
│   ├── daniel/
│   │   ├── neutral.png
│   │   ├── chaotic_excited.png
│   │   ├── laughing.png
│   │   └── awkward.png
│   ├── joao/
│   ├── beca/
│   ├── sergio/
│   ├── fernanda/
│   ├── cecilia/
│   ├── rhayssa/
│   ├── leticia/
│   ├── alex/
│   ├── olga/
│   ├── alana/
│   ├── will/
│   ├── samara/
│   └── ben_luis/
├── backgrounds/
│   ├── salao-central.webp
│   ├── copa.webp
│   ├── sala-tms.webp
│   ├── sala-reuniao.webp
│   └── campus-ufpe.webp
└── audio/
    ├── sfx/
    │   ├── tms-pulse.mp3
    │   ├── tdcs-beep.mp3
    │   └── click.mp3
    └── bgm/
        ├── lab-routine.mp3
        ├── tense-presentation.mp3
        └── romance-soft.mp3
```

---

## 2. Especificações dos Sprites de Personagens

| Parâmetro | Recomendação Ideal | Limite Mínimo |
| :--- | :--- | :--- |
| **Formato** | PNG (transparente) ou WebP (transparente) | PNG 24-bit |
| **Dimensões** | **800 x 1200 px** ou **1000 x 1500 px** | 600 x 900 px |
| **Alinhamento** | Personagem ancorado pela base (pés tocando o rodapé da imagem) | - |
| **Enquadramento** | Plano Americano (da cintura/coxas para cima) ou Corpo Inteiro | Da cintura para cima |
| **Fundo** | **100% Transparente (Alpha Channel)** | - |
| **Estilo Visual** | Anime / Webtoon semi-realista estilizado (similar a *Amor Doce* / *Eldarya*) com jalecos e elementos acadêmicos da UFPE | - |

> [!TIP]
> **Substituição Automática:** Enquanto você não adicionar os arquivos `.png` nos diretórios correspondentes, o motor do jogo continuará renderizando automaticamente os vetores SVG dos personagens com animações, expressões e cores temáticas sem quebrar o layout!

---

## 3. Lista de Expressões Chave por Personagem (Extraído de `LanaDoce.md`)

Ao exportar os sprites de cada personagem, utilize exatamente estes nomes de arquivo:

### Liderança & Pós-Doc
* **`gabs` (Gabriel):**
  - `neutral.png`: Braços cruzados, semblante fechado, olhar avaliativo.
  - `stern.png`: Sobrancelha franzida apontando erro na planilha/bobina.
  - `approving.png`: Aceno mínimo de cabeça com olhos fechados (o elogio dele).
  - `tired.png`: Massageando a ponte do nariz após horas de estatística.
* **`katia` (Profa. Kátia):**
  - `neutral.png`: Mãos unidas à frente, expressão serena e serena.
  - `happy.png`: Sorriso sutil e acolhedor de mentora.
  - `disappointed.png`: Olhar fixo e penetrante em silêncio absoluto.
  - `analytical.png`: Olhar focado revisando dados e projetos.

### Doutorandos
* **`daniel`:** `neutral.png`, `chaotic_excited.png`, `laughing.png`, `awkward.png`
* **`joao`:** `neutral.png`, `happy.png`, `focused.png`, `tired.png`
* **`beca`:** `neutral.png`, `blessed.png`, `shocked_polite.png`, `worried.png`

### Mestrandos
* **`sergio`:** `neutral.png`, `laughing.png`, `robotic_blank.png`, `chill.png`
* **`fernanda`:** `neutral.png`, `teasing.png`, `eye_roll.png`, `warm.png`
* **`cecilia`:** `neutral.png`, `happy.png`, `strict.png`, `chatty.png`
* **`rhayssa`:** `neutral.png`, `in_love.png`, `stressed.png`, `curious.png`

### Iniciação Científica (ICs)
* **`leticia`:** `neutral.png`, `joyful.png`, `caught_snacking.png`, `hungry.png`
* **`alex`:** `neutral.png`, `happy.png`, `busy_lab.png`, `overwhelmed.png`
* **`olga`:** `neutral.png`, `happy.png`, `concerned.png`, `focused.png`
* **`alana`:** `neutral.png`, `happy.png`, `determined.png`, `surprised.png`
* **`will`:** `neutral.png`, `chatty_excited.png`, `tea_spilling.png`, `unimpressed.png`
* **`samara`:** `neutral.png`, `shy_smile.png`, `startled.png`, `observant.png`
* **`ben_luis`:** `neutral.png`, `goofing_around.png`, `panicked_newbies.png`, `proud_fail.png`

---

## 4. Especificações de Cenários de Fundo (Backgrounds)

* **Resolução:** **1920 x 1080 px** (16:9 Full HD)
* **Formato:** `.webp` (preferencial por peso otimizado) ou `.jpg` de alta qualidade
* **Cenários Planejados:**
  - `salao-central.webp`: Salão com macas, tablados de fisioterapia e banners da UFPE.
  - `sala-tms.webp`: Sala com poltrona reclinável confortável e estimulador magnético.
  - `copa.webp`: Bancada com garrafa de café, micro-ondas e lanchinhos da Letícia.
  - `sala-reuniao.webp`: Mesa oval com telão de projeção de dados.

