import React from "react";
import { NavBar } from "../navbar/page";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

export function GridBackgroundDemo() {
  const words = [
    { text: "Hi " },
    { text: "there! " },
    { text: "I'm " },
    { text: "Abdilahi", className: "text-blue-700 dark:text-blue-500" },
  ];
  return (
    <div className="h-[100vh] w-full bg-black dark:bg-white dark:bg-grid-small-black/[0.25] bg-grid-small-white/[0.15] relative flex flex-col">
      <NavBar />
      <div className="absolute pointer-events-none inset-0 flex flex-col bg-black light:bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>
      <div className="text-center mt-20 sm:text-xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
        <div className="flex flex-col items-center justify-center h-[21rem]">
          <h1>
            <TypewriterEffectSmooth words={words} />
          </h1>
          <p className="text-lg leading-8 sm:text-xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
            Welcome to my website.
            <br /> I'm an aspiring software engineer.
          </p>
        </div>
      </div>
    </div>
  );
}
