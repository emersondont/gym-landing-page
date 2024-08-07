'use client'
import Link from "next/link"
import { useEffect, useRef, useState } from "react";
import { RiMenu3Line, RiCloseLargeLine } from "react-icons/ri";

const options = [
  { name: 'Início', path: '/' },
  { name: 'Programa', path: '/' },
  { name: 'Planos', path: '/' },
  { name: 'Contatos', path: '/' },
]

enum MenuStatusType {
  open = 'open',
  close = 'close',
}

const menuVariants: { [key: string]: string } = {
  open: '-translate-x-60',
  closed: 'translate-x-0'
}

export default function Menu() {
  const [menuStatus, setMenuStatus] = useState<MenuStatusType>(MenuStatusType.close)
  const menuRef = useRef<HTMLUListElement>(null)

  const handleMenu = () => {
    setMenuStatus(
      menuStatus === MenuStatusType.open ?
        MenuStatusType.close :
        MenuStatusType.open
    )
  }

  useEffect(() => {
    const pageClickEvent = (e: MouseEvent) => {
      if (menuRef.current !== null && !menuRef.current.contains(e.target as Node)) {
        setMenuStatus(MenuStatusType.close)
      }
    };

    document.addEventListener('mousedown', pageClickEvent);

    return () => {
      window.removeEventListener('click', pageClickEvent);
    }
  }, [menuStatus])

  return (
    <nav className="flex">
      <button
        className="md:hidden text-tx1 hover:text-primary ease-out duration-500"
        onClick={handleMenu}
      >
        {
          menuStatus === MenuStatusType.open ?
            <RiCloseLargeLine size={24} /> :
            <RiMenu3Line size={24} />
        }
      </button>

      <ul className={`absolute flex gap-4 flex-col bg-bg2 top-14 w-60 -right-60 h-screen px-8 py-4
      md:flex-row md:static md:w-auto md:h-auto md:px-0 md:py-0 md:translate-x-0 md:bg-transparent
      ${menuVariants[menuStatus]} transition-transform ease-out duration-500
      `}
      ref={menuRef}
      >
        {options.map((option, index) => (
          <li key={index} className="font-poppins text-lg sm:text-base text-tx1 hover:text-primary ease-out duration-500">
            <Link href={option.path}>{option.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}