import getAllPackages from "@/data/packages"
import { useQuery } from "@tanstack/react-query"

const fetchPackages = (index = 0) => {
  const allPackages = getAllPackages()

  return allPackages[index]
}

const usePackages = (index: number = 0) => {
  return useQuery({
    queryKey: ['packages'],
    queryFn: () => fetchPackages(index),
  })
}

export { usePackages, fetchPackages }