import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import StackedVisuals from "@/components/sections/StackedVisuals";
import Trust from "@/components/home/Trust";
import Scenarios from "@/components/home/Scenarios";
import WhyUs from "@/components/home/WhyUs";
import Brands from "@/components/home/Brands";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <StackedVisuals />
        <Trust />
        <Scenarios />
        <Brands />
        <WhyUs />
      </main>
      <Footer />
    </>
  );
}
