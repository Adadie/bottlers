import Hero from "@/components/Hero";
import TheIncident from "@/components/TheIncident";
import OriginStory from "@/components/OriginStory";
import MastermindSection from "@/components/MastermindSection";
import TheCollection from "@/components/TheCollection";
import ProductFeatures from "@/components/ProductFeatures";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen">
      <Hero />
      <TheIncident />
      <OriginStory />
      <MastermindSection />
      <TheCollection />
      <ProductFeatures />
      <WhatsAppCTA />
      <Footer />
    </main>
  );
}
