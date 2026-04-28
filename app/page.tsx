import Hero from "@/components/hero";
import Opener from "@/components/opener";
import Biograpghy from "@/components/biography";
import FeaturedWork from "@/components/featured-work";
import Background from "@/components/backround";
import Goal from "@/components/goal";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Opener />
      <Biograpghy />
      <FeaturedWork />
      <Background />
      <Goal />
      <Footer />
    </>
  );
}
