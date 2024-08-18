'use client'
import { useEffect, useState } from "react";
import Menu from "./menu";

export default function Header() {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');

  const headerPosition = {
    down: '-top-14',
    up: 'top-0',
  }

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection && (scrollY - lastScrollY > 1 || scrollY - lastScrollY < -1)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    }
  }, [scrollDirection]);

  return (
    <header className={`${headerPosition[scrollDirection]} transition-all duration-500 ease-out fixed z-50 text-tx1 w-full bg-bg1 bg-opacity-80 flex justify-between px-8 h-14 items-center backdrop-blur-md lg:px-40 md:px-16`}>
      <h1 className="font-urbanist text-primary font-bold text-4xl">LOGO</h1>
      <Menu />
    </header>
  )
}