export default function Footer() {
  return (
    <>
      <div className="footer-container h-screen w-screen bg-neutral-950 text-white mt-30 px-12.5 py-10">
        <div className="inner-footer flex flex-col gap-30 h-full">
          <div className="email">
            <p
              className="text-3xl"
              style={{
                fontFamily: "var(--font-pp-neue-york)",
                fontWeight: "500",
              }}
            >
              Let's work together
            </p>
            <h1
              className="text-6xl mt-2"
              style={{ fontFamily: "var(--font-editorial-new)" }}
            >
              lee@projectlotus.studio
            </h1>
          </div>

          <div className="socials">
            <h1
              className="text-6xl"
              style={{ fontFamily: "var(--font-editorial-new)" }}
            >
              <span
                className="text-3xl mr-20"
                style={{
                  fontFamily: "var(--font-pp-neue-york)",
                  fontWeight: "500",
                }}
              >
                Find me on
              </span>
              Instagram
            </h1>
          </div>

          <div className="project-lotus flex items-end z-10">
            <h1
              className="text-[70px]"
              style={{ fontFamily: "var(--font-editorial-new)" }}
            >
              <span
                className="text-[110px] -ml-6.25"
                style={{ fontFamily: "var(--font-optiAlto)" }}
              >
                P
              </span>
              ROJECT
              <span
                className="text-[110px]"
                style={{ fontFamily: "var(--font-optiAlto)" }}
              >
                L
              </span>
              OTUS
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
