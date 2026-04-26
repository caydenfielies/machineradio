import styles from "./textcircle.module.css";
export default function Footer() {
  return (
    <>
      <div className="footer-container relative flex justify-center items-center h-[55vh] md:h-screen w-screen bg-neutral-950 text-white mt-10 px-12.5 py-10 z-100">
        <svg
          className="text-circle absolute inset-0 m-auto pointer-events-none overflow-visible w-[220px] h-[220px] md:w-[280px] md:h-[280px]"
          viewBox="0 0 280 280"
        >
          <defs>
            <path
              id="circle-path"
              d="M 140,140 m -110,0 a 110,110 0 1,1 220,0 a 110,110 0 1,1 -220,0"
            />
          </defs>

          <g className={styles.ring}>
            <text
              style={{
                fontFamily: "var(--font-ft-calhern)",
                fontSize: "25px",
                fill: "white",
                letterSpacing: "3px",
              }}
            >
              <textPath
                href="#circle-path"
                textLength="691"
                lengthAdjust="spacing"
              >
                Let's get in touch ✹ Let's get in touch ✹
              </textPath>
            </text>
          </g>
        </svg>
        <h1 className="pl-logo text-9xl">✷</h1>
        <h1 className="main-text "></h1>
        <div className="bottom-text absolute bottom-10">
          <h1
            className="text-xl md:text-4xl"
            style={{ fontFamily: "var(--font-ft-calhern)" }}
          >
            Project Lotus
          </h1>
        </div>
      </div>
    </>
  );
}
