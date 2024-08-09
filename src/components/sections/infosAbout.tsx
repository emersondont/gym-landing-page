'use client'
import { useEffect, useRef, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import InfoCard from "../infoCard";
import Title from "../title";
import getAllInfos from "@/data/infos";

const canScrollVariants: { [key: string]: string } = {
  true: 'bg-primary border-primary',
  false: 'bg-transparent border-tx1'
}

export default function InfosAbout() {
  const listRef: React.RefObject<HTMLDivElement> = useRef(null)
  const [isVisible, setIsVisible] = useState(false);
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
      console.log(scrollLeft, scrollWidth, clientWidth)
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Ajuste o threshold conforme necessário
    );

    if (listRef.current) {
      observer.observe(listRef.current);
    }

    return () => {
      if (listRef.current) {
        observer.unobserve(listRef.current);
      }
    };
  }, []);

  return (
    <section className="flex flex-col items-center gap-8">
      <div className="flex justify-between w-full px-8 items-center lg:px-40 md:px-16">
        <Title>Explore nosso programa</Title>

        <div className="text-tx1 flex gap-3">
          <button
            className={`${canScrollVariants[String(canScroll.left)]} border rounded-full w-10 h-10 flex justify-center items-center hover:bg-opacity-80 ease-out duration-500`}
            onClick={() => handleScroll(-320)}
          >
            <FiArrowLeft size={22} />
          </button>
          <button
            className={`${canScrollVariants[String(canScroll.right)]} border  rounded-full w-10 h-10 flex justify-center items-center hover:bg-opacity-80 ease-out duration-500`}
            onClick={() => handleScroll(320)}
          >
            <FiArrowLeft size={22} className="rotate-180" />
          </button>
        </div>
      </div>

      <div
        ref={listRef}
        onScroll={updateCanScroll}
        className={"flex gap-6 items-stretch w-full px-6 overflow-x-auto snap-x snap-mandatory sm:overflow-hidden " + (isVisible ? 'animate-fadeInUp animation-delay-200' : '')}
      >
        {infos.map(info => (
          <InfoCard key={info.id} info={info} />
        ))}
      </div>
    </section>
  )
}