"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";

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

  const usedDelays: number[] = [];
  const usedSpeeds: number[] = [];
  const [view, setView] = useState("ktop");
  const [screen, setScreen] = useState({
    width: 0,
    height: 0,
  });

  // get screen size
  useEffect(() => {
    setScreen({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", () => {
      setScreen({ width: window.innerWidth, height: window.innerHeight });
      const rand = Math.floor(Math.random() * skills.length);
    });
  }, []);

  useEffect(() => {
    setView(screen.width > 800 ? "desktop" : "mobile");
    console.log(screen);
  }, [screen.width, screen.height]);

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

  function getSkillLimit() {
    //adjust text size according to screen size

    if (screen.height >= 1000) {
      return 7;
    } else if (screen.height > 800) {
      return 6;
    } else if (screen.height >= 600) {
      return 15;
    }
  }

  const shuffledSkills = skills.sort(() => Math.random() - 0.5);
  const chosenSkills = shuffledSkills; //.slice(0, getSkillLimit());

  //have it bounce using translate in css
  return (
    <div className="flex flex-col overflow-hidden max-h-[100vh]">
      <div className="grid grid-cols-3">
        <div className="aspect-square h-full max-h-[600px] overflow-hidden">
          <Image
            src="/my-pic.JPG"
            width={0}
            height={0}
            sizes="100vw"
            className="object-cover w-full h-full"
            alt="cool-ass photo of me"
          />
        </div>
        <div className="pt-4 col-span-2"></div>
      </div>
      <div className="pt-4">
        {chosenSkills.map((skill) => (
          <Marquee
            key={skill}
            delay={randomDelay()}
            speed={randomSpeed()}
            className="flex flex-col h-fit"
            direction={`${Math.floor(Math.random() * ["left", "right"].length) === 0 ? "left" : "right"}`}
          >
            <div
              className={`${randomTextSize()} h-fit py-[2px] overflow-hidden`}
            >
              {skill}
            </div>
          </Marquee>
        ))}
      </div>
    </div>
  );
}
