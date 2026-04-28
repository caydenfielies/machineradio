export type Track = {
  song: string;
  artist: string;
  date: string;
  producers: string;
  description?: string;
  image: string;
  slug: string;
  genius?: string;
  spotify?: string;
  appleMusic?: string;
  untitled?: string;
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
    description:
      "“On Ur Mind” was first previewed in an Instagram live stream by Lancey on February 25, 2024, later announcing the full release of the song with a post on X. On the track, Lancey brings a melodic and relaxing cadence while talking about a significant: bragging about his wealth and personality.",
    genius: `Provided by <img src="/Images/genius-logo-transparent.png" class="inline-block align-middle w-1/3" alt="Genius"/>`,
    spotify:
      "https://open.spotify.com/track/31N2MlwzZHXjJalEEbh5LM?si=df6d85af81574d78",
    appleMusic:
      "https://music.apple.com/za/album/on-ur-mind/1735995408?i=1735995417",
  },
  {
    song: "Live Forever",
    artist: "Lancey Foux",
    date: "2024",
    producers: "Sonny, Lee & World",
    image: "/AlbumArt/img2.jpg",
    description:
      "Lancey Foux leaves his mark on the world in Live Forever by mixing melancholy with a melodic message. He is still going strong, and he will continue to keep pushing himself to new heights.",
    genius: `Provided by <img src="/Images/genius-logo-transparent.png" class="inline-block align-middle w-1/3" alt="Genius"/>`,
    spotify:
      "https://open.spotify.com/track/1fRUSLsMxYyTSMejr7iNm2?si=c382522ad9f94b6e",
    appleMusic:
      "https://music.apple.com/za/album/live-forever-on-ur-mind-single/1737501984",
  },
  {
    song: "Spanish Guitar",
    artist: "Lancey Foux, Fimiguerrero",
    date: "2024",
    producers: "Sonny & Lee",
    image: "/AlbumArt/img3.jpg",
    description:
      "“Spanish Guitar” is a sultry track by Lancey Foux, blending smooth trap beats with flirtatious, bold lyrics. The song compares romantic encounters to playing a guitar, with the hook “She sit on my lap and I play that lil' baddie like Spanish guitar” capturing the sensual theme. Featuring a catchy chorus and exotic references, it blends the swagger of trap with Latin-inspired imagery. Produced by Killthissonny, Lee, and co-produced by Dylan, the track delivers a polished, energetic vibe that complements Foux’s seductive lyrics. The song also features a verse from Fimiguerrero, adding bilingual flair and playful Latin references to the mix.",
    genius: `Provided by <img src="/Images/genius-logo-transparent.png" class="inline-block align-middle w-1/3" alt="Genius"/>`,
    spotify:
      "https://open.spotify.com/track/70nOncasr0R9YcpFsQ2Hjs?si=f8d31014826343c3",
    appleMusic:
      "https://music.apple.com/za/album/spanish-guitar/1778741604?i=1778741612",
  },
  {
    song: "Sirens (From Ireland)",
    artist: "Skepta, Finessekid",
    date: "2025",
    producers: "Sonny & Lee",
    image: "/AlbumArt/img5.jpg",
    description:
      "“Sirens (From Ireland)” is the first official collaboration between Skepta and Finessekid, who had been working closely from the beginning of Finessekid’s rap career. The song was first performed by the duo at 1Way and was uploaded as a 1-minute snippet on TikTok and announced to be on its way by Skepta, via X. The snippet was officially released on YouTube, titled, “Sirens (From Ireland) (Preview)” On September 30, 2025, both Skepta and Finessekid posted their own promotional videos on Instagram, announcing the October 10 release date. ‎#Sirens featuring @finessekidgram OUT OCTOBER 10TH ⏳⏳",
    genius: `Provided by <img src="/Images/genius-logo-transparent.png" class="inline-block align-middle w-1/3" alt="Genius"/>`,
    spotify:
      "https://open.spotify.com/track/218C0McVUM1UPcTzODMRhi?si=b3083f6efd09418d",
    appleMusic:
      "https://music.apple.com/za/album/sirens-from-ireland/1839260474?i=1839260477",
  },
  {
    song: "DAYTONA",
    artist: "Lancey Foux",
    date: "2025",
    producers: "Jeku & Lee",
    image: "/AlbumArt/img6.jpg",
    description:
      "“Daytona” is a song by Lancey Foux, which was first previewed on PlaqueBoyMax’s “In The Booth” stream alongside Lancey himself on 07/03/2025. It was the first track teased, followed by two more after.",
    genius: `Provided by <img src="/Images/genius-logo-transparent.png" class="inline-block align-middle w-1/3" alt="Genius"/>`,
    spotify:
      "https://open.spotify.com/track/5gR5qIYrjbfzJBNuFXknz3?si=7615743689954fad",
    appleMusic:
      "https://music.apple.com/za/album/daytona/1852380240?i=1852380244",
  },
  {
    song: "FOR SURE",
    artist: "Lancey Foux",
    date: "2026",
    producers: "Jun & Lee",
    image: "/AlbumArt/img7.jpg",
    untitled: "https://untitled.stream/buy/project/od2UOBPEOSMFY8MFMOANI",
  },
  {
    song: "RING THE ALARM",
    artist: "Lancey Foux",
    date: "2026",
    producers: "Lee",
    image: "/AlbumArt/img7.jpg",
    untitled: "https://untitled.stream/buy/project/od2UOBPEOSMFY8MFMOANI",
  },
  {
    song: "PIONEER",
    artist: "Lancey Foux",
    date: "2026",
    producers: "Lee & Plentynights",
    image: "/AlbumArt/img7.jpg",
    untitled: "https://untitled.stream/buy/project/od2UOBPEOSMFY8MFMOANI",
  },
  {
    song: "GANGSTAS DEMISE",
    artist: "Lancey Foux",
    date: "2026",
    producers: "Lee",
    image: "/AlbumArt/img7.jpg",
    untitled: "https://untitled.stream/buy/project/od2UOBPEOSMFY8MFMOANI",
  },
];

export const tracks: Track[] = rawTracks.map((t) => ({
  ...t,
  slug: toSlug(t.song),
}));

export function getTrackBySlug(slug: string): Track | undefined {
  return tracks.find((t) => t.slug === slug);
}
