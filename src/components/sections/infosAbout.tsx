'use client'
import { useRef, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import InfoCard from "../infoCard";
import Title from "../title";
import getAllInfos from "@/data/infos";
import { motion } from 'framer-motion';

const canScrollVariants: { [key: string]: string } = {
  true: 'bg-primary border-primary',
  false: 'bg-transparent border-tx1'
}


export default function InfosAbout() {
  const listRef: React.RefObject<HTMLDivElement> = useRef(null)
  const [canScroll, setCanScroll] = useState({
    left: false,
    right: true
  })
  const infos = getAllInfos();

  const updateCanScroll = () => {
    if (listRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = listRef.current;
      setCanScroll({
        left: scrollLeft > 0,
        right: scrollLeft < scrollWidth - clientWidth - 160
      });
    }
  };

  /**
 * Desloca a lista horizontalmente.
 * @param {number} value - O valor para deslocar a lista. Use valores positivos para rolar para a direita e valores negativos para rolar para a esquerda.
 */
  const handleScroll = (value: number) => {
    if (listRef.current) {
      listRef.current.scrollBy({
        left: value,
        behavior: 'smooth'
      });
    }
  }

  return (
    <section id='program' className="flex flex-col items-center gap-8 scroll-mt-14">
      <div className="flex justify-between w-full px-8 items-center lg:px-40 md:px-16">
        <Title>Explore nosso programa</Title>

        <div className="text-tx1 flex gap-3">
          <button
            className={`${canScrollVariants[String(canScroll.left)]} border rounded-full w-10 h-10 flex justify-center items-center hover:bg-opacity-80 ease-out duration-500`}
            onClick={() => handleScroll(-332)}
          >
            <FiArrowLeft size={22} />
          </button>
          <button
            className={`${canScrollVariants[String(canScroll.right)]} border  rounded-full w-10 h-10 flex justify-center items-center hover:bg-opacity-80 ease-out duration-500`}
            onClick={() => handleScroll(332)}
          >
            <FiArrowLeft size={22} className="rotate-180" />
          </button>
        </div>
      </div>

      <motion.div
        transition={{ staggerChildren: 0.1 }}
        initial="hidden"
        // whileInView="visible"
        animate='visible'
        ref={listRef}
        onScroll={updateCanScroll}
        className={"flex gap-6 items-stretch w-full px-6 overflow-x-auto snap-x snap-mandatory sm:overflow-hidden"}
      >
        {infos.map(info => (
          <InfoCard key={info.id} info={info} />
        ))}
      </motion.div>
    </section>
  )
}