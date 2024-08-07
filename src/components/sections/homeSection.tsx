import img from '@/../public/pngwing 5.png'
import Image from 'next/image'
export default function HomeSection() {
  return (
    <section className='w-full h-screen bg-bg2 flex justify-between items-center py-8 px-8 lg:px-40 md:px-16'>

      <div className='w-full sm:w-1/2 '>
        <h1 className='font-urbanist font-bold text-6xl text-tx1 animate-fadeInUp'>Transforme seu Corpo e Mente</h1>
        <p className='font-poppins text-base text-tx4 animate-fadeInUp animation-delay-200 mt-6 sm:mt-3'>
          Aqui na NOME ACADEMIA a sua satisfação é o nosso sucesso! Venha conhecer o nosso espaço e planos especiais.
        </p>
        <button className='py-2 px-7 bg-primary text-tx1 rounded-lg animate-fadeInUp animation-delay-400 mt-16 sm:mt-8'>
          <a href="">Conheça nossos planos</a> 
        </button>

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