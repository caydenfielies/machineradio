import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="w-screen h-screen">
      <div
        id="project-lotus-text"
        className="flex flex-col justify-end absolute bottom-10 m-0 z-10 ml-12.5 px-6 py-7 border rounded-md border-white"
        style={{ mixBlendMode: "difference", color: "white" }}
      >
        <h1
          className="text-[50px] ml-4"
          style={{ fontFamily: "var(--font-editorial-new)" }}
        >
          <span
            className="text-[80px] -ml-6.25"
            style={{ fontFamily: "var(--font-optiAlto)" }}
          >
            P
          </span>
          ROJECT ✷
          <span
            className="text-[80px] -ml-2"
            style={{ fontFamily: "var(--font-optiAlto)" }}
          >
            L
          </span>
          OTUS
        </h1>

        <div className="scroll-down-text absolute right-5">
          <p>Scroll down</p>
        </div>

        <h1
          className="text-3xl w-200 -mt-5"
          style={{
            fontFamily: "var(--font-editorial-new)",
            mixBlendMode: "difference",
            color: "white",
          }}
        >
          Producer and composer from South Africa, crafting precise and evolving
          soundscapes.
        </h1>

        <h1
          className="text-xl mt-5 flex justify-between"
          style={{ fontFamily: "var(--font-editorial-new)" }}
        >
          <span>✦</span>
          <span>✦</span>
        </h1>

        <Button variant="outline" className="w-35 mt-5 px-5 py-3">
          View Featured Work
        </Button>
      </div>

      <div className="video-canvas absolute bg-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/fallback.jpg"
          className="w-screen h-screen object-cover"
        >
          <source src="/Hero/projectlotus_hero.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
