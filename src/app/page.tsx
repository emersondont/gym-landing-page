import Adrress from "@/components/sections/address";
import HomeSection from "@/components/sections/homeSection";
import InfosAbout from "@/components/sections/infosAbout";
import OpeningHours from "@/components/sections/openingHours";
import Packages from "@/components/sections/packages";

export default function Home() {
  return (
    <main className="bg-bg2 w-full min-h-screen pb-14 flex flex-col gap-32">
      <HomeSection />
      <InfosAbout />
      <OpeningHours />
      <Packages />
      <Adrress />
    </main>
  );
}
