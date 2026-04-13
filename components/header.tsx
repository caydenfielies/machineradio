export default function Header() {
  return (
    <>
      <div
        className="header-container fixed flex items-center justify-between text-xl w-full px-12.5 py-7 z-30"
        style={{ mixBlendMode: "difference", color: "white" }}
      >
        <div className="left-side">
          <p className="text-6xl">✷</p>
        </div>
        <div className="right-side flex gap-7">
          <a>About Me</a>
          <a>Work</a>
          <a>Contact</a>
        </div>
      </div>
    </>
  );
}
