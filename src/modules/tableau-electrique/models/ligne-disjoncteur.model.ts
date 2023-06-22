import type { Piece } from '@/modules/tableau-electrique/models/piece.enum'

export enum LigneDisjoncteurType {
  PRISE = 'prise',
  ECLAIRAGE = 'eclairage',
  FOUR = 'four',
  EVIER = 'evier',
  VOLET_ROULANT = 'volet-roulant',
  CHAUFFE_EAU = 'chauffe-eau',
  CHAUDIERE = 'chaudiere',
  PLAQUE_DE_CUISSON = 'plaque-de-cuisson',
  LAVE_VAISSELLE = 'lave-vaisselle',
  SECHE_LINGE = 'seche-linge'
}

export interface LigneDisjoncteurModel {
  id: number
  type: LigneDisjoncteurType
  pieces: Piece[]
  detail?: string[]
  shortDescription: string
}
