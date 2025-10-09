import ContactBanner from "./components/contactbanner";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import OurApproach from "./components/ourapproach";
import PromotionBanner from "./components/promotionbanner";
import Services from "./components/services";
import Testimonials from "./components/testimonials";
import WebLayout from "./components/WebLayout";
import WhoWeAre from "./components/whoarewe";
import WhyChooseUs from "./components/whychooseus";

export default function Home() {
  return (
    <WebLayout>
      <Hero />
      <WhoWeAre />
      <PromotionBanner />
      <OurApproach />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <ContactBanner />
    </WebLayout>
  );
}
