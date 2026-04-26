import { notFound } from "next/navigation";
import { tracks, getTrackBySlug } from "@/lib/tracks";

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
      <main className="px-4 py-20 sm:px-8 sm:py-24 md:px-12 lg:px-16 lg:py-24">
        <div
          className="mb-8 pb-8 sm:mb-12 sm:pb-12"
          style={{ borderBottom: "1px solid #d4d4d4" }}
        >
          <h1
            style={{
              fontFamily: "var(--font-editorial-new)",
              fontSize: "clamp(48px, 8vw, 120px)",
              lineHeight: 0.9,
              letterSpacing: "-0.02em",
              fontWeight: 200,
            }}
          >
            {track.song}
          </h1>
        </div>

        <div
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
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
      </main>
    </>
  );
}
