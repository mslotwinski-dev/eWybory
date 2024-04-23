import Party from './parties'

enum ElecType {
  Local = 0,
  European = 1,
  President = 2,
  Parliamentary = 3,
}

export default [
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
