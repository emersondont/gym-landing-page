'use client'
import openingHours from "@/data/openingHours"
import Title from "../title"
import { motion } from 'framer-motion';

export default function OpeningHours() {
  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    }
  };
  return (
    <section className="flex flex-col items-center px-8 lg:px-40 md:px-16 gap-8">
      <Title>Horário de Atendimento</Title>

      <motion.div
        transition={{ staggerChildren: 0.2 }}
        initial="hidden"
        whileInView="visible"
        className="flex gap-8 bg-bg1 p-12 rounded-xl flex-wrap"
      >
        {
          openingHours.map((item, index) => (
            <motion.div variants={itemVariants} className="flex flex-col gap-2" key={index}>
              <h2 className="font-urbanist font-bold text-primary text-xl md:text-2xl">{item.day}</h2>
              <div className="flex text-tx2 gap-1 items-center">
                <item.icon size={20} />
                <p className="font-poppins text-sm md:text-base">{item.hours}</p>
              </div>
            </motion.div>
          ))
        }
      </motion.div>
    </section>
  )
}