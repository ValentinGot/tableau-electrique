import { LigneDisjoncteurType } from '@/modules/tableau-electrique/models/ligne-disjoncteur.model'
import type { LigneModel } from '@/modules/tableau-electrique/models/ligne.model'
import { Piece } from '@/modules/tableau-electrique/models/piece.enum'

export const tableauElectrique: LigneModel[] = [
  {
    id: 1,
    disjoncteurs: [
      {
        id: 1,
        type: LigneDisjoncteurType.ECLAIRAGE,
        pieces: [
          Piece.SALON,
          Piece.ENTREE,
          Piece.CUISINE,
          Piece.SALLE_D_EAU,
          Piece.TERASSE,
          Piece.GARAGE
        ],
        shortDescription: 'Rez-de-chaussée'
      },
      {
        id: 2,
        type: LigneDisjoncteurType.PRISE,
        pieces: [Piece.ENTREE, Piece.CUISINE],
        detail: ['Entrée x2', 'Cuisine x5', 'Hotte cuisine'],
        shortDescription: 'Entrée, Cuisine, Hotte'
      },
      {
        id: 3,
        type: LigneDisjoncteurType.PRISE,
        pieces: [Piece.BUREAU, Piece.SALLE_DE_BAIN, Piece.PALIER_ESCALIER],
        detail: ['Palier x1', 'Salle de bain - Lavabo', 'Salle de bain - Lave linge'],
        shortDescription: 'Palier, Bureau, SdB - Lavabo et lave linge'
      },
      {
        id: 4,
        type: LigneDisjoncteurType.PRISE,
        pieces: [Piece.CHAMBRE_LEONORE, Piece.CHAMBRE_VALENTIN_LAURENE],
        detail: ['Chambre Léonore x3', 'Chambre V&L x3'],
        shortDescription: 'Chambres'
      },
      {
        id: 5,
        type: LigneDisjoncteurType.FOUR,
        pieces: [Piece.CUISINE],
        detail: ['Four'],
        shortDescription: 'Four'
      },
      {
        id: 6,
        type: LigneDisjoncteurType.EVIER,
        pieces: [Piece.CUISINE],
        detail: [`Prise sous l'évier`],
        shortDescription: `Prise sous l'évier`
      }
    ]
  },
  {
    id: 2,
    disjoncteurs: [
      {
        id: 1,
        type: LigneDisjoncteurType.ECLAIRAGE,
        pieces: [
          Piece.CHAMBRE_LEONORE,
          Piece.CHAMBRE_VALENTIN_LAURENE,
          Piece.TOILETTE,
          Piece.BUREAU,
          Piece.SALLE_DE_BAIN,
          Piece.PALIER_ESCALIER
        ],
        shortDescription: 'Etage'
      },
      {
        id: 2,
        type: LigneDisjoncteurType.VOLET_ROULANT,
        pieces: [Piece.SALON, Piece.CHAMBRE_VALENTIN_LAURENE, Piece.BUREAU],
        detail: ['Volets roulant'],
        shortDescription: 'Volets roulant'
      },
      {
        id: 3,
        type: LigneDisjoncteurType.PRISE,
        pieces: [Piece.SALON],
        detail: ['Afficheur de consommations EC450'],
        shortDescription: 'Afficheur de conso EC450'
      },
      {
        id: 4,
        type: LigneDisjoncteurType.PRISE,
        pieces: [Piece.SALON, Piece.SAS, Piece.GARAGE],
        detail: [
          'A gauche du tableau électrique',
          'Bar',
          'Table à manger',
          `Mur vers l'extérieur x2`,
          'TV x3',
          'Sas côté jardin',
          'Garage'
        ],
        shortDescription: 'Salon, sas côté jardin, garage'
      },
      {
        id: 5,
        type: LigneDisjoncteurType.CHAUFFE_EAU,
        pieces: [Piece.GARAGE],
        detail: ['Chauffe eau'],
        shortDescription: 'Chauffe eau'
      },
      {
        id: 6,
        type: LigneDisjoncteurType.CHAUDIERE,
        pieces: [Piece.CUISINE],
        detail: ['Chaudière', 'Frigo'],
        shortDescription: 'Chaudière et frigo'
      }
    ]
  },
  {
    id: 3,
    disjoncteurs: [
      {
        id: 1,
        type: LigneDisjoncteurType.PLAQUE_DE_CUISSON,
        pieces: [Piece.CUISINE],
        detail: ['Plaque de cuisson'],
        shortDescription: 'Plaque de cuisson'
      },
      {
        id: 2,
        type: LigneDisjoncteurType.ECLAIRAGE,
        pieces: [Piece.SAS],
        shortDescription: 'Sas'
      },
      {
        id: 3,
        type: LigneDisjoncteurType.LAVE_VAISSELLE,
        pieces: [Piece.CUISINE],
        detail: ['Lave vaisselle'],
        shortDescription: 'Lave vaisselle'
      },
      {
        id: 4,
        type: LigneDisjoncteurType.PRISE,
        pieces: [Piece.SALON, Piece.SAS],
        detail: [`Sas côté porte d'entrée`, 'Tableau électrique'],
        shortDescription: 'Sas côté porte entrée, tableau électrique'
      },
      {
        id: 5,
        type: LigneDisjoncteurType.SECHE_LINGE,
        pieces: [Piece.SALLE_DE_BAIN],
        detail: ['Sèche linge'],
        shortDescription: 'Sèche linge'
      },
      {
        id: 6,
        type: LigneDisjoncteurType.VMC,
        pieces: [Piece.CUISINE],
        detail: ['VMC'],
        shortDescription: 'VMC'
      }
    ]
  }
]
