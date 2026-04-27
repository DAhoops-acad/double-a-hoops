import { Hero } from "@/components/hero";
import { CharityBanner } from "@/components/charity-banner";
import { TrainingSpecialties } from "@/components/training-specialties";
import { Pricing } from "@/components/pricing";
import { AboutCoaches } from "@/components/about-coaches";
import { ContactForm } from "@/components/contact-form";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <CharityBanner />
      <TrainingSpecialties />
      <Pricing />
      <AboutCoaches />
      <ContactForm />
      <Footer />
    </main>
  );
}
