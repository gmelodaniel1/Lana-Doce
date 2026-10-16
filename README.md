# Lana Doce - Visual Novel Web (React + TS + Tailwind)

Uma Visual Novel interativa inspirada no universo acadêmico do **Laboratório de Neurociência Aplicada (LANA - UFPE)** e na mecânica clássica de Love'o'Meter (LOM) de *Amor Doce*.

---

## 🚀 Como Executar o Projeto

1. Instalar dependências (caso não tenha feito ainda):
   ```bash
   npm install
   ```

2. Iniciar o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
   Acesse a URL exibida no terminal (normalmente `http://localhost:5173`).

3. Gerar build de produção:
   ```bash
   npm run build
   ```

---

## 🎮 Controles no Jogo

- **Avançar Diálogo:** Clique em qualquer lugar na caixa de diálogo ou pressione as teclas <kbd>Espaço</kbd> / <kbd>Enter</kbd>.
- **Acelerar Texto:** Clique enquanto o texto estiver sendo digitado para concluí-lo instantaneamente.
- **Escolhas:** Clique na opção desejada quando a lista de escolhas aparecer.
- **AUTO:** Ativa o avanço automático de texto.
- **LOG:** Abre o histórico completo de diálogos e escolhas da sessão.
- **Velocidade (1x / 2x / 3x):** Alterna o ritmo da digitação.
- **Mute:** Ativa/desativa os efeitos sonoros táteis via Web Audio API.
- **Reiniciar:** Reinicia a cena piloto desde o início.

---

## 📁 Onde Inserir Sprites e Cenários

Consulte o documento detalhado [`ASSETS_GUIDE.md`](./ASSETS_GUIDE.md).

- **Sprites:** Coloque os arquivos `.png` transparentes (800x1200px) em `public/assets/sprites/[personagem]/[expressao].png`.
- **Cenários:** Coloque os arquivos `.webp` ou `.jpg` (1920x1080px) em `public/assets/backgrounds/[cenario].webp`.
- **Áudios:** Coloque os arquivos de efeito em `public/assets/audio/sfx/` e músicas em `public/assets/audio/bgm/`.

*Nota:* O motor possui renderizadores vetoriais integrados (SVG), o que significa que o jogo já é 100% jogável e animado mesmo antes de você adicionar imagens externas!

---

## 📋 Próximos Passos & Tarefas

Veja o arquivo [`TICKETS.md`](./TICKETS.md) para o backlog completo de desenvolvimento e User Stories.

