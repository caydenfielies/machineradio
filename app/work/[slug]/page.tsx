import { notFound } from "next/navigation";
import { tracks, getTrackBySlug } from "@/lib/tracks";
import Header from "@/components/header";

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
      <Header />
      <main style={{ padding: "6rem 4rem" }}>
        <div style={{ borderBottom: "1px solid #d4d4d4", paddingBottom: "3rem", marginBottom: "3rem" }}>
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

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div style={{ display: "flex", gap: "4rem" }}>
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
