'use client'
import img from '@/../public/pngwing 5.png'
import Image from 'next/image'
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";
import SocialIcon from '../socialIcon';
import { motion } from 'framer-motion';

export default function HomeSection() {
  const itemVariants = {
    hidden: { opacity: 0, y: -20},
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };
  return (
    <motion.section
      transition={{ staggerChildren: 0.2 }}
      initial="hidden"
      animate="visible"
      id='home' className='w-full h-screen bg-bg2 flex justify-between items-center py-8 px-8 mt-7 scroll-mt-7 lg:px-40 md:px-16'>

      <div className='w-full sm:w-1/2 flex flex-col items-start'>
        <motion.h1 variants={itemVariants} className='font-urbanist font-bold text-6xl text-tx1'>Transforme seu Corpo e Mente</motion.h1>
        <motion.p variants={itemVariants}  className='font-poppins text-base text-tx4 mt-6 sm:mt-3'>
          Aqui na NOME ACADEMIA a sua satisfação é o nosso sucesso! Venha conhecer o nosso espaço e planos especiais.
        </motion.p>

        <motion.div variants={itemVariants}  className='flex gap-2 bg-bg1 p-2 rounded-lg text-tx1 mt-32 sm:mt-16'>
          <SocialIcon icon={FaWhatsapp} name='Whatsapp' />
          <SocialIcon icon={FaInstagram} name='Instagram' />
          <SocialIcon icon={FaFacebookF} name='Facebook' />
        </motion.div>

      </div>
      <motion.div variants={itemVariants} className='h-full'>
      <Image
        src={img}
        alt='imagem ilustrativa de pessoas malhando'
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
          height: '100%',
          width: 'auto'
        }}
        className='sm:block hidden'
      />
      </motion.div>
    </motion.section>
  )
}