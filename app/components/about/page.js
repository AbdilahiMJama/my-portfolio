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
        <h1 className="text-center text-4xl font-bold text-neutral-100">
          About Me
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-xl text-center mx-auto">
          My name is Abdilahi Jama and I'm a senior at Minnesota State
          University - Mankato. I'm majoring in Computer Information Technology
          with a minor in Computer Science. I'm passionate about software
          development and I'm always looking for opportunities to learn and
          grow.
        </p>
        <Image
          src={profilePic}
          alt="Picture of the author"
          height={200}
          width={200}
        />
      </div>
    </div>
  );
}
