import rawEpisode1 from './episode1.json';
import rawEpisode2 from './episode2.json';
import rawEpisode3 from './episode3.json';
import { parseRawEpisode, RawEpisode } from '../../utils/episodeParser';
import { BackgroundId, DialogueScript } from '../../types/dialogue';
import { CharacterId } from '../../types/character';

export const EPISODE_1_SCRIPT: DialogueScript = parseRawEpisode(rawEpisode1 as unknown as RawEpisode);
export const EPISODE_2_SCRIPT: DialogueScript = parseRawEpisode(rawEpisode2 as unknown as RawEpisode);
export const EPISODE_3_SCRIPT: DialogueScript = parseRawEpisode(rawEpisode3 as unknown as RawEpisode);

export const EPISODE_NUMBERS = [1, 2, 3] as const;
export type EpisodeNumber = (typeof EPISODE_NUMBERS)[number];

export const ALL_EPISODES: Record<number, DialogueScript> = {
  1: EPISODE_1_SCRIPT,
  2: EPISODE_2_SCRIPT,
  3: EPISODE_3_SCRIPT,
};

export interface EpisodeMetadata {
  number: EpisodeNumber;
  title: string;
  description: string;
  background: BackgroundId;
  duration: string;
  featuredCharacters: CharacterId[];
  unlocked: boolean;
  script: DialogueScript;
}

export const EPISODES_METADATA: EpisodeMetadata[] = [
  {
    number: 1,
    title: EPISODE_1_SCRIPT.title,
    description:
      'Seu primeiro dia no LANA. Conheça a equipe, sobreviva ao rigor do Gabriel e encontre a chave perdida da Sala 1 de TMS — enquanto percebe que nem todo mundo está tão bem quanto parece.',
    background: 'central_room',
    duration: '~15 min',
    featuredCharacters: ['gabs', 'samara', 'beca', 'leticia', 'will', 'daniel', 'sergio', 'fernanda'],
    unlocked: true,
    script: EPISODE_1_SCRIPT,
  },
  {
    number: 2,
    title: EPISODE_2_SCRIPT.title,
    description:
      'O tDCS apita alta impedância no meio de um clima pesado entre Daniel e Fernanda. Salve a coleta, ouça quem precisa desabafar e descubra o segredo que o Sérgio está guardando.',
    background: 'central_room',
    duration: '~15 min',
    featuredCharacters: ['alex', 'rhayssa', 'ben_luis', 'daniel', 'fernanda', 'samara', 'sergio', 'gabs'],
    unlocked: true,
    script: EPISODE_2_SCRIPT,
  },
  {
    number: 3,
    title: EPISODE_3_SCRIPT.title,
    description:
      'Coleta de rTMS com a equipe de Parkinson sob o olhar sereno da Profa. Kátia. Depois, segredos vêm à tona: o Gabriel baixa a guarda, Daniel e Sérgio se enfrentam e um envelope pode mudar tudo.',
    background: 'tms_room',
    duration: '~18 min',
    featuredCharacters: ['joao', 'cecilia', 'olga', 'alana', 'katia', 'gabs', 'daniel', 'sergio', 'fernanda', 'samara'],
    unlocked: true,
    script: EPISODE_3_SCRIPT,
  },
];
