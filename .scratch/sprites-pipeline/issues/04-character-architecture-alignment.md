# 04: Adequação da Arquitetura de Personagens e Expressões no Engine

**What to build:** Ajustar o código TypeScript (`src/types/character.ts`, `src/constants/characters.ts`, `src/utils/assetHelper.ts` e `src/components/vn/CharacterSprite.tsx`) para sincronizar exatamente os nomes das expressões extraídas de cada personagem, atualizar a estratégia de renderização para preservar proporções e ancoragem vertical, e modelar adequadamente o suporte para a dupla Ben & Luís (separados ou juntos na cena).

**Blocked by:** 02: Pipeline de Recorte e Remoção de Fundo (Sprites Limpos)

**Status:** done

- [x] Sincronizar `knownExpressions` e `defaultExpression` de cada personagem em `CHARACTERS_METADATA` com os nomes reais dos arquivos PNG gerados
- [x] Implementar suporte no motor para renderizar Ben e Luís individualmente (`ben` e `luis`) além de `ben_luis` como dupla
- [x] Atualizar `CharacterSprite.tsx` com regras de aspect-ratio, ancoragem pela base (`object-bottom`), `scale` e resiliência com fallback multi-tier
- [x] Validar a transição de expressões na cena demo (`DEMO_LAB_SCRIPT`) sem distorções visuais ou quebras
