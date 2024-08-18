import { Info } from "@/data/infos";
import { motion } from 'framer-motion';
type Props = {
  info: Info;
}

export default function InfoCard({ info }: Props) {
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.2 },
    },
  };
  return (
    <motion.div
      variants={itemVariants}
      className='min-w-80 max-w-80 rounded-xl flex flex-col gap-6 px-6 py-9 bg-bg1 snap-center group hover:bg-primary ease-out duration-500'>
      <div className='text-primary group-hover:text-tx1 ease-out duration-500'>
        <info.Icon />
      </div>

      <div className='flex flex-col gap-2'>
        <h2 className='font-poppins font-semibold text-xl text-tx1 md:text-2xl'>
          {info.title}
        </h2>
        <p className='font-poppins font-normal text-sm text-tx4 group-hover:text-tx1 ease-out duration-500 md:text-base'>
          {info.description}
        </p>
      </div>
    </motion.div>
  )
}