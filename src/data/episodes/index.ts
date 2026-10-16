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
      'Seu primeiro dia de estágio no LANA. Conheça a equipe, sobreviva ao interrogatório metodológico do Gabs e encontre a chave perdida da Sala 1 de TMS.',
    background: 'central_room',
    duration: '~8 min',
    featuredCharacters: ['gabs', 'beca', 'samara', 'leticia', 'will', 'daniel', 'sergio', 'fernanda'],
    unlocked: true,
    script: EPISODE_1_SCRIPT,
  },
  {
    number: 2,
    title: EPISODE_2_SCRIPT.title,
    description:
      'Segundo dia de coleta de tDCS. Descubra por que o estimulador está apitando alta impedância e ajude a equipe a salvar a sessão.',
    background: 'central_room',
    duration: '~6 min',
    featuredCharacters: ['alex', 'rhayssa', 'ben_luis', 'daniel', 'fernanda'],
    unlocked: true,
    script: EPISODE_2_SCRIPT,
  },
  {
    number: 3,
    title: EPISODE_3_SCRIPT.title,
    description:
      'Coleta com paciente voluntário na sala de rTMS com João, Cecília, Alana e Olga sob a supervisão atenta e serena da Profa. Kátia.',
    background: 'tms_room',
    duration: '~7 min',
    featuredCharacters: ['joao', 'cecilia', 'olga', 'alana', 'katia', 'leticia'],
    unlocked: true,
    script: EPISODE_3_SCRIPT,
  },
];
