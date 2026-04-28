import Link from "next/link";

export default function Header() {
  return (
    <>
      <div
        className="header-container fixed flex items-center justify-center text-sm md:text-xl w-full pt-4 md:pt-7 z-30"
        style={{ mixBlendMode: "difference", color: "white" }}
      >
        <Link href="/">
          <p className="text-4xl md:text-6xl">✷</p>
        </Link>
      </div>
    </>
  );
}
