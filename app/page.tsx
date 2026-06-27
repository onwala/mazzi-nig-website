import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import ClientLogos from '@/components/ClientLogos';
import Services from '@/components/Services';
import About from '@/components/About';
import Process from '@/components/Process';
import WhyMNL from '@/components/WhyMNL';
import CTABand from '@/components/CTABand';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <TrustBar />
        <ClientLogos />
        <Services />
        <About />
        <Process />
        <WhyMNL />
        <CTABand />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
