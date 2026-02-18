import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Pricing } from "@/components/Pricing";
import { TrustBar } from "@/components/TrustBar";
import { ContactFooter } from "@/components/ContactFooter";
import { WhatsAppChatBot } from "@/components/WhatsAppChatBot";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <TrustBar />
      <ContactFooter />
      <WhatsAppChatBot />
    </main>
  );
}
