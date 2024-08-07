import Cardio from '@/icons/cardio'
import FatLose from '@/icons/fatLose';
import MuscleGain from '@/icons/muscleGain';
import Nutritions from '@/icons/nutritions';
import Functional from '@/icons/functional';

export type Info = {
  id: string;
  title: string;
  description: string;
  Icon: React.ElementType;
}

const infos: Info[] = [
  {
    id: '1',
    title: 'Cardio',
    description: 'Exercícios aeróbicos variados para melhorar sua resistência cardiovascular e aumentar sua energia geral.',
    Icon: Cardio
  },
  {
    id: '2',
    title: 'Perca de peso',
    description: 'Treinos personalizados e intensos para ajudar você a atingir suas metas de emagrecimento de forma eficiente.',
    Icon: FatLose
  },
  {
    id: '3',
    title: 'Ganho de músculo',
    description: 'Treinos de força e resistência com acompanhamento profissional para promover o crescimento muscular e aumentar sua força.',
    Icon: MuscleGain
  },
  {
    id: '4',
    title: 'Nutrição',
    description: 'Orientação alimentar especializada e planos de dieta ajustados às suas necessidades para potencializar seus resultados na academia.',
    Icon: Nutritions
  },
  {
    id: '5',
    title: 'Treino Funcional',
    description: 'Exercícios que melhoram a força, equilíbrio e flexibilidade, focando em movimentos naturais do corpo para uma melhor performance diária.',
    Icon: Functional
  }
]

export default function getAllInfos() { return infos }