# 03: Isolamento Cirúrgico e Relatório de Colisão (Sprites Complexos e Sobrepostos)

**What to build:** Sistema configurável de corte por coordenadas e máscaras (`scripts/config/sprites_cutter_config.json`) para lidar com as folhas de poses sobrepostas ou layouts não lineares (Fernanda, Sérgio, Rhayssa, Daniel, Cecília, João, Ben e Luís). O sistema extrai as poses possíveis, remove fundo e gera um relatório com preview visual de áreas com colisão de contorno para orientar retoques ou re-gerações.

**Blocked by:** 01: Salvar e Sanitizar os Assets Brutos (Raw Ingestion & Audit)

**Status:** done

- [x] Definir coordenadas e caixas delimitadoras personalizadas em `scripts/config/sprites_cutter_config.json`
- [x] Implementar `scripts/slice_complex_sprites.py` com suporte a cortes adaptativos, separação vertical e formatos quadrados
- [x] Exportar as poses salvas para `public/assets/sprites/<characterId>/<expression>.png`
- [x] Gerar relatório visual de diagnóstico de colisão (`OVERLAPPING_SPRITES_REPORT.md`) indicando quais expressões possuem sobreposição que requer intervenção artística
