# 02: Pipeline de Recorte e Remoção de Fundo (Sprites Limpos)

**What to build:** Script automatizado de fatiamento e remoção de fundo com transparência alfa e suavização de bordas (anti-aliasing) aplicado aos 9 personagens com poses já isoladas e limpas (Alana, Álex, Beca, Gabs, Kátia, Letícia, Olga, Samara, Will). Exportar os sprites recortados como arquivos `.png` de alta qualidade diretamente para `public/assets/sprites/<characterId>/<expression>.png`.

**Blocked by:** 01: Salvar e Sanitizar os Assets Brutos (Raw Ingestion & Audit)

**Status:** done

- [x] Desenvolver utilitário Python `scripts/slice_clean_sprites.py` com remoção de fundo e suavização de arestas
- [x] Exportar poses recortadas em PNG transparente de 32 bits para `public/assets/sprites/<characterId>/<expression>.png`
- [x] Garantir que o jogo em execução consiga carregar e renderizar os sprites limpos no navegador via Vite dev server
- [x] Validar ausência de halos brancos estourados nos fundos escuros do jogo
