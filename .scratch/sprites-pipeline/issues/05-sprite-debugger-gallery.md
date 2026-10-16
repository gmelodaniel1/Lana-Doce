# 05: Sprite Debugger & Galeria de Validação In-Game

**What to build:** Uma tela/ferramenta de inspeção interativa dentro da aplicação (acessível pelo botão SPRITES na barra superior da VN) que exibe todos os personagens e suas expressões carregadas a partir dos PNGs reais, com controles para alternar cor de fundo (preto absoluto, branco puro, xadrez alfa, azul noturno e cenário do jogo), acionar animações de fala/choque (`sprite-bob`, `sprite-shake`, `slide-up-fade`), zoom e alternância entre vitrine em grid e palco realista.

**Blocked by:** 02: Pipeline de Recorte e Remoção de Fundo (Sprites Limpos), 04: Adequação da Arquitetura de Personagens e Expressões no Engine

**Status:** done

- [x] Criar componente de galeria/estúdio de depuração (`src/components/dev/SpriteGallery.tsx`) acessível em modo dev
- [x] Implementar controles de troca de fundo (preto absoluto, branco puro, xadrez de transparência, background de cena do jogo)
- [x] Implementar seletor interativo de personagens, expressões e gatilhos de animação
- [x] Exibir indicadores visuais de integridade (carregado via PNG real vs fallback SVG ativo)
