import { notFound } from "next/navigation";
import { tracks, getTrackBySlug } from "@/lib/tracks";
import Link from "next/link";
import FeaturedWork from "@/components/featured-work";
import Footer from "@/components/footer";
import ParallaxImage from "@/components/parallax-image";

export function generateStaticParams() {
  return tracks.map((t) => ({ slug: t.slug }));
}

export default async function TrackPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const track = getTrackBySlug(slug);

  if (!track) notFound();

  return (
    <>
      <main className="px-4 pt-20 sm:px-8 sm:pt-24 md:px-12 lg:px-12.5 lg:pt-24">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between sm:mb-12 sm:pb-12">
          <div className="flex flex-col w-full lg:flex-1">
            <div className="flex items-center gap-4 sm:gap-6 md:gap-10 mb-6 md:mb-10">
              <button
                type="button"
                aria-label="Previous"
                className="shrink-0 w-10 h-10 border border-zinc-700 flex items-center justify-center hover:bg-black hover:text-white transition-colors"
              >
                <Link
                  href="/"
                  className="flex items-center justify-center w-full h-full"
                >
                  ←
                </Link>
              </button>

              <h1
                className="break-words"
                style={{
                  fontFamily: "var(--font-editorial-new)",
                  fontSize: "clamp(36px, 6vw, 80px)",
                  lineHeight: 0.9,
                  letterSpacing: "-0.02em",
                  fontWeight: 200,
                }}
              >
                {track.song}
              </h1>
            </div>

            <ParallaxImage
              src={track.image}
              alt={`${track.song} by ${track.artist}`}
              className="lg:hidden w-full max-w-md mb-8 md:mb-10 aspect-square"
            />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <div className="flex flex-wrap gap-x-10 gap-y-6 sm:gap-x-16">
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-pp-neue-york)",
                      fontWeight: 300,
                      fontSize: "11px",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "#999",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Artist
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-pp-neue-york)",
                      fontWeight: 500,
                      fontSize: "1.1rem",
                    }}
                  >
                    {track.artist}
                  </p>
                </div>

                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-pp-neue-york)",
                      fontWeight: 300,
                      fontSize: "11px",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "#999",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Produced by
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-pp-neue-york)",
                      fontWeight: 500,
                      fontSize: "1.1rem",
                    }}
                  >
                    {track.producers}
                  </p>
                </div>

                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-pp-neue-york)",
                      fontWeight: 300,
                      fontSize: "11px",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "#999",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Year
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-pp-neue-york)",
                      fontWeight: 500,
                      fontSize: "1.1rem",
                    }}
                  >
                    {track.date}
                  </p>
                </div>
              </div>
            </div>

            {track.description && (
              <div className="w-full md:w-[90%] lg:w-[80%] mt-8 md:mt-10">
                <p>{track.description}</p>
                {track.genius && (
                  <p dangerouslySetInnerHTML={{ __html: track.genius }} />
                )}
              </div>
            )}

            {(track.spotify || track.appleMusic || track.untitled) && (
              <div className="flex flex-wrap gap-3 mt-10">
                {track.spotify && (
                  <a
                    href={track.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 h-10 border border-zinc-700 flex items-center justify-center hover:bg-black hover:text-white transition-colors text-md"
                    style={{ fontFamily: "var(--font-pp-neue-york)" }}
                  >
                    Listen on Spotify
                    <img
                      src="/Images/spotify-logo.png"
                      alt="Spotify Logo"
                      className="ml-2 w-5"
                    />
                  </a>
                )}
                {track.appleMusic && (
                  <a
                    href={track.appleMusic}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 h-10 border border-zinc-700 flex items-center justify-center hover:bg-black hover:text-white transition-colors text-md"
                    style={{ fontFamily: "var(--font-pp-neue-york)" }}
                  >
                    Listen on Apple Music{" "}
                    <img
                      src="/Images/apple-music-logo.png"
                      alt="Apple Music Logo"
                      className="ml-2 w-5"
                    />
                  </a>
                )}
                {track.untitled && (
                  <a
                    href={track.untitled}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 h-10 border border-zinc-700 flex items-center justify-center hover:bg-black hover:text-white transition-colors text-md"
                    style={{ fontFamily: "var(--font-pp-neue-york)" }}
                  >
                    Listen on [untitled]
                    <img
                      src="/Images/untitled-logo.webp"
                      alt="[untitled] Logo"
                      className="ml-2 w-5"
                    />
                  </a>
                )}
              </div>
            )}
          </div>

          <ParallaxImage
            src={track.image}
            alt={`${track.song} by ${track.artist}`}
            className="hidden lg:block w-2/5 lg:shrink-0 aspect-square"
          />
        </div>
      </main>

      <FeaturedWork
        tracks={tracks.filter((t) => t.slug !== track.slug)}
        title="MORE WORK"
        className="mt-12 md:mt-16"
        showTransition={false}
      />

      <Footer />
    </>
  );
}
