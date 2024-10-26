import FeatureCollection from "@/components/FeatureCollection";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <div className="px-14 space-y-2">
        <Navbar />
        <Hero />
        <Partners />
        <FeatureCollection />
        <Services />
      </div>
    </>
  );
}
