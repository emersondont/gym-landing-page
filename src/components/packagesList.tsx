import { usePackages } from "@/hooks/usePackages"
import PackageCard from "./packageCard"


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
    <div className="flex gap-6 items-center w-full overflow-x-scroll px-6 snap-x snap-mandatory sm:overflow-hidden">
      <div className="grow"/>
      {
        data?.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} />
        ))
      }
      <div className="grow"/>
    </div>
  )

}