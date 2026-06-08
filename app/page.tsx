import RevealController from "@/components/RevealController";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import About from "@/components/About";
import Process from "@/components/Process";
import Realisations from "@/components/Realisations";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import Zone from "@/components/Zone";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <RevealController />
      <Header />
      <main>
        <Hero />
        <Stats />
        <Marquee />
        <Services />
        <About />
        <Process />
        <Realisations />
        <WhyUs />
        <Testimonials />
        <Zone />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
