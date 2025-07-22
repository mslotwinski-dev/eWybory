import Party from './parties'
import { ElecType } from './types'
import Private from './private'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const dummy = [
  {
    year: 2025,
    type: ElecType.President,
    elections: [{ party: Party.PO, person: 'Bogdan Boner', comment: '' }],
  },
  {
    year: 2024,
    type: ElecType.Local,
    elections: [
      {
        party: Party.None,
        person: 'Bart',
        comment: 'Prezydent Warszawy',
        personal: true,
      },
      { party: Party.None, person: 'Rogg', comment: 'Sejmik Mazowiecki' },
      { party: Party.None, person: 'Pogg', comment: 'Rada Warszawy' },
      { party: Party.None, person: 'Ogg', comment: 'Rada Śródmieścia' },
    ],
  },
  {
    year: 2023,
    type: ElecType.Parliamentary,
    elections: [{ party: Party.PiS, person: 'Ojciec Rydzyk', comment: '' }],
  },
]

export default dummy
