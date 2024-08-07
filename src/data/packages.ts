export type Package = {
  id: string;
  name: string;
  price: number;
  billed: string;
  benefits: string[];
  bestOffer?: boolean;
}

const montly: Package[] = [
  {
    id: '1',
    name: 'Pacote Básico',
    price: 80.00,
    billed: 'por mês',
    benefits: [
      '2 dias por semana',
      'Acesso a toda academia',
      'Treinos Personalizados',
      'Acesso a Personal Trainers'
    ]
  },
  {
    id: '2',
    name: 'Pacote Médio',
    price: 90.00,
    billed: 'por mês',
    benefits: [
      '2 dias por semana',
      'Acesso a toda academia',
      'Treinos Personalizados',
      'Acesso a Personal Trainers'
    ]
  },
  {
    id: '3',
    name: 'Pacote Pró',
    price: 100.00,
    billed: 'por mês',
    benefits: [
      '2 dias por semana',
      'Acesso a toda academia',
      'Treinos Personalizados',
      'Acesso a Personal Trainers'
    ],
    bestOffer: true
  },
  {
    id: '4',
    name: 'Pacote Atleta',
    price: 110.00,
    billed: 'por mês',
    benefits: [
      '2 dias por semana',
      'Acesso a toda academia',
      'Treinos Personalizados',
      'Acesso a Personal Trainers'
    ]
  },
]

const quarterly: Package[] = [
  {
    id: '5',
    name: 'Pacote Básico',
    price: 220.00,
    billed: 'por 3 meses',
    benefits: [
      '2 dias por semana',
      'Acesso a toda academia',
      'Treinos Personalizados',
      'Acesso a Personal Trainers'
    ]
  },
  {
    id: '6',
    name: 'Pacote Médio',
    price: 250.00,
    billed: 'por 3 meses',
    benefits: [
      '2 dias por semana',
      'Acesso a toda academia',
      'Treinos Personalizados',
      'Acesso a Personal Trainers'
    ]
  },
  {
    id: '7',
    name: 'Pacote Pró',
    price: 280.00,
    billed: 'por 3 meses',
    benefits: [
      '2 dias por semana',
      'Acesso a toda academia',
      'Treinos Personalizados',
      'Acesso a Personal Trainers'
    ],
    bestOffer: true
  }
]

const others: Package[] = [
  {
    id: '8',
    name: 'Pacote Básico',
    price: 900.00,
    billed: 'por 1 ano',
    benefits: [
      '2 dias por semana',
      'Acesso a toda academia',
      'Treinos Personalizados',
      'Acesso a Personal Trainers'
    ]
  },
  {
    id: '9',
    name: 'Diária',
    price: 20.00,
    billed: 'por 1 dia',
    benefits: [
      '1 dia',
      'Acesso a toda academia',
      'Treinos Personalizados',
      'Acesso a Personal Trainers'
    ]
  },
]

export default function getAllPackages() {
  return [
    montly,
    quarterly,
    others
  ];
}
