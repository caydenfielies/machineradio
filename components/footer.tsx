export default function Footer() {
  return (
    <>
      <div className="footer-container relative flex justify-center items-center h-[55vh] md:h-screen w-screen bg-neutral-950 text-white mt-30 px-12.5 py-10 z-100">
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
