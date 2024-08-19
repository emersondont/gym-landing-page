'use client'
import { QueryClientProvider } from "@tanstack/react-query";
import SelectPackages from "../selectPackages/selectPackages";
import { queryClient } from "@/lib/react-query";
import PackagesList from "../packagesList";
import Title from "../title";


export default function Packages() {

  return (
    <section id='packages' className="flex flex-col items-center gap-8 scroll-mt-14">
      <Title>Nossos Planos</Title>

      <QueryClientProvider client={queryClient}>
        <SelectPackages />
        <PackagesList />
      </QueryClientProvider>
    </section>
  )
}