import { HelmetProvider } from 'react-helmet-async';
import SEOMeta from '@components/seo/SEOMeta';
import Navbar from '@components/Navbar';
import Hero from '@components/Hero';
import About from '@components/About';
import Services from '@components/Services';
import WhyUs from '@components/WhyUs';
import Contact from '@components/Contact';
import Footer from '@components/Footer';

export default function App(): JSX.Element {
  return (
    <HelmetProvider>
      <SEOMeta />
      <div className="min-h-screen bg-navy-950">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <WhyUs />
          <Contact />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}
