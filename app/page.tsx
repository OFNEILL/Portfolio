"use client";

import LandingTitle from "./components/LandingTitle";

export default function Home() {
  return (
    <div className="flex flex-col justify-center">
      <span className="select-none">
        <LandingTitle />
      </span>

      <div className="flex flex-col gap-y-4 px-4 py-4 text-slate-400 ">
        <a className="hover:text-white hover:underline" href="/about">
          About Me
        </a>
        <a className="hover:text-white hover:underline" href="/projects">
          My Projects
        </a>
        <a className="hover:text-white hover:underline" href="/contact">
          Contact Me
        </a>
      </div>
    </div>
  );
}
