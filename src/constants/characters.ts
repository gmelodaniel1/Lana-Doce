import { CharacterId, CharacterMeta } from '../types/character';

export const CHARACTERS_METADATA: Record<CharacterId, CharacterMeta> = {
  katia: {
    id: 'katia',
    name: 'Profa. Kátia',
    nickname: 'Kátia',
    title: 'Coordenadora Suprema do LANA',
    hasRomanceRoute: false, // Casada - Mentoria / Respeito
    themeColor: '#0284c7', // Sky Blue institucional
    badgeColor: '#0369a1',
    defaultExpression: 'neutral',
    knownExpressions: ['neutral', 'happy', 'disappointed', 'analytical'],
  },
  gabs: {
    id: 'gabs',
    name: 'Gabriel',
    nickname: 'Gabs',
    title: 'Pós-Doutorando Sisudo',
    hasRomanceRoute: true,
    themeColor: '#475569', // Slate sóbrio
    badgeColor: '#334155',
    defaultExpression: 'neutral',
    knownExpressions: ['neutral', 'stern', 'approving', 'tired'],
  },
  daniel: {
    id: 'daniel',
    name: 'Daniel',
    nickname: 'Dani',
    title: 'Doutorando Caótico & Carismático',
    hasRomanceRoute: true,
    themeColor: '#ea580c', // Laranja vibrante/caótico
    badgeColor: '#c2410c',
    defaultExpression: 'neutral',
    knownExpressions: ['neutral', 'chaotic_excited', 'laughing', 'awkward', 'extra'],
  },
  joao: {
    id: 'joao',
    name: 'João',
    nickname: 'João',
    title: 'Doutorando de Parkinson',
    hasRomanceRoute: false, // Comprometido com Cecília
    themeColor: '#16a34a', // Verde foco
    badgeColor: '#15803d',
    defaultExpression: 'neutral',
    knownExpressions: ['neutral', 'happy', 'focused', 'tired'],
  },
  beca: {
    id: 'beca',
    name: 'Rebeca',
    nickname: 'Beca',
    title: 'Doutoranda Crente',
    hasRomanceRoute: false, // Casada
    themeColor: '#8b5cf6', // Roxo discreto
    badgeColor: '#7c3aed',
    defaultExpression: 'neutral',
    knownExpressions: ['neutral', 'blessed', 'shocked_polite', 'worried'],
  },
  sergio: {
    id: 'sergio',
    name: 'Sérgio',
    nickname: 'Robozão',
    title: 'Mestrando Desleixado e Bonachão',
    hasRomanceRoute: true,
    themeColor: '#0d9488', // Teal relaxado
    badgeColor: '#0f766e',
    defaultExpression: 'neutral',
    knownExpressions: ['neutral', 'laughing', 'robotic_blank', 'chill', 'extra'],
  },
  fernanda: {
    id: 'fernanda',
    name: 'Fernanda',
    nickname: 'Fer',
    title: 'Mestranda Levemente Implicante',
    hasRomanceRoute: true,
    themeColor: '#db2777', // Magenta irônico
    badgeColor: '#be185d',
    defaultExpression: 'neutral',
    knownExpressions: ['neutral', 'teasing', 'eye_roll', 'warm', 'extra'],
  },
  cecilia: {
    id: 'cecilia',
    name: 'Cecília',
    nickname: 'Ceci',
    title: 'Mestranda de Parkinson',
    hasRomanceRoute: false, // Namorada do João
    themeColor: '#059669', // Esmeralda
    badgeColor: '#047857',
    defaultExpression: 'neutral',
    knownExpressions: ['neutral', 'happy', 'strict', 'chatty', 'extra'],
  },
  rhayssa: {
    id: 'rhayssa',
    name: 'Rhayssa',
    nickname: 'Rhay',
    title: 'Mestranda Focada e Apaixonada',
    hasRomanceRoute: false, // Namorada do Álex
    themeColor: '#e11d48', // Rose romance
    badgeColor: '#be123c',
    defaultExpression: 'neutral',
    knownExpressions: ['neutral', 'in_love', 'stressed', 'curious'],
  },
  leticia: {
    id: 'leticia',
    name: 'Letícia',
    nickname: 'Lê',
    title: 'IC Bem-Humorada da Copa',
    hasRomanceRoute: true,
    themeColor: '#f59e0b', // Âmbar café/lanche
    badgeColor: '#d97706',
    defaultExpression: 'neutral',
    knownExpressions: ['neutral', 'joyful', 'caught_snacking', 'hungry'],
  },
  alex: {
    id: 'alex',
    name: 'Álex',
    nickname: 'Álex Rock',
    title: 'IC Rockeiro do Projeto do Daniel',
    hasRomanceRoute: false, // Namorado de Rhayssa
    themeColor: '#6366f1', // Indigo rocker
    badgeColor: '#4f46e5',
    defaultExpression: 'neutral',
    knownExpressions: ['neutral', 'happy', 'busy_lab', 'overwhelmed'],
  },
  olga: {
    id: 'olga',
    name: 'Olga',
    nickname: 'Olga',
    title: 'IC Dedicada do Parkinson',
    hasRomanceRoute: false, // Namorada da Alana
    themeColor: '#14b8a6', // Ciano suave
    badgeColor: '#0d9488',
    defaultExpression: 'neutral',
    knownExpressions: ['neutral', 'happy', 'concerned', 'focused'],
  },
  alana: {
    id: 'alana',
    name: 'Alana',
    nickname: 'Alana',
    title: 'IC Parceira do Parkinson',
    hasRomanceRoute: false, // Namorada da Olga
    themeColor: '#10b981', // Verde mente
    badgeColor: '#059669',
    defaultExpression: 'neutral',
    knownExpressions: ['neutral', 'happy', 'determined', 'surprised'],
  },
  will: {
    id: 'will',
    name: 'Willyberg',
    nickname: 'Will',
    title: 'IC Tagarela com Poker-Face',
    hasRomanceRoute: true,
    themeColor: '#a855f7', // Púrpura fofoca
    badgeColor: '#9333ea',
    defaultExpression: 'neutral',
    knownExpressions: ['neutral', 'chatty_excited', 'tea_spilling', 'unimpressed'],
  },
  samara: {
    id: 'samara',
    name: 'Samara',
    nickname: 'Sam',
    title: 'IC Silenciosa e Observadora',
    hasRomanceRoute: true,
    themeColor: '#64748b', // Cinza tímido
    badgeColor: '#475569',
    defaultExpression: 'neutral',
    knownExpressions: ['neutral', 'shy_smile', 'startled', 'observant'],
  },
  ben_luis: {
    id: 'ben_luis',
    name: 'Ben & Luís',
    nickname: 'A Dupla de Bobões',
    title: 'ICs Novatos Cômicos',
    hasRomanceRoute: false,
    themeColor: '#eab308', // Amarelo comédia
    badgeColor: '#ca8a04',
    defaultExpression: 'neutral',
    knownExpressions: ['neutral', 'goofing_around', 'panicked_newbies', 'proud_fail'],
  },
  ben: {
    id: 'ben',
    name: 'Ben',
    nickname: 'Ben',
    title: 'IC Novato Cômico',
    hasRomanceRoute: false,
    themeColor: '#eab308',
    badgeColor: '#ca8a04',
    defaultExpression: 'neutral',
    knownExpressions: ['neutral', 'goofing_around', 'panicked_newbies'],
  },
  luis: {
    id: 'luis',
    name: 'Luís',
    nickname: 'Luís',
    title: 'IC Novato Cômico',
    hasRomanceRoute: false,
    themeColor: '#eab308',
    badgeColor: '#ca8a04',
    defaultExpression: 'neutral',
    knownExpressions: ['neutral', 'goofing_around', 'panicked_newbies', 'proud_fail'],
  },
  protagonist: {
    id: 'protagonist',
    name: 'Você',
    title: 'Estudante de Fisioterapia no LANA',
    hasRomanceRoute: false,
    themeColor: '#ec4899', // Rosa principal
    badgeColor: '#db2777',
    defaultExpression: 'neutral',
    knownExpressions: ['neutral', 'nervous', 'confident'],
  },
  narrator: {
    id: 'narrator',
    name: '',
    title: 'Narrador',
    hasRomanceRoute: false,
    themeColor: '#94a3b8',
    badgeColor: '#64748b',
    defaultExpression: 'neutral',
    knownExpressions: ['neutral'],
  },
};

/**
 * Integrantes do LANA com medidor de afinidade (LOM) ativo na interface.
 */
export const LANA_ROSTER_IDS: CharacterId[] = [
  'katia',
  'gabs',
  'daniel',
  'joao',
  'beca',
  'sergio',
  'fernanda',
  'cecilia',
  'rhayssa',
  'leticia',
  'alex',
  'olga',
  'alana',
  'will',
  'samara',
  'ben_luis',
];

/**
 * Personagens que possuem sprites fatiados em `public/assets/sprites/`.
 */
export const GALLERY_CHARACTER_IDS: CharacterId[] = [
  ...LANA_ROSTER_IDS,
  'ben',
  'luis',
];


