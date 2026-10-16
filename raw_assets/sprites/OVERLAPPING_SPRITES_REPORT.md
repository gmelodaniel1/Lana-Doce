# Relatório de Colisão e Isolamento Cirúrgico de Sprites (Ticket 03)

> **Data:** 15 de Outubro de 2026
> **Objetivo:** Documentar com precisão cirúrgica os pontos de contato entre poses, os cortes realizados e as recomendações de arte.

## 1. Visão Geral das Colisões

Neste lote de sprites complexos, identificamos folhas onde poses vizinhas possuíam linhas de corte com contato físico.
O pipeline aplicou cortes pelos vales de mínima densidade de pixels (mínimo contato possível) e suavização alfa.

| Personagem | Folha Bruta | Poses Extraídas | Severidade Máxima | Status de Uso | Ação Sugerida |
|---|---|:---:|---|---|---|
| **Fernanda** | `FernandaSprites.jfif` | 5 | 🟢 Mild | ✅ 100% Usável | Excelente acabamento, sem perda anatômica perceptível |
| **Sérgio (Robozão)** | `SergioSprites.jfif` | 5 | 🟡 Medium | ✅ Usável em jogo | Corte limpo no antebraço; retoque artístico opcional |
| **Daniel** | `DanielSprites.jfif` | 5 | 🟢 Mild | ✅ 100% Usável | Excelente acabamento, sem perda anatômica perceptível |
| **Cecília** | `CeciliaSprites.jfif` | 5 | ⚪ None | ✅ Perfeito | Nenhum contato detectado |
| **João** | `JoaoSprites.jfif` | 4 | 🟡 Medium | ✅ Usável em jogo | Corte limpo no antebraço; retoque artístico opcional |
| **Rhayssa** | `RhayssaSprites.jfif` | 4 | 🚨 Heavy | ⚠️ Usável com corte visível | Recomenda-se regerar folha com espaçamento no prompt |
| **Ben** | `BenSprites.jfif` | 3 | ⚪ None | ✅ Perfeito | Nenhum contato detectado |
| **Luís** | `LuisSprites.jfif` | 4 | ⚪ None | ✅ Perfeito | Nenhum contato detectado |

---

## 2. Análise Detalhada dos Casos

### A. Rhayssa (`RhayssaSprites.jfif`) - Severidade: Heavy
- **Diagnóstico:** As 4 cabeças possuem separação nítida no terço superior (~40px de intervalo branco), mas a cintura e saia formam uma massa contínua na base.
- **Cortes Realizados:** `x=302` (159px de contato), `x=513` (120px de contato) e `x=746` (162px de contato).
- **Resultado:** As expressões (`neutral`, `in_love`, `stressed`, `curious`) foram extraídas com sucesso. O contorno lateral da saia possui uma linha vertical reta suave.
- **Recomendação:** A arte é funcional para desenvolvimento e testes. Para a versão de lançamento na Steam/Web, regerar a ilustração usando prompt com *'individual character sprite sheet, isolated poses with 50px white gaps between each pose'*.

### B. Sérgio (`SergioSprites.jfif`) - Severidade: Medium
- **Diagnóstico:** 5 poses completas. Braços abertos e cotovelos encostam nos antebraços vizinhos nos cortes `x=244` (105px) e `x=420` (93px).
- **Resultado:** Todas as 5 expressões recortadas perfeitamente em 720px (`neutral`, `laughing`, `robotic_blank`, `chill`, e `extra`).
- **Recomendação:** Totalmente pronto para uso. O jaleco volumoso mascara a linha de corte lateral.

### C. Daniel (`DanielSprites.jfif`) e Fernanda (`FernandaSprites.jfif`) - Severidade: Mild
- **Diagnóstico:** Ambos possuem poses gesticulando (Daniel com mãos para cima, Fernanda com postura irônica).
- **Resultado:** Contato mínimo apenas na ponta dos dedos ou cotovelo (< 40px). Nenhuma deformidade anatômica relevante.

### D. Dupla Ben & Luís (`BenSprites.jfif` e `LuisSprites.jfif`) - Severidade: Minimal / None
- **Diagnóstico:** Ben possui 3 poses horizontais (`neutral`, `goofing_around`, `panicked_newbies`). Luís possui 4 poses distribuídas em grade 2x2 sem nenhuma colisão.
- **Solução:** O script gerou os sprites individuais para `ben` e `luis`, além de 4 composites automáticos em `ben_luis` onde ambos aparecem juntos lado a lado com posicionamento cómico perfeitamente ajustado.

---

## 3. Status de Conclusão do Ticket 03

- [x] Coordenadas de corte cirúrgico mapeadas em `scripts/config/sprites_cutter_config.json`
- [x] Pipeline `scripts/slice_complex_sprites.py` implementado com suporte a faixas horizontais e grade 2x2
- [x] Todos os sprites exportados para `public/assets/sprites/`
- [x] Relatório visual e técnico `OVERLAPPING_SPRITES_REPORT.md` documentado para o usuário e equipe de arte