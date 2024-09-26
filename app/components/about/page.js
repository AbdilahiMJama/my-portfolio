import { divider } from "@nextui-org/react";
import { NavBar } from "../navbar/page";
import { Spotlight } from "../ui/spotlight";
import profilePic from "../../../public/images/abdilahi.png";
import React from "react";
import Image from "next/image";
export default function About() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-black/[0.96] antialiased bg-grid-white/[0.02] relative flex flex-col">
      <NavBar />
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="blue" />
      <div className=" p-4 m-20 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-3xl text-center font-bold relative z-20 bg-clip-text bg-gradient-to-b text-blue-700 dark:text-blue-500">
          About Me
        </h1>
        <div className="grid grid-cols-2 gap-4 items-center justify-center mx-auto max-w-3xl">
          <div className="flex justify-center">
            <Image
              src={profilePic}
              alt="Picture of the author"
              height={200}
              width={200}
            />
          </div>
          <div className="flex">
            <p className="text-neutral-300">
              My name is Abdilahi Jama and I'm a senior at Minnesota State
              University - Mankato. I'm majoring in Computer Science with a
              minor in Mathematics.My journey has been nothing but full of
              learning and gaining new experiences.I've been part of great AI
              and full stack projects both in school and personal. In addition,
              I was part of the internship program at DXC Technology where I
              gained professional experience in the field of IT.
            </p>
          </div>
        </div>
        <h1 className="text-4xl "></h1>
      </div>
    </div>
  );
}
