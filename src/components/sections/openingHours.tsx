import openingHours from "@/data/openingHours"
import Title from "../title"

export default function OpeningHours() {
  return (
    <section id='schedule' className="flex flex-col items-center px-8 lg:px-40 md:px-16 gap-8 scroll-mt-14">
      <Title>Horário de Atendimento</Title>

      <div className="flex gap-8 bg-bg1 p-12 rounded-xl flex-wrap">
        {
          openingHours.map((item, index) => (
            <div className="flex flex-col gap-2" key={index}>
              <h2 className="font-urbanist font-bold text-primary text-xl md:text-2xl">{item.day}</h2>
              <div className="flex text-tx2 gap-1 items-center">
                <item.icon size={20} />
                <p className="font-poppins text-sm md:text-base">{item.hours}</p>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}