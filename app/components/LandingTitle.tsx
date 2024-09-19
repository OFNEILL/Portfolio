"use client";

import { useEffect, useState } from "react";

export default function LandingTitle() {
  function randomTextColour() {
    const colours = [
      "text-red-400",
      "text-yellow-400",
      "text-green-400",
      "text-purple-400",
      "text-pink-400",
      "text-red-500",
      "text-yellow-500",
      "text-blue-500",
      "text-indigo-500",
      "text-purple-500",
    ];
    return colours[Math.floor(Math.random() * colours.length)];
  }
  const [colour, setColour] = useState("text-white");

  return (
    <header className="self-center">
      <h1
        className={`${colour} text-[calc(100vw/4.2)] w-full max-w-full min-w-full fit-content font-bold text-center uppercase self-center align-middle justify-self-center z-20`}
      >
        OFNEILL
      </h1>
    </header>
  );
}
