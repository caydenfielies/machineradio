export default function Closer() {
  return (
    <>
      <div className="closer-container flex items-center justify-center h-auto md:h-screen">
        <h1
          className="text-2xl md:text-4xl lg:text-5xl px-4 md:px-8 lg:px-12.5 h-auto md:h-[50vh] mt-30 md:mt-20 text-center"
          style={{ fontFamily: "var(--font-pp-neue-york)", fontWeight: "300" }}
        >
          My Message to the Youth:
          <br />
          No matter what you do
          <br />
          Be kind
          <br />
          Be Positive
          <br />
          Be patient
          <br />& serve your purpose
        </h1>

        {/* <div className="video-canvas absolute bg-black">
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
      </div> */}
      </div>
    </>
  );
}
