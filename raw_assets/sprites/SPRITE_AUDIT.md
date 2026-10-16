# Relatório de Auditoria e Sanitização de Sprites (Ticket 01)

> **Data:** 15 de Outubro de 2026
> **Origem:** Arquivos sanitizados e movidos de `dist/assets/sprites/` para `raw_assets/sprites/`

## 1. Visão Geral Executiva

Todos os 17 arquivos originais colocados no projeto foram resgatados do diretório volátil de compilação (`dist/`), tiveram seus nomes normalizados (sem acentos e padronizados), e foram submetidos a uma análise geométrica detalhada.

| Classificação | Quantidade | Personagens / Arquivos |
|---|---|---|
| **Sprites Limpos (Isolamento 100%)** | 3 | Álex (`AlexSprites.jfif`), Profa. Kátia (`KatiaSprites.jfif`), Letícia (`LeticiaSprites.jfif`) |
| **Sprites Complexos / Sobrepostos** | 14 | Alana (`AlanaSprites.jfif`) - [touching_mild], Rebeca (Beca) (`BecaSprites.jfif`) - [touching_mild], Ben & Luís (`BenSprites.jfif`) - [touching_mild], Ben & Luís (`LuisSprites.jfif`) - [requires_box_slicing], Cecília (`CeciliaSprites.jfif`) - [touching_mild], Daniel (`DanielSprites.jfif`) - [touching_mild], Fernanda (`FernandaSprites.jfif`) - [touching_mild], Gabriel (Gabs) (`GabsSprites.jfif`) - [touching_mild], João (`JoaoSprites.jfif`) - [touching_mild], Olga (`OlgaSprites.jpg`) - [touching_mild], Rhayssa (`RhayssaSprites.jfif`) - [requires_box_slicing], Samara (`SamaraSprites.jfif`) - [requires_box_slicing], Sérgio (Robozão) (`SergioSprites.jfif`) - [touching_mild], Willyberg (Will) (`WillSprites.jpg`) - [touching_mild] |

---

## 2. Detalhamento por Personagem

| Personagem | Arquivo Bruto | Dimensões | Poses (Cabeças) | Layout Detectado | Severidade de Colisão | Ação Recomendada |
|---|---|---|:---:|---|---|---|
| **Alana** | `AlanaSprites.jfif` | 1024x572 | 4 | `horizontal_touching_4` | `touching_mild` | ⚠️ Corte com bounding-box configurada (Ticket 03) |
| **Álex** | `AlexSprites.jfif` | 1024x506 | 4 | `clean_horizontal_4` | `none` | ✅ Pronto para recorte automático (Ticket 02) |
| **Rebeca (Beca)** | `BecaSprites.jfif` | 1024x572 | 4 | `horizontal_touching_4` | `touching_mild` | ⚠️ Corte com bounding-box configurada (Ticket 03) |
| **Ben & Luís** | `BenSprites.jfif` | 1024x687 | 4 | `horizontal_touching_4` | `touching_mild` | ⚠️ Corte com bounding-box configurada (Ticket 03) |
| **Ben & Luís** | `LuisSprites.jfif` | 552x1024 | 2 | `grid_2x2_vertical` | `requires_box_slicing` | 📦 Fatiar grade 2x2 em 4 quadrantes (Ticket 03) |
| **Cecília** | `CeciliaSprites.jfif` | 1024x572 | 5 | `horizontal_touching_5` | `touching_mild` | ⚠️ Corte com bounding-box configurada (Ticket 03) |
| **Daniel** | `DanielSprites.jfif` | 1024x572 | 4 | `horizontal_touching_4` | `touching_mild` | ⚠️ Corte com bounding-box configurada (Ticket 03) |
| **Fernanda** | `FernandaSprites.jfif` | 1024x572 | 5 | `horizontal_touching_5` | `touching_mild` | ⚠️ Corte com bounding-box configurada (Ticket 03) |
| **Gabriel (Gabs)** | `GabsSprites.jfif` | 1024x572 | 4 | `horizontal_touching_4` | `touching_mild` | ⚠️ Corte com bounding-box configurada (Ticket 03) |
| **João** | `JoaoSprites.jfif` | 1024x572 | 4 | `horizontal_touching_4` | `touching_mild` | ⚠️ Corte com bounding-box configurada (Ticket 03) |
| **Profa. Kátia** | `KatiaSprites.jfif` | 1024x506 | 4 | `clean_horizontal_4` | `none` | ✅ Pronto para recorte automático (Ticket 02) |
| **Letícia** | `LeticiaSprites.jfif` | 1024x687 | 4 | `clean_horizontal_4` | `none` | ✅ Pronto para recorte automático (Ticket 02) |
| **Olga** | `OlgaSprites.jpg` | 1024x572 | 6 | `horizontal_touching_6` | `touching_mild` | ⚠️ Corte com bounding-box configurada (Ticket 03) |
| **Protagonista (Você)** (`protagonist`) | *(Nenhum arquivo)* | - | 0 | Sem arte | Ausente | Manter avatar SVG provisório |
| **Rhayssa** | `RhayssaSprites.jfif` | 1024x1010 | 2 | `grid_2x2_vertical` | `requires_box_slicing` | 📦 Fatiar grade 2x2 em 4 quadrantes (Ticket 03) |
| **Samara** | `SamaraSprites.jfif` | 1024x975 | 4 | `grid_2x2_vertical` | `requires_box_slicing` | 📦 Fatiar grade 2x2 em 4 quadrantes (Ticket 03) |
| **Sérgio (Robozão)** | `SergioSprites.jfif` | 1024x572 | 5 | `horizontal_touching_5` | `touching_mild` | ⚠️ Corte com bounding-box configurada (Ticket 03) |
| **Willyberg (Will)** | `WillSprites.jpg` | 1024x506 | 4 | `horizontal_touching_4` | `touching_mild` | ⚠️ Corte com bounding-box configurada (Ticket 03) |

---

## 3. Diagnóstico Específico dos Casos Críticos

### A. Rhayssa (`RhayssaSprites.jfif`)
- **Problema:** Resolução quadrada (1024x1010). Foram detectadas 4 cabeças perfeitamente separadas com espaçamento médio de 40px no topo.
- **Ponto de Colisão:** Na altura da cintura e saia, os corpos formam um único bloco contínuo de pixels (colunas 48 a 1011).
- **Solução:** No Ticket 03, aplicar corte vertical interpolado nos centros dos intervalos das cabeças (`x = 284`, `x = 522`, `x = 762`).

### B. Sérgio (`SergioSprites.jfif`)
- **Problema:** Contém **5 poses** em vez de 4. As cabeças estão em 81-174, 256-355, 461-564, 644-752 e 858-957.
- **Ponto de Colisão:** Braços e cotovelos tocam entre as poses 2 e 3, e entre 4 e 5.
- **Solução:** O script do Ticket 03 cortará as 5 expressões (`neutral`, `laughing`, `robotic_blank`, `chill`, mais 1 sobressalente).

### C. Fernanda (`FernandaSprites.jfif`) e Daniel (`DanielSprites.jfif`)
- **Problema:** Ambos possuem **5 cabeças** detectadas com poses dinâmicas onde as mãos/braços abertos encostam na pose vizinha.
- **Solução:** Recorte com máscaras poligonais/retangulares personalizadas no Ticket 03.

### D. Dupla Ben & Luís (`BenSprites.jfif` e `LuisSprites.jfif`)
- **Problema:** `BenSprites` possui 1024x687 (horizontal com 2 blocos largos de poses); `LuisSprites` possui 552x1024 (vertical em grade 2x2).
- **Solução:** Tratar cada um com sua rotina de recorte específica no Ticket 03 e adequar a arquitetura no Ticket 04 para exibir a dupla ou cada um separadamente.

---

## 4. Status do Ticket 01

- [x] Arquivos brutos resgatados da pasta `dist/` e protegidos em `raw_assets/sprites/`
- [x] Nomes sanitizados (sem caracteres especiais, sem acentos, padronizados)
- [x] Script executável `scripts/ingest_and_audit_sprites.py` pronto
- [x] Catálogo `raw_assets/sprites/sprite_audit.json` e `SPRITE_AUDIT.md` gerados com sucesso
- [x] Ticket 01 concluído. O terreno está preparado para os Tickets 02 e 03.