import { Package } from "@/data/packages";
import { FaCircleCheck } from "react-icons/fa6";

type Props = {
  pkg: Package;
}


export default function PackageCard({ pkg }: Props) {
  const colors = {
    bg: pkg.bestOffer ? 'bg-primary' : 'bg-bg1',
    name: pkg.bestOffer ? 'text-tx1' : 'text-primary',
    billed: pkg.bestOffer ? 'text-tx1' : 'text-tx3',
    benefits: pkg.bestOffer ? 'text-tx1' : 'text-tx2',
    bgButton: pkg.bestOffer ? 'bg-bg2' : 'bg-primary',
  }
  const spacing = {
    card: pkg.bestOffer ? 'py-11' : 'py-7',
    benefits_button: pkg.bestOffer ? 'gap-16' : 'gap-9',
  }
  return (
    <div className={`relative flex flex-col gap-6 px-6 ${spacing['card']} rounded-2xl ${colors['bg']} overflow-hidden min-w-72 snap-center animate-appear`}>
      <p className={`font-urbanist font-semibold text-lg ${colors['name']} sm:text-xl`}>
        {pkg.name}
      </p>

      <div className="flex flex-col gap-2">
        <h1 className="font-urbanist font-semibold text-4xl text-tx1 sm:text-5xl ">
          {pkg.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
        </h1>
        <span className={`font-poppins font-normal text-sm ${colors['billed']} sm:text-base`}>
          {pkg.billed}
        </span>
      </div>

      <div className={`flex flex-col ${spacing['benefits_button']}`}>
        <ul className="flex flex-col gap-4">
          {
            pkg.benefits.map(benefit => (
              <li key={benefit} className={`flex gap-4 ${colors['benefits']}`}>
                <FaCircleCheck size={24} />
                <p className="font-poppins font-medium text-sm sm:text-base">
                  {benefit}
                </p>
              </li>
            ))
          }
        </ul>

        <button className={`font-poppins font-medium text-sm py-4 2-full rounded-xl text-tx1 ${colors['bgButton']} 2-full hover:bg-opacity-80 ease-out duration-200 sm:text-base`}>
          Contratar
        </button>
      </div>

      {
        pkg.bestOffer && (
          <div className="bg-white py-3 px-3 w-56 text-center rotate-45 absolute top-8 -right-14">
            <p className="font-urbanist font-semibold text-base text-bg2 sm:text-lg">
              Melhor oferta
            </p>
          </div>
        )
      }
    </div>
  )
}