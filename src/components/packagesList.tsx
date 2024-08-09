import { usePackages } from "@/hooks/usePackages"
import PackageCard from "./packageCard"
import { motion } from 'framer-motion'
import { useRef } from "react"

export default function PackagesList() {
  const { data, isLoading, isFetching } = usePackages()

  if (isLoading)
    return (
      <div className="flex gap-3 items-center">
        <div className="h-6 w-6 bg-transparent border-2 border-gray-300 border-t-primary rounded-full animate-spin"></div>
        <span className="text-tx1">Carregando</span>
      </div>
    )

  return (
    <motion.div
      transition={{ staggerChildren: 0.2 }}
      initial="hidden"
      // whileInView="visible"
      animate="visible"
      
      // whileInView={isInView ? "" : "visible"}
      // animate={isInView ? "visible" : ""}
      className="flex gap-6 items-center w-full overflow-x-scroll px-6 snap-x snap-mandatory sm:overflow-hidden">
        {
          data?.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))
        }
    </motion.div>
  )
}