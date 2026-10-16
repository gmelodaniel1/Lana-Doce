/**
 * Suíte de Testes de Integridade dos Episódios e Assets — Lana Doce
 * Exercita diretamente o parser real (`src/utils/episodeParser.ts`),
 * o catálogo de episódios (`src/data/episodes/index.ts`) e os helpers de assets (`src/utils/assetHelper.ts`).
 */

require('sucrase/register');

const fs = require('fs');
const path = require('path');
const { ALL_EPISODES, EPISODE_NUMBERS } = require('../src/data/episodes');
const { validateEpisodeScript } = require('../src/utils/episodeParser');
const { CHARACTERS_METADATA } = require('../src/constants/characters');
const { getBackgroundPath, getBackgroundFallbackPath } = require('../src/utils/assetHelper');

const ROOT_DIR = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');
const SPRITES_DIR = path.join(PUBLIC_DIR, 'assets', 'sprites');

let totalErrors = 0;

for (const epNum of EPISODE_NUMBERS) {
  const script = ALL_EPISODES[epNum];

  console.log(`\n========================================`);
  console.log(`Verificando Episódio ${epNum}: "${script.title}"`);
  console.log(`========================================`);

  const nodeCount = Object.keys(script.nodes).length;
  console.log(`ID: "${script.id}" | Nó inicial: "${script.initialNodeId}" | Total de nós: ${nodeCount}`);

  // 1. Validação estrutural do grafo via validateEpisodeScript real
  const { errors: graphErrors } = validateEpisodeScript(script);
  for (const err of graphErrors) {
    console.error(`[ERRO DE GRAFO] ${err}`);
    totalErrors++;
  }

  let choiceCount = 0;
  let endingCount = 0;

  for (const [nodeId, node] of Object.entries(script.nodes)) {
    // 2. Verificar existência física do background (.webp ou fallback .jpg)
    const webpRel = getBackgroundPath(node.background).replace(/^\.?\//, '');
    const jpgRel = getBackgroundFallbackPath(node.background).replace(/^\.?\//, '');
    const webpFile = path.join(PUBLIC_DIR, webpRel);
    const jpgFile = path.join(PUBLIC_DIR, jpgRel);

    if (!fs.existsSync(webpFile) && !fs.existsSync(jpgFile)) {
      console.error(`[ERRO DE ASSET] Cenário "${node.background}" ausente em disco (${webpFile})`);
      totalErrors++;
    }

    // 3. Verificar sprites de todos os personagens em cena (expressão exata precisa existir)
    for (const sp of [node.sprite, node.secondarySprite].filter(Boolean)) {
      if (!CHARACTERS_METADATA[sp.characterId]) {
        console.error(`[ERRO DE PERSONAGEM] Personagem "${sp.characterId}" no nó "${nodeId}" não existe em CHARACTERS_METADATA`);
        totalErrors++;
      }
      const exprFile = path.join(SPRITES_DIR, sp.characterId, `${sp.expression}.png`);
      if (!fs.existsSync(exprFile)) {
        console.error(`[ERRO DE SPRITE] Sprite ausente para "${sp.characterId}" (${sp.expression}) no nó "${nodeId}"`);
        totalErrors++;
      }
    }

    // 4. Verificar escolhas e deltas de LOM (garantindo que deltas zero foram filtrados pelo parser)
    if (node.choices && node.choices.length > 0) {
      choiceCount += node.choices.length;
      for (const choice of node.choices) {
        if (choice.affinityChanges) {
          for (const change of choice.affinityChanges) {
            if (!CHARACTERS_METADATA[change.characterId]) {
              console.error(`[ERRO DE LOM] Escolha "${choice.id}" afeta personagem inexistente: "${change.characterId}"`);
              totalErrors++;
            }
            if (change.delta === 0) {
              console.error(`[ERRO DE LOM] Escolha "${choice.id}" contém delta === 0 que deveria ter sido ignorado pelo parser`);
              totalErrors++;
            }
          }
        }
      }
    }

    // 5. Contabilizar desfechos
    if (node.isEnding) {
      endingCount++;
      console.log(`  -> Nó de desfecho identificado: "${nodeId}" ("${node.text.substring(0, 45)}...")`);
    }
  }

  // 6. Detectar nós órfãos (inalcançáveis a partir do nó inicial)
  const reachable = new Set();
  const queue = [script.initialNodeId];
  while (queue.length > 0) {
    const id = queue.shift();
    if (!id || reachable.has(id) || !script.nodes[id]) continue;
    reachable.add(id);
    const n = script.nodes[id];
    if (n.nextNodeId) queue.push(n.nextNodeId);
    for (const c of n.choices || []) queue.push(c.nextNodeId);
  }
  for (const nodeId of Object.keys(script.nodes)) {
    if (!reachable.has(nodeId)) {
      console.error(`[ERRO DE GRAFO] Nó "${nodeId}" é inalcançável a partir de "${script.initialNodeId}"`);
      totalErrors++;
    }
  }

  if (endingCount === 0) {
    console.error(`[ERRO] Episódio ${epNum} não possui nenhum nó de desfecho (isEnding)!`);
    totalErrors++;
  }

  console.log(`Total de escolhas interativas: ${choiceCount} | Nós de desfecho: ${endingCount}`);
}

console.log(`\n========================================`);
if (totalErrors === 0) {
  console.log(`[SUCESSO] Todos os ${EPISODE_NUMBERS.length} episódios e assets passaram nos testes com 0 ERROS!`);
  process.exit(0);
} else {
  console.error(`[FALHA] Suíte de integridade encontrou ${totalErrors} erro(s).`);
  process.exit(1);
}
