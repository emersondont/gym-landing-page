'use client'
import { QueryClientProvider } from "@tanstack/react-query";
import SelectPackages from "../selectPackages/selectPackages";
import { queryClient } from "@/lib/react-query";
import PackagesList from "../packagesList";
import Title from "../title";


export default function Packages() {

  return (
    <section className="flex flex-col items-center gap-8">
      <Title>Nossos Pacotes</Title>

      <QueryClientProvider client={queryClient}>
        <SelectPackages />
        <PackagesList />
      </QueryClientProvider>
    </section>
  )
}