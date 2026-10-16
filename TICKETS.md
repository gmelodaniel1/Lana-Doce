# Backlog de Tickets de Implementação - Lana Doce

Este documento organiza as próximas fases de desenvolvimento da Visual Novel em **User Stories e Tickets Técnicos**, prontos para serem priorizados e distribuídos em sprints.

---

## 📌 Épico 1: Ingestão Visual & Spritesheet Pipeline

### [TICK-001] Ingestão dos Sprites de Gabriel (Gabs) e Profa. Kátia
* **Prioridade:** Alta (Alta visibilidade)
* **Objetivo:** Substituir os vetores SVG do nó de demonstração pelas ilustrações definitivas em PNG/WebP transparente (800x1200px).
* **Critérios de Aceite:**
  - [ ] Adicionar `neutral.png`, `stern.png`, `approving.png`, `tired.png` em `public/assets/sprites/gabs/`.
  - [ ] Adicionar `neutral.png`, `happy.png`, `disappointed.png`, `analytical.png` em `public/assets/sprites/katia/`.
  - [ ] Validar se as animações de entrada (`animate-slide-up-fade`) e tremor de bronca (`animate-sprite-shake`) funcionam sem cortes nos limites do canvas.

### [TICK-002] Ingestão dos Cenários Base (Salão Central & Copa)
* **Prioridade:** Média
* **Objetivo:** Criar e disponibilizar os backgrounds oficiais do LANA em 1920x1080px.
* **Critérios de Aceite:**
  - [ ] Adicionar `salao-central.webp` com iluminação diurna.
  - [ ] Adicionar `copa.webp` com garrafa térmica de café e micro-ondas.
  - [ ] Garantir carregamento suave com cross-fade ao alternar cenários.

---

## 📌 Épico 2: Persistência & Save/Load

### [TICK-003] Sistema de Salvamento em LocalStorage / Slots
* **Prioridade:** Alta
* **Objetivo:** Permitir ao jogador salvar o estado do jogo em até 3 slots distintos (nó atual, histórico acumulado e tabela de LOM).
* **Critérios de Aceite:**
  - [ ] Criar modal de Save/Load no menu superior.
  - [ ] Salvar timestamp, preview do texto atual e data/hora.
  - [ ] Sistema de autosave no início de cada nó chave.

### [TICK-004] Galeria de Momentos & CGs Desbloqueáveis
* **Prioridade:** Baixa
* **Objetivo:** Exibir ilustrações especiais (CGs de romance ou conquistas científicas) desbloqueadas ao atingir LOM > 60.
* **Critérios de Aceite:**
  - [ ] Criar tela de Galeria acessível na tela inicial.
  - [ ] Persistir ilustrações destravadas independentemente do slot de save atual.

---

## 📌 Épico 3: Roteiro & Regras Canônicas de Romance

### [TICK-005] Implementação do Episódio 1: "O Café da Copa e a Fita Métrica"
* **Prioridade:** Alta
* **Objetivo:** Criar o script interativo apresentando Letícia na Copa, Willyberg com suas fofocas de olhar sereno, e Ben & Luís apanhando do sistema 10-20.
* **Critérios de Aceite:**
  - [ ] Criar `src/data/episode1Script.ts` com nós de diálogo e ramificações.
  - [ ] Adicionar escolhas que alterem a afinidade com Letícia (+ café), Will (+ conversa longa) e Ben & Luís (+ ajuda paciente).

### [TICK-006] Travas Canônicas de Rota Romântica
* **Prioridade:** Média
* **Objetivo:** Assegurar que os personagens casados e comprometidos (Profa. Kátia, Beca, João & Cecília, Olga & Alana, Álex & Rhayssa) possuam LOM focado estritamente em admiração acadêmica e coleguismo.
* **Critérios de Aceite:**
  - [ ] Adicionar verificação no LOM para rotular o medidor como "Respeito Acadêmico" ou "Camaradagem" para personagens com `hasRomanceRoute: false`.
  - [ ] Bloquear opções flertativas inapropriadas para estes NPCs com reações de desconforto ou repreensão formal.

---

## 📌 Épico 4: Mecânicas Interativas de Laboratório

### [TICK-007] Minigame do Sistema 10-20 (Achar o C3 e C4)
* **Prioridade:** Média
* **Objetivo:** Adicionar uma interação de clique onde o jogador usa a fita métrica virtual na cabeça do modelo para posicionar o eletrodo do tDCS.
* **Critérios de Aceite:**
  - [ ] Componente interativo com feedback de acerto/erro.
  - [ ] Acerto concede bônus de LOM com Gabriel (+Dominância técnica) e evita repreensão.

### [TICK-008] Minigame de Impedância do tDCS
* **Prioridade:** Média
* **Objetivo:** Se a esponja estiver seca, o aparelho apita erro de alta impedância; o jogador deve dosar a solução salina com precisão.
* **Critérios de Aceite:**
  - [ ] Simular slider de dosagem de salina.
  - [ ] Reação humorada do paciente ou bronca do Gabs se pingar solução nos olhos.

---

## 📌 Épico 5: Design de Áudio & Trilha

### [TICK-009] Trilha Sonora Dinâmica (BGM Loop)
* **Prioridade:** Baixa
* **Objetivo:** Conectar arquivos reais de áudio com loops suaves de fundo para rotina de laboratório e momentos tensos de avaliação.
* **Critérios de Aceite:**
  - [ ] Integrar controle de volume BGM / SFX independente no toolbar.
  - [ ] Fazer fade-out e fade-in de 1 segundo nas trocas de música de fundo.

---

## 📌 Épico 6: Experiência Mobile & Acessibilidade

### [TICK-010] Suporte a Gestos Touch & Responsividade Vertical
* **Prioridade:** Média
* **Objetivo:** Otimizar a jogabilidade em smartphones (Android/iOS).
* **Critérios de Aceite:**
  - [ ] Suporte a deslizar para cima (Swipe Up) para abrir o Histórico (Backlog).
  - [ ] Toque longo na caixa de diálogo ativa avanço acelerado (Skip).
  - [ ] Aviso amigável sugerindo rotação da tela (Modo Paisagem) para telas muito estreitas.

