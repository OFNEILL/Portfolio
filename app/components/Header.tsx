"use client";

export default function Header() {
  return (
    <div className="flex flex-row items-center justify-between w-full h-fit">
      <a
        className="px-4 py-4 text-xl text-white fit-content font-bold uppercase cursor-pointer"
        href="/"
      >
        OFNEILL
      </a>
      <span className="flex items-center flex-row gap-x-40 pr-12">
        <a
          href="/about"
          className="text-slate-400 hover:text-white text-xl hover:underline text-nowrap"
        >
          About Me
        </a>

        <a
          href="/projects"
          className="text-slate-400 hover:text-white text-xl hover:underline max-w-fit text-nowrap"
        >
          My Projects
        </a>

        <a
          href="/contact"
          className="text-slate-400 hover:text-white text-xl hover:underline max-w-fit text-nowrap"
        >
          Contact Me
        </a>
      </span>
    </div>
  );
}
