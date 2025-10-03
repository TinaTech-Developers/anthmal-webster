import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Services from "./components/services";
import WhoWeAre from "./components/whoarewe";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhoWeAre />
      <Services />
    </>
  );
}
