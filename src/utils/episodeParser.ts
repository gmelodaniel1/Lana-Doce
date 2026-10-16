import { CharacterId } from '../types/character';
import { AffinityChange, BgmTrack, DialogueChoice, DialogueNode, DialogueScript, SfxType } from '../types/dialogue';
import { CHARACTERS_METADATA } from '../constants/characters';
import { normalizeBackgroundId } from './assetHelper';

/**
 * Interface do JSON bruto dos episódios (ex: Episódio 1.json)
 */
export interface RawEpisodeChoice {
  text: string;
  lomChange?: Record<string, number>;
  next: string;
}

export interface RawEpisodeNode {
  id: string;
  speaker: string;
  characterId: string | null;
  expression: string | null;
  background: string;
  text: string;
  next?: string | null;
  choices?: RawEpisodeChoice[];
  /** Trilha fixa para a cena (sobrepõe a detecção automática). */
  bgm?: BgmTrack;
  /** Efeito sonoro fixo; "none" silencia a detecção automática. */
  sfx?: SfxType | 'none';
}

export interface RawEpisode {
  episode: number;
  title: string;
  startingNodeId: string;
  nodes: Record<string, RawEpisodeNode>;
}

/**
 * Dicionário de normalização de IDs de personagens para compatibilidade
 */
export const CHARACTER_ID_ALIASES: Record<string, CharacterId> = {
  rebeca: 'beca',
  beca: 'beca',
  gabriel: 'gabs',
  gabs: 'gabs',
  katia: 'katia',
  daniel: 'daniel',
  joao: 'joao',
  sergio: 'sergio',
  fernanda: 'fernanda',
  cecilia: 'cecilia',
  rhayssa: 'rhayssa',
  leticia: 'leticia',
  alex: 'alex',
  olga: 'olga',
  alana: 'alana',
  will: 'will',
  willyberg: 'will',
  samara: 'samara',
  ben_luis: 'ben_luis',
  ben: 'ben',
  luis: 'luis',
  narrador: 'narrator',
  narrator: 'narrator',
  voce: 'protagonist',
  você: 'protagonist',
  protagonist: 'protagonist',
};

/**
 * Normaliza qualquer chave ou apelido para um CharacterId válido
 */
export function normalizeCharacterId(rawId: string | null | undefined): CharacterId {
  if (!rawId) return 'narrator';
  const clean = rawId.toLowerCase().trim();
  return CHARACTER_ID_ALIASES[clean] || (clean in CHARACTERS_METADATA ? (clean as CharacterId) : 'narrator');
}

/**
 * Converte um RawEpisode em um DialogueScript totalmente tipado para o motor de jogo
 */
export function parseRawEpisode(raw: RawEpisode): DialogueScript {
  const nodes: Record<string, DialogueNode> = {};

  for (const [nodeId, rawNode] of Object.entries(raw.nodes)) {
    const speakerId = normalizeCharacterId(
      rawNode.characterId || (rawNode.speaker === 'Narrador' ? 'narrator' : rawNode.speaker)
    );
    const isNarrator = speakerId === 'narrator';

    const speakerDisplayName = isNarrator
      ? undefined
      : rawNode.speaker || CHARACTERS_METADATA[speakerId]?.name || undefined;

    const hasSprite = !isNarrator && speakerId !== 'protagonist';
    const sprite = hasSprite
      ? {
          characterId: speakerId,
          expression: rawNode.expression || 'neutral',
          position: 'center' as const,
          animation: 'slide-up-fade' as const,
        }
      : undefined;

    let choices: DialogueChoice[] | undefined = undefined;
    if (rawNode.choices && rawNode.choices.length > 0) {
      choices = rawNode.choices.map((c, idx) => {
        const affinityChanges: AffinityChange[] = [];
        if (c.lomChange) {
          for (const [rawChar, delta] of Object.entries(c.lomChange)) {
            if (delta === 0) continue; // Ignora deltas neutros (0 LOM)
            const charId = normalizeCharacterId(rawChar);
            if (charId && charId !== 'narrator' && charId !== 'protagonist') {
              affinityChanges.push({
                characterId: charId,
                delta,
              });
            }
          }
        }

        return {
          id: `${nodeId}_choice_${idx}`,
          text: c.text,
          nextNodeId: c.next,
          affinityChanges: affinityChanges.length > 0 ? affinityChanges : undefined,
        };
      });
    }

    const normBg = normalizeBackgroundId(rawNode.background);
    const textLower = rawNode.text.toLowerCase();

    // Detecção contextual de SFX
    let sfx: SfxType | undefined = undefined;
    if (textLower.includes('pulso') || textLower.includes('bobina') || textLower.includes('rtms') || textLower.includes('disparo')) {
      sfx = 'tms';
    } else if (textLower.includes('apitando') || textLower.includes('impedância') || textLower.includes('tdcs') || textLower.includes('bipe')) {
      sfx = 'tdcs';
    } else if (textLower.includes('passos') || textLower.includes('andando') || (normBg === 'hallway_lana' && rawNode.id.includes('01'))) {
      sfx = 'footsteps';
    } else if (textLower.includes('porta') || textLower.includes('tranca') || textLower.includes('chave')) {
      sfx = 'door';
    }

    // Detecção contextual de BGM (clima sonoro)
    let bgm: BgmTrack = 'casual';
    if (normBg === 'tms_room' || textLower.includes('estimulador') || textLower.includes('estimulação') || textLower.includes('hotspot')) {
      bgm = 'laboratory';
    } else if (
      speakerId === 'gabs' ||
      textLower.includes('rigor metodológico') ||
      textLower.includes('interrogatório') ||
      textLower.includes('impedância alta') ||
      textLower.includes('supervisão')
    ) {
      bgm = 'tension';
    } else if (
      textLower.includes('amor') ||
      textLower.includes('apaixonad') ||
      textLower.includes('namorad') ||
      textLower.includes('carinho')
    ) {
      bgm = 'romance';
    } else {
      bgm = 'casual';
    }

    if (rawNode.bgm) bgm = rawNode.bgm;
    if (rawNode.sfx) sfx = rawNode.sfx === 'none' ? undefined : rawNode.sfx;

    const isEnding = !rawNode.next && (!choices || choices.length === 0);

    nodes[nodeId] = {
      id: nodeId,
      speaker: speakerId,
      speakerDisplayName,
      text: rawNode.text,
      sprite,
      background: normBg,
      sfx,
      bgm,
      choices,
      nextNodeId: rawNode.next || undefined,
      isEnding,
    };
  }

  return {
    id: `episode-${raw.episode}`,
    title: raw.title,
    description: `Episódio ${raw.episode}: ${raw.title}`,
    initialNodeId: raw.startingNodeId,
    nodes,
  };
}

/**
 * Validador de integridade da árvore de nós de um episódio
 */
export function validateEpisodeScript(script: DialogueScript): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!script.initialNodeId) {
    errors.push(`Episódio ${script.id}: initialNodeId não definido.`);
  } else if (!script.nodes[script.initialNodeId]) {
    errors.push(`Episódio ${script.id}: initialNodeId "${script.initialNodeId}" não existe em nodes.`);
  }

  for (const [nodeId, node] of Object.entries(script.nodes)) {
    if (node.nextNodeId && !node.isEnding) {
      if (!script.nodes[node.nextNodeId]) {
        errors.push(`Nó "${nodeId}": nextNodeId "${node.nextNodeId}" não existe na árvore.`);
      }
    }

    if (node.choices) {
      node.choices.forEach((choice, idx) => {
        if (!choice.text.trim()) {
          errors.push(`Nó "${nodeId}" escolha [${idx}]: texto está vazio.`);
        }
        if (!choice.nextNodeId) {
          errors.push(`Nó "${nodeId}" escolha [${idx}]: nextNodeId está vazio.`);
        } else if (!script.nodes[choice.nextNodeId]) {
          errors.push(`Nó "${nodeId}" escolha [${idx}]: aponta para nó inexistente "${choice.nextNodeId}".`);
        }
      });
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}
