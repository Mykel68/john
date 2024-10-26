import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";

export default function Home() {
  return (
    <>

      <Header />
      <div className="px-14 space-y-2">
        <Navbar />
        <Hero />
        <Partners />
      </div>
    </>
  );
}
