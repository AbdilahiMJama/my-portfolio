import React from "react";
import { NavBar } from "../navbar/page";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

export function GridBackgroundDemo() {
  const words = [
    { text: "Hi " },
    { text: "there! " },
    { text: "I'm " },
    { text: "Abdilahi", className: "text-blue-700 dark:text-blue-600" },
  ];
  return (
    <div className="h-[40rem] w-full bg-black dark:bg-white light:bg-dot-black/[0.1] bg-dot-white/[0.2] relative flex flex-col">
      <NavBar />
      <div className="absolute pointer-events-none inset-0 flex flex-col bg-black light:bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>
      <div className="text-center mt-20 sm:text-xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
        <div className="flex flex-col items-center justify-center h-[21rem]">
          <h1>
            <TypewriterEffectSmooth words={words} />
          </h1>
          <p className="text-xl leading-8 sm:text-xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
            I'm a full-stack developer and a tech enthusiast.
          </p>
        </div>
      </div>
    </div>

    /*
    <div className="h-[40rem] w-full bg-black dark:bg-white  bg-dot-white/[0.1] dark:bg-dot-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black dark:bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Backgrounds
      </p>
    </div>
    */
  );
}
