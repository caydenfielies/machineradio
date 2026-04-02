const singles = [
  {
    id: "001",
    title: "Live Forever",
    artist: "Lancey Foux",
    gradient: "from-violet-900 via-purple-950 to-black",
  },
  {
    id: "002",
    title: "On Ur Mind",
    artist: "Lancey Foux",
    gradient: "from-orange-900 via-red-950 to-black",
  },
  {
    id: "003",
    title: "Spanish Guitar",
    artist: "Lancey Foux",
    gradient: "from-emerald-900 via-green-950 to-black",
  },
  {
    id: "004",
    title: "Alexis Sanchez",
    artist: "Wane",
    gradient: "from-amber-800 via-yellow-950 to-black",
  },
  {
    id: "005",
    title: "Sirens",
    artist: "Skepta",
    gradient: "from-cyan-900 via-teal-950 to-black",
  },
  {
    id: "006",
    title: "Daytona",
    artist: "Lancey Foux",
    gradient: "from-red-900 via-rose-950 to-black",
  },
];

const ep = {
  id: "007",
  title: "First Degree: Second Charge",
  artist: "Lancey Foux",
  type: "EP",
  gradient: "from-blue-900 via-indigo-950 to-black",
  tracks: ["For Sure", "Ring the Alarm", "Pioneer", "Gangstas Demise"],
};

export default function FeaturedWork() {
  return (
    <section className="bg-[#080808] text-white px-6 py-24 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="flex items-center gap-6 mb-16">
          <h2 className="text-[10px] font-mono tracking-[0.5em] text-neutral-500 uppercase shrink-0">
            Featured Work
          </h2>
          <div className="flex-1 h-px bg-neutral-800" />
        </div>

        {/* Singles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-neutral-800">
          {singles.map((r) => (
            <div
              key={r.id}
              className="group border-b border-r border-neutral-800 cursor-pointer"
            >
              {/* Art */}
              <div
                className={`aspect-square bg-gradient-to-br ${r.gradient} relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-500" />
              </div>

              {/* Info */}
              <div className="px-5 py-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[9px] font-mono text-neutral-700 tracking-widest">
                    {r.id}
                  </span>
                  <span className="text-[9px] font-mono text-neutral-600 uppercase tracking-wider">
                    Single
                  </span>
                </div>
                <p className="text-white text-sm font-medium uppercase tracking-wide leading-tight">
                  {r.title}
                </p>
                <p className="text-neutral-600 text-[11px] font-mono mt-1">
                  {r.artist}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* EP — full-width card */}
        <div className="border-b border-l border-r border-neutral-800 group cursor-pointer">
          <div className="flex flex-col md:flex-row">
            {/* Art */}
            <div
              className={`aspect-square md:w-72 md:aspect-auto bg-gradient-to-br ${ep.gradient} relative overflow-hidden shrink-0`}
            >
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-500" />
              <div className="absolute top-4 left-5">
                <span className="text-[9px] font-mono text-white/30 tracking-[0.4em] uppercase">
                  {ep.type}
                </span>
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 p-8 md:border-l border-t border-neutral-800 md:border-t-0">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[9px] font-mono text-neutral-700 tracking-widest">
                  {ep.id}
                </span>
                <span className="text-[9px] font-mono text-neutral-600 uppercase tracking-wider">
                  {ep.type}
                </span>
              </div>

              <p className="text-white text-xl md:text-2xl font-medium uppercase tracking-wide leading-tight mb-1">
                {ep.title}
              </p>
              <p className="text-neutral-600 text-[11px] font-mono mb-8">
                {ep.artist}
              </p>

              {/* Tracklist */}
              <div className="space-y-0">
                {ep.tracks.map((track, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 py-3 border-b border-neutral-800/60 last:border-0 group/track"
                  >
                    <span className="text-[9px] font-mono text-neutral-700 w-4 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-neutral-400 uppercase tracking-wide group-hover/track:text-white transition-colors duration-200">
                      {track}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
