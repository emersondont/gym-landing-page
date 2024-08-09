import img from '@/../public/pngwing 5.png'
import Image from 'next/image'
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";
import SocialIcon from '../socialIcon';

export default function HomeSection() {
  return (
    <section className='w-full h-screen bg-bg2 flex justify-between items-center py-8 px-8 lg:px-40 md:px-16'>

      <div className='w-full sm:w-1/2 flex flex-col items-start'>
        <h1 className='font-urbanist font-bold text-6xl text-tx1 animate-fadeInUp'>Transforme seu Corpo e Mente</h1>
        <p className='font-poppins text-base text-tx4 animate-fadeInUp animation-delay-200 mt-6 sm:mt-3'>
          Aqui na NOME ACADEMIA a sua satisfação é o nosso sucesso! Venha conhecer o nosso espaço e planos especiais.
        </p>

        <div className='flex gap-2 bg-bg1 p-2 rounded-lg text-tx1 mt-32 sm:mt-16 animate-fadeInUp animation-delay-400'>
          <SocialIcon icon={FaWhatsapp} name='Whatsapp' />
          <SocialIcon icon={FaInstagram} name='Instagram' />
          <SocialIcon icon={FaFacebookF} name='Facebook' />
        </div>

      </div>
      <Image
        src={img}
        alt='imagem ilustrativa de pessoas malhando'
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
          height: '100%',
          width: 'auto'
        }}
        className='sm:block hidden animate-fadeInUp animation-delay-600'
      />
    </section>
  )
}