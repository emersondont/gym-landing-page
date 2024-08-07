import { TbClock, TbClockX } from "react-icons/tb";

const openingHours = [
  {
    day: 'Segunda - Sexta',
    hours: '08:00 - 18:00',
    icon: TbClock
  },
  {
    day: 'Sabado',
    hours: '09:00 - 14:00',
    icon: TbClock
  },
  {
    day: 'Domingos e feriados',
    hours: 'Sem atendimento',
    icon: TbClockX
  }
]

export default openingHours;