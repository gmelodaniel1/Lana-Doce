# 01: Pipeline de Integração dos Episódios Reais (Parser, Normalização e Backgrounds)

**What to build:**
Carregar e adaptar os roteiros reais dos arquivos `Episódio 1.json`, `Episódio 2.json` e `Episódio 3.json` para o motor do jogo (DialogueScript). Normalizar referências de personagens (mapeando apelidos como 'rebeca' -> 'beca'), processar variações de LOM (Love'o'Meter), conectar expressões e animações de sprites automaticamente, e associar os cenários de fundo reais (`central_room` -> `SalãoDoce`, `copa` -> `CopaDoce`, `tms_room` -> `SalaTMS`, `hallway_lana` -> `RCDoce`, `localite` -> `LocaliteDoce`). O jogador consegue jogar o Episódio 1 do início ao fim com todos os diálogos reais, reações de sprites e notificações de afinidade na tela.

**Blocked by:** None (can start immediately).

**Status:** done

- [x] Parser e normalizador de episódios JSON compatível com a estrutura de `DialogueScript`
- [x] Mapeamento e normalização de `characterId` (ex: `rebeca` -> `beca`) e resolução de nomes de exibição
- [x] Resolução dinâmica de cenários reais (`SalãoDoce`, `CopaDoce`, `SalaTMS`, `RCDoce`, `LocaliteDoce`) com suporte às extensões reais (.jfif, .jpg, .webp)
- [x] Conversão automática das opções de escolha e reações de `lomChange` para `affinityChanges`
- [x] Configuração padrão inteligente de sprites em cena (posição central, animação de entrada e alternância suave)
- [x] Episódio 1 jogável de ponta a ponta sem erros de nó ou imagem faltante
- [x] Testes unitários do parser e integridade de todos os nós dos 3 episódios

