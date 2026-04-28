import Hero from "@/components/hero";
import Opener from "@/components/opener";
import AboutMe from "@/components/about-me";
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
      <AboutMe />
      <Biograpghy />
      <FeaturedWork />
      <Background />
      <Goal />
      <Footer />
    </>
  );
}
