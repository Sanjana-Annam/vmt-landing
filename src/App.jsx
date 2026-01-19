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
import Marquee from "./components/Marquee";

import VideoTrigger from "./components/VideoTrigger";
import VideoModal from "./components/VideoModal";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showVideo, setShowVideo] = useState(false);

  if (loading) {
    return <PageLoader onFinish={() => setLoading(false)} />;
  }

  return (
    <>
      <VideoTrigger onClick={() => setShowVideo(true)} />
      <VideoModal open={showVideo} onClose={() => setShowVideo(false)} />

      <VimiWidget />
      <Hero />
      <Marquee />
      <TrustedBy />
      <WhyChooseUs />
      <Founder />
      <Process />
      <FAQ />
      <Footer />
    </>
  );
}
