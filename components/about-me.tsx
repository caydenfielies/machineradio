import ParallaxImage from "@/components/parallax-image";

export default function AboutMe() {
  return (
    <>
      <section className="about-me-container w-screen h-screen ">
        <h1
          className="flex justify-center items-center w-full text-4xl"
          style={{ fontFamily: "var(--font-ft-calhern)" }}
        >
          Who is Project Lotus?
        </h1>
        <img
          src="/Images/lee-portrait.png"
          alt="Image of Lee."
          className="w-full h-full object-contain"
        />
      </section>
    </>
  );
}
