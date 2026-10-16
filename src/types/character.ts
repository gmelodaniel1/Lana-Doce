/**
 * Tipos e Definições de Personagens para Lana Doce (Amor Doce no LANA - UFPE)
 */

export type CharacterId =
  | 'katia'      // Profa. Kátia (Coordenadora Suprema - Sem rota romântica)
  | 'gabs'       // Gabriel / Gabs (Pós-Doc Sisudo e Metodológico)
  | 'daniel'     // Daniel (Doutorando Caótico & Carismático)
  | 'joao'       // João (Doutorando de Parkinson - Comprometido com Cecília)
  | 'beca'       // Rebeca / Beca (Doutoranda Crente - Casada)
  | 'sergio'     // Sérgio (Mestrando Robozão Desleixado)
  | 'fernanda'   // Fernanda (Mestranda Levemente Implicante)
  | 'cecilia'    // Cecília (Mestranda de Parkinson - Namorada do João)
  | 'rhayssa'    // Rhayssa (Mestranda Focada - Namorada do Álex)
  | 'leticia'    // Letícia (IC Bem-Humorada da Copa)
  | 'alex'       // Álex (IC Rockeiro do Projeto do Daniel - Namorado de Rhayssa)
  | 'olga'       // Olga (IC Dedicada do Parkinson - Namorada da Alana)
  | 'alana'      // Alana (IC Parceira do Parkinson - Namorada da Olga)
  | 'will'       // Willyberg / Will (IC Tagarela com Poker-Face)
  | 'samara'     // Samara (IC Silenciosa e Observadora)
  | 'ben_luis'   // Ben & Luís (Dupla cômica de novatos - composite)
  | 'ben'        // Ben (IC Novato Cômico individual)
  | 'luis'       // Luís (IC Novato Cômico individual)
  | 'protagonist'// O jogador / Aluno novato do LANA
  | 'narrator';  // Voz off / Narrador

export type CharacterPosition = 'left' | 'center' | 'right';

export type SpriteAnimation =
  | 'slide-up-fade'  // Entrada padrão suave
  | 'fade-in'        // Transição sutil
  | 'sprite-shake'   // Expressão de susto, bronca ou choque
  | 'sprite-bob'     // Fala ativa ou riso leve
  | 'none';

export interface CharacterSpriteConfig {
  characterId: CharacterId;
  expression: string;
  position?: CharacterPosition;
  animation?: SpriteAnimation;
  scale?: number;
  flipHorizontal?: boolean;
}

export interface CharacterMeta {
  id: CharacterId;
  name: string;
  nickname?: string;
  title: string;
  hasRomanceRoute: boolean; // false para Kátia, Beca, casais fixos
  themeColor: string;       // Cor de destaque para o nome e bordas
  badgeColor: string;       // Cor do badge/cargo
  defaultExpression: string;
  knownExpressions: string[];
}

