'use client'
import { motion } from 'framer-motion';
import Title from "../title";

const address = [
  {
    title: 'RUA',
    content: 'Rua São Paulo, 123'
  },
  {
    title: 'CIDADE',
    content: 'São Paulo'
  },
  {
    title: 'ESTADO',
    content: 'SP'
  },
  {
    title: 'CEP',
    content: '12345-678'
  }
]

export default function Adrress() {
  const itemVariantsFromLeft = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    }
  };
  const itemVariantsFromRight = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    }
  };
  return (
    <section className="flex flex-col items-center gap-8 px-8 lg:px-40 md:px-16">
      <Title>Endereço</Title>

      <motion.div
        transition={{ staggerChildren: 0.1 }}
        initial="hidden"
        whileInView="visible"
        className="flex flex-wrap w-full gap-4 sm:gap-0">
        <div className="flex flex-col gap-2 w-full sm:w-1/2">
          {
            address.map((item, index) => (
              <motion.div variants={itemVariantsFromLeft} key={index} className="flex items-center gap-2 w-full sm:justify-end">
                <p className="font-poppins text-tx3 w-16 text-sm md:text-base">{item.title}</p>
                <h2 className="font-urbanist text-tx1 font-semibold text-xl md:text-2xl w-60">{item.content}</h2>
              </motion.div>
            ))
          }
        </div>

        <motion.iframe
          variants={itemVariantsFromRight}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2235.3444316101036!2d2.2919063759293437!3d48.85837007133215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTorre%20Eiffel!5e1!3m2!1spt-BR!2sbr!4v1723058203026!5m2!1spt-BR!2sbr"
          loading="lazy"
          className="w-full h-80 sm:w-1/2"
        >
        </motion.iframe>
      </motion.div>
    </section>
  )
}