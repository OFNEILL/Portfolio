"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";
import Header from "../components/Header";

export default function About() {
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
    "Ubuntu LTS",
    "Angular",
  ];

  const rand = Math.floor(Math.random() * skills.length);
  const usedDelays: number[] = [];
  const usedSpeeds: number[] = [];

  const [view, setView] = useState("ktop");
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

  function randomDelay() {
    const delay = Math.floor(Math.random() * skills.length) + 1;
    if (usedDelays.includes(delay)) {
      return randomDelay();
    }
    usedDelays.push(delay);
    return delay;
  }

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
    const styles = ["text-xl", "text-lg", "text-md"];

    if (view === "desktop") {
      styles.push(
        "text-7xl",
        "text-6xl",
        "text-5xl",
        "text-4xl",
        "text-3xl",
        "text-2xl",
      );
    } else {
      styles.push("text-xs", "text-sm");
    }
    return styles[Math.floor(Math.random() * styles.length)];
  }

  const shuffledSkills = skills.sort(() => Math.random() - 0.5);
  const chosenSkills = shuffledSkills; //.slice(0, getSkillLimit());

  //have it bounce using translate in css
  return (
    <div className="flex flex-col overflow-hidden max-h-[100vh]">
      <Header view={view} />
      <div className="grid grid-cols-3">
        <div className="aspect-square h-full max-h-[600px] items-start">
          <Image
            src="/my-pic.JPG"
            width={0}
            height={0}
            sizes="100vw"
            className="object-cover w-full h-full"
            alt="photo of me"
          />
        </div>
        <div className="pt-4 col-span-2"></div>
      </div>
      <div className="pt-4">
        {chosenSkills.map((skill) => (
          <Marquee
            key={skill}
            speed={randomSpeed()}
            className="flex flex-col h-fit"
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
    </div>
  );
}
