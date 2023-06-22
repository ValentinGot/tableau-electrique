import type { LigneDisjoncteurModel } from '@/modules/tableau-electrique/models/ligne-disjoncteur.model'

export interface LigneModel {
  id: number
  disjoncteurs: LigneDisjoncteurModel[]
}
