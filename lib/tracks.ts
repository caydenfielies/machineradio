export type Track = {
  song: string;
  artist: string;
  date: string;
  producers: string;
  image: string;
  slug: string;
};

function toSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

const rawTracks = [
  {
    song: "On Ur Mind",
    artist: "Lancey Foux",
    date: "2024",
    producers: "Sonny & Lee",
    image: "/AlbumArt/img1.jpg",
  },
  {
    song: "Live Forever",
    artist: "Lancey Foux",
    date: "2024",
    producers: "Sonny, Lee & World",
    image: "/AlbumArt/img2.jpg",
  },
  {
    song: "Spanish Guitar",
    artist: "Lancey Foux, Fimiguerrero",
    date: "2024",
    producers: "Sonny & Lee",
    image: "/AlbumArt/img3.jpg",
  },
  {
    song: "Sirens (From Ireland)",
    artist: "Skepta, Finessekid",
    date: "2025",
    producers: "Sonny & Lee",
    image: "/AlbumArt/img5.jpg",
  },
  {
    song: "DAYTONA",
    artist: "Lancey Foux",
    date: "2025",
    producers: "Jeku & Lee",
    image: "/AlbumArt/img6.jpg",
  },
  {
    song: "FOR SURE",
    artist: "Lancey Foux",
    date: "2026",
    producers: "Jun & Lee",
    image: "/AlbumArt/img7.jpg",
  },
  {
    song: "RING THE ALARM",
    artist: "Lancey Foux",
    date: "2026",
    producers: "Lee",
    image: "/AlbumArt/img7.jpg",
  },
  {
    song: "PIONEER",
    artist: "Lancey Foux",
    date: "2026",
    producers: "Lee & Plentynights",
    image: "/AlbumArt/img7.jpg",
  },
  {
    song: "GANGSTAS DEMISE",
    artist: "Lancey Foux",
    date: "2026",
    producers: "Lee",
    image: "/AlbumArt/img7.jpg",
  },
];

export const tracks: Track[] = rawTracks.map((t) => ({
  ...t,
  slug: toSlug(t.song),
}));

export function getTrackBySlug(slug: string): Track | undefined {
  return tracks.find((t) => t.slug === slug);
}
