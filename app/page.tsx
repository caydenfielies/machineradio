import Header from "@/components/header";
import Hero from "@/components/hero";
import Opener from "@/components/opener";
import Biograpghy from "@/components/biography";
import FeaturedWork from "@/components/featured-work";
import Closer from "@/components/closer";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Opener />
      <Biograpghy />
      <FeaturedWork />
      <Closer />
      {/* <Footer /> */}
    </>
  );
}
