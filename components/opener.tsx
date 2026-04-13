import Image from "next/image";
export default function Opener() {
  return (
    <>
      <div className="opener-container flex flex-col items-center justify-center h-screen mt-20">
        <div className="inner-container flex gap-10 justify-between">
          <div className="first-text">
            <h1
              className="text-3xl"
              style={{ fontFamily: "var(--font-editorial-new)" }}
            >
              A fragment of my mind
              <br />
              Art my first love intertwined with Music
              <br />
              A concoction of my minds complexity <br />
            </h1>
          </div>

          <Image
            src="/Images/horsePoster.png"
            width={300}
            height={500}
            alt="Horse."
          />

          <div className="last-text flex items-end w-120">
            <h1
              className="text-3xl"
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
