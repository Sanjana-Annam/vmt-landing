import { useState } from "react";
import Hero from "./components/hero/Hero";
import TrustedBy from "./components/trustedBy/TrustedBy";
import WhyChooseUs from "./components/whyChooseUs/WhyChooseUs";
import Founder from "./components/founder/Founder";
import Process from "./components/process/Process";
import Footer from "./components/footer/Footer";
import PageLoader from "./components/loader/PageLoader";
import FAQ from "./components/faq/FAQ";
import VimiWidget from "./components/VimiChat/VimiWidget";

export default function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <PageLoader onFinish={() => setLoading(false)} />;
  }

  return (
    <> 
      <VimiWidget />
      <Hero />
      <TrustedBy />
      <WhyChooseUs />
      <Founder />
      <Process />
      <FAQ />
      <Footer />
    </>
  );
}
