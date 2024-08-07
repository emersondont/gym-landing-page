import Menu from "./menu";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 text-tx1 w-full bg-bg2 flex justify-between px-8 h-14 items-center backdrop-blur-md
      lg:px-40
      md:px-16
      header
      ">
        
      <h1 className="font-urbanist text-primary font-bold text-4xl">LOGO</h1>
      <Menu />

    </header>
  )
}