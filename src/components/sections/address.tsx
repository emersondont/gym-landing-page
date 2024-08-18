'use client'
import { motion } from 'framer-motion';
import Title from "../title";
import { address, mapSrc } from '@/data/address';

export default function Adrress() {
  const itemVariantsFromLeft = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.2 },
    }
  };
  const itemVariantsFromRight = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.2 },
    }
  };
  return (
    <section id='address' className="flex flex-col items-center gap-8 px-8 lg:px-40 md:px-16 scroll-mt-14">
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
          src={mapSrc}
          loading="lazy"
          className="w-full h-80 sm:w-1/2"
        >
        </motion.iframe>
      </motion.div>
    </section>
  )
}