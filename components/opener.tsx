import ParallaxImage from "@/components/parallax-image";
export default function Opener() {
  return (
    <>
      <div className="opener-container flex flex-col items-center justify-center h-auto md:h-screen mt-10 md:mt-20 px-4 text-center">
        <div className="inner-container flex flex-col md:flex-row gap-4 md:gap-10 justify-between items-center md:items-stretch w-full">
          <div className="first-text flex-1">
            <h1
              className="text-xl md:text-xl lg:text-3xl md:text-right"
              style={{ fontFamily: "var(--font-editorial-new)" }}
            >
              A fragment of my mind
              <br />
              Art my first love intertwined with Music
              <br />
              A concoction of my minds complexity <br />
            </h1>
          </div>

          <ParallaxImage
            src="/Images/tawshif-khan-EobK8cZi1Pw-unsplash.jpg"
            alt="Horse."
            className="w-50 md:w-48 lg:w-80 aspect-[200/250]"
          />

          <div className="last-text flex items-end flex-1">
            <h1
              className="text-xl md:text-xl lg:text-3xl md:text-left lg:w-120"
              style={{ fontFamily: "var(--font-editorial-new)" }}
            >
              Innovation my core <br />
              Triumph my always been identity <br />
              And love and passion for being a human who wants to create
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
