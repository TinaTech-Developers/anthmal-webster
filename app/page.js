import ContactBanner from "./components/contactbanner";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import OurApproach from "./components/ourapproach";
import PromotionBanner from "./components/promotionbanner";
import Services from "./components/services";
import Testimonials from "./components/testimonials";
import WhoWeAre from "./components/whoarewe";
import WhyChooseUs from "./components/whychooseus";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhoWeAre />
      <PromotionBanner />
      <OurApproach />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <ContactBanner />
    </>
  );
}
