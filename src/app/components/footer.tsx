const socials = [
  { name: "Instagram", url: "#" },
  { name: "Twitter / X", url: "#" },
  { name: "YouTube", url: "#" },
  { name: "SoundCloud", url: "#" },
  { name: "Spotify", url: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-neutral-800 text-white px-6 py-14 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

        <div>
          <p className="text-[10px] font-mono text-neutral-500 tracking-[0.5em] uppercase mb-2">
            Machine Radio
          </p>
          <p className="text-[10px] font-mono text-neutral-700">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 md:gap-8">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              className="text-[10px] font-mono text-neutral-600 hover:text-white transition-colors duration-300 tracking-[0.3em] uppercase"
            >
              {s.name}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}
