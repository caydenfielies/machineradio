import Hero from "./components/hero";
import FeaturedWork from "./components/featured-work";
import ContactCTA from "./components/contact-cta";
import Footer from "./components/footer";
import Header from "./components/header";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <Hero />
      <FeaturedWork />
      <ContactCTA />
      <Footer />
    </>
  );
}
