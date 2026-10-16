import { BackgroundId } from '../types/dialogue';

/**
 * Auxiliar para resolução de caminhos de assets e compatibilidade com sprites e cenários reais.
 */

const EXPRESSION_FALLBACKS: Record<string, string> = {
  proud_fail: 'panicked_newbies',
  shocked: 'startled',
  angry: 'stern',
  nervous: 'worried',
  sad: 'disappointed',
};

export function getSpritePath(characterId: string, expression: string): string {
  return `./assets/sprites/${characterId}/${expression}.png?v=3`;
}

export function getFallbackSpritePath(characterId: string, expression: string): string | null {
  const fallbackExpr = EXPRESSION_FALLBACKS[expression];
  if (fallbackExpr && fallbackExpr !== expression) {
    return `./assets/sprites/${characterId}/${fallbackExpr}.png?v=3`;
  }
  if (expression !== 'neutral') {
    return `./assets/sprites/${characterId}/neutral.png?v=3`;
  }
  return null;
}

export const BACKGROUND_ALIASES: Record<string, BackgroundId> = {
  // Identificadores canônicos dos episódios JSON
  central_room: 'central_room',
  copa: 'copa',
  tms_room: 'tms_room',
  hallway_lana: 'hallway_lana',
  localite: 'localite',
  // Nomes originais dos arquivos de arte
  SalãoDoce: 'central_room',
  CopaDoce: 'copa',
  SalaTMS: 'tms_room',
  RCDoce: 'hallway_lana',
  LocaliteDoce: 'localite',
  // Aliases legados
  'salao-central': 'central_room',
  'sala-tms': 'tms_room',
  'corredor-lana': 'hallway_lana',
  'gabinete-katia': 'localite',
};

export function normalizeBackgroundId(backgroundId: string): BackgroundId {
  return BACKGROUND_ALIASES[backgroundId] || 'central_room';
}

export function getBackgroundPath(backgroundId: string): string {
  const resolved = normalizeBackgroundId(backgroundId);
  return `./assets/backgrounds/${resolved}.webp`;
}

export function getBackgroundFallbackPath(backgroundId: string): string {
  const resolved = normalizeBackgroundId(backgroundId);
  return `./assets/backgrounds/${resolved}.jpg`;
}
