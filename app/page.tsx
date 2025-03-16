"use client";

import { Suspense, useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import {
  BellElectricIcon,
  CodeIcon,
  GithubIcon,
  GlobeIcon,
  MessagesSquareIcon,
  PlaneTakeoffIcon,
  SendIcon,
} from "lucide-react";
import LandingTitle from "@/components/landing-title";

export default function Home() {
  const [view, setView] = useState("ktop");
  const [tab, setTab] = useState("");
  const [screen, setScreen] = useState({
    width: 0,
    height: 0,
  });

  const usedSpeeds: number[] = [];

  const skills = [
    "C#",
    "Node.js",
    "React.js",
    "Next.js",
    "TypeScript",
    "TailwindCSS",
    "TSQL",
    "MySQL",
    "Python",
    "React Native",
    "Azure Devops",
    "Google Cloud",
    "Arch Linux",
    "Ubuntu",
    "Angular",
    "Software",
    "Software Solutions",
    "Website Design",
    "Website Development",
    "Website Creation",
    "Programming",
  ];

  function randomSpeed() {
    const speed = Math.floor(Math.random() * 230) + 50;
    if (usedSpeeds.includes(speed)) {
      return randomSpeed();
    }
    usedSpeeds.push(speed);
    return speed;
  }

  function randomTextColour() {
    const colours = [
      "text-red-400",
      "text-yellow-400",
      "text-green-400",
      "text-blue-400",
      "text-indigo-400",
      "text-purple-400",
      "text-pink-400",
      "text-red-500",
      "text-yellow-500",
      "text-green-500",
      "text-blue-500",
      "text-indigo-500",
      "text-purple-500",
    ];
    return colours[Math.floor(Math.random() * colours.length)];
  }

  function randomTextSize() {
    const styles = [
      "text-xl",
      "text-lg",
      "text-md",
      "text-7xl",
      "text-6xl",
      "text-5xl",
      "text-4xl",
      "text-3xl",
      "text-2xl",
    ];

    return styles[Math.floor(Math.random() * styles.length)];
  }

  const shuffledSkills = skills.sort(() => Math.random() - 0.5);

  return (
    <div>
      <div className="z-10 absolute opacity-50 w-full lg:min-h-[100dvh] lg:max-h-[100dvh] overflow-hidden lg:block xs:hidden transform-gpu(100%)">
        {shuffledSkills.map((skill) => (
          <Marquee
            key={skill}
            speed={randomSpeed()}
            className="flex flex-col h-fit z-10"
            direction={`${Math.floor(Math.random() * ["left", "right"].length) === 0 ? "left" : "right"}`}
          >
            <div
              className={`${randomTextSize()} ${randomTextColour()} h-fit py-[2px] overflow-hidden animate-pulse select-none`}
            >
              {skill}
            </div>
          </Marquee>
        ))}
      </div>
      <div className="z-10 absolute overflow-hidden lg:hidden xs:block min-h-[10px] max-h-[10px] transform-gpu(100%)">
        <Suspense fallback={<></>}>
          {skills.map((skill) => (
            <div key={skill} className="text-black text-xs">
              {skill}
            </div>
          ))}
        </Suspense>
      </div>

      <div className="z-20 w-full absolute h-[150vh]">
        <span className="flex flex-col h-[100vh] z-20 items-center justify-center">
          <LandingTitle />
        </span>

        <span className="flex flex-col xs:justify-center lg:justify-between">
          <div className="flex flex-col items-start h-[100vh]">
            <div className="flex flex-col gap-4 pt-32 px-2">
              <h2 className="text-2xl underline xs:self-center lg:self-start">
                About Me
              </h2>
              <div className="text-lg xs:w-full xs:px-2 lg:w-[35%] lg:text-start xs:text-center">
                <p>
                  &nbsp; &nbsp;&nbsp; &nbsp; From a young age, I always dreamed
                  of becoming a software developer. &nbsp; I have always been
                  fascinated by technology and the endless possibilities it
                  brings. &nbsp; I have been programming for over 4 years now,
                  with 3 of those years being professionally and have worked on
                  a variety of projects ranging from web development to mobile
                  app development.
                </p>
                <p className="pt-2">
                  &nbsp; &nbsp;&nbsp; &nbsp; I am always looking to learn new
                  technologies and improve my skills.&nbsp; It is through honing
                  these skills that I can call myself a Full Stack Developer,
                  with a focus on Backend.&nbsp; I am proficient in a variety of
                  programming languages and frameworks, some of which are listed
                  below.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col xs:self-center lg:self-end xs:[200vh] lg:h-[150vh] gap-y-6 px-2">
            <h2 className="text-2xl underline xs:self-center lg:self-end">
              My Projects
            </h2>
            <span className="rounded-lg xs:[max-w-[50%] lg:max-w-[25%] bg-zinc-900 p-2 lg:self-end xs:self-center flex-col">
              <Image
                alt="monstr"
                src="/monstr-desktop.gif"
                width={0}
                height={0}
                sizes="100vw"
                unoptimized={true}
                className="w-fit h-auto"
              />
              <span className="flex flex-row text-sm pt-1 justify-between items-center w-full">
                <span className="flex flex-row items-center gap-x-1">
                  <SendIcon strokeWidth={1.5} size={16} />
                  <span>Monstr</span>
                </span>
                <span className="flex items-center pr-2 gap-2">
                  <GithubIcon
                    strokeWidth={1.5}
                    size={18}
                    className="cursor-pointer"
                    onClick={() =>
                      window.open("https://github.com/OFNEILL/monstr")
                    }
                  />
                  <GlobeIcon
                    strokeWidth={1.5}
                    size={18}
                    className="cursor-pointer hover"
                    onClick={() => window.open("https://monstr.ofneill.com")}
                  />
                </span>
              </span>
            </span>
            <span className="rounded-lg xs:[max-w-[50%] lg:max-w-[25%] bg-zinc-900 p-2 lg:self-end xs:self-center flex-col">
              <Image
                alt="nvim"
                src="/nvim-desktop.gif"
                width={0}
                height={0}
                sizes="100vw"
                unoptimized={true}
                className="w-fit h-auto"
              />
              <span className="flex flex-row text-sm pt-1 justify-between items-center w-full">
                <span className="flex flex-row items-center gap-x-1">
                  <CodeIcon strokeWidth={1.5} size={16} />
                  <span>My Neovim Config</span>
                </span>
                <span className="flex items-center pr-2 gap-2">
                  <GithubIcon
                    strokeWidth={1.5}
                    size={18}
                    className="cursor-pointer"
                    onClick={() =>
                      window.open("https://github.com/OFNEILL/dotfiles")
                    }
                  />
                </span>
              </span>
            </span>
            <span className="rounded-lg xs:[max-w-[50%] lg:max-w-[25%] bg-zinc-900 p-2 lg:self-end xs:self-center flex-col">
              <Image
                alt="nvim"
                src="/eeabc-desktop.gif"
                width={0}
                height={0}
                sizes="100vw"
                unoptimized={true}
                className="w-fit h-auto"
              />

              <span className="flex flex-row text-sm pt-1 justify-between items-center w-full">
                <span className="flex flex-row items-center gap-x-1">
                  <BellElectricIcon strokeWidth={1.5} size={16} />
                  <span>Epsom and Ewell ABC</span>
                </span>
                <span className="flex items-center pr-2 gap-2">
                  <GlobeIcon
                    strokeWidth={1.5}
                    size={18}
                    className="cursor-pointer hover"
                    onClick={() => window.open("https://epsomandewellabc.com")}
                  />
                </span>
              </span>
            </span>
            <span className="rounded-lg xs:[max-w-[50%] lg:max-w-[25%] bg-zinc-900 p-2 lg:self-end xs:self-center flex-col">
              <Image
                alt="travelcy"
                src="/travelcy-desktop.gif"
                width={0}
                height={0}
                sizes="100vw"
                unoptimized={true}
                className="w-fit h-auto"
              />
              <span className="flex flex-row text-sm pt-1 justify-between items-center w-full">
                <span className="flex flex-row items-center gap-x-1">
                  <PlaneTakeoffIcon strokeWidth={1.5} size={16} />
                  <span>Travelcy</span>
                </span>
                <span className="flex items-center pr-2 gap-2">
                  <GithubIcon
                    strokeWidth={1.5}
                    size={18}
                    className="cursor-pointer"
                    onClick={() =>
                      window.open("https://github.com/OFNEILL/travelcy-ui")
                    }
                  />
                  <GlobeIcon
                    strokeWidth={1.5}
                    size={18}
                    className="cursor-pointer hover"
                    onClick={() => window.open("https://travelcy.ofneill.com")}
                  />
                </span>
              </span>
            </span>
          </div>
        </span>
      </div>
    </div>
  );
}
