"use client";

import { useEffect, useState } from "react";
import LandingTitle from "./components/LandingTitle";

export default function Home() {
  const [view, setView] = useState("ktop");
  const [tab, setTab] = useState("");
  const [screen, setScreen] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    setView(screen.width > 800 ? "desktop" : "mobile");
    console.log(screen);
  }, [screen, screen.width, screen.height]);

  // get screen size
  useEffect(() => {
    setScreen({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", () => {
      setScreen({ width: window.innerWidth, height: window.innerHeight });
    });
  }, []);

  return (
    <div className="flex flex-col justify-center justify-items-center align-middle">
      <span className="select-none">
        <LandingTitle />
      </span>

      <div
        className={`flex flex-col gap-y-4 px-4 py-4 text-slate-400 ${view === "mobile" ? "items-center gap-y-12 py-[25%]" : null}`}
      >
        <a
          className={`hover:text-white text-xl hover:underline max-w-fit ${tab === "about" ? "animate-ping" : null} ${view === "mobile" ? "!text-2xl" : null}`}
          href="/about"
          onClick={() => setTab("about")}
        >
          About Me
        </a>
        <a
          className={`hover:text-white text-xl hover:underline max-w-fit ${tab === "projects" ? "animate-ping" : null}  ${view === "mobile" ? "!text-2xl" : null}`}
          href="/projects"
          onClick={() => setTab("projects")}
        >
          My Projects
        </a>
        <a
          className={`hover:text-white text-xl hover:underline max-w-fit ${tab === "contact" ? "animate-ping" : null}  ${view === "mobile" ? "!text-2xl" : null}`}
          href="/contact"
          onClick={() => setTab("contact")}
        >
          Contact Me
        </a>
      </div>
    </div>
  );
}
