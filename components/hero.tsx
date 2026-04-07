import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center">
      <div id="project-lotus-text" className="m-0 z-10">
        <h1
          className="text-[130px]"
          style={{ fontFamily: "var(--font-editorial-new)" }}
        >
          <span
            className="text-[200px] -ml-6.25"
            style={{ fontFamily: "var(--font-optiAlto)" }}
          >
            P
          </span>
          ROJECT
          <span
            className="text-[200px]"
            style={{ fontFamily: "var(--font-optiAlto)" }}
          >
            L
          </span>
          OTUS
        </h1>
      </div>

      {/* <div className="video-canvas -mt-20 absolute bg-black w-225 h-120"></div> */}
    </section>
  );
}
