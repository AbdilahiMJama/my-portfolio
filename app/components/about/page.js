import { divider } from "@nextui-org/react";
import { NavBar } from "../navbar/page";
import { Spotlight } from "../ui/spotlight";
import { HoverEffect } from "../ui/card-hover-effect";
import profilePic from "../../../public/images/abdilahi.png";
import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className="h-[75rem] w-full rounded-md bg-black/[0.96] antialiased bg-grid-white/[0.02] relative flex flex-col">
      <NavBar />
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="blue" />
      <div className=" p-4 m-20 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-3xl text-center font-bold relative z-20 bg-clip-text bg-gradient-to-b text-blue-700 dark:text-blue-500">
          About Me
        </h1>
        <div className="grid grid-cols-2 gap-4 items-center justify-center mx-auto max-w-4xl">
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
              I'm Abdilahi Jama and I'm a senior at Minnesota State University -
              Mankato. I'm majoring in Computer Science with a minor in
              Mathematics.My journey has been nothing but full of learning and
              gaining new experiences.I've been part of great AI and full stack
              projects both in school and personal.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 items-center justify-center mx-auto max-w-4xl">
          <h1 className="text-3xl text-center font-bold relative z-20 bg-clip-text bg-gradient-to-b text-blue-700 dark:text-blue-500 my-5">
            Interests
          </h1>
          <div className="flex">
            <div className="grid grid-cols-3 grid-flow-col gap-4">
              <div className="my-5">
                <h1 className="text-2xl text-center font-bold relative z-20 bg-clip-text bg-gradient-to-b text-blue-700 dark:text-blue-500">
                  Sports
                </h1>
                <p className="text-neutral-300 mx-4">
                  Beyond my academic life, I'm an avid sports fan. I love
                  watching soccer, football and other sports. I'm a huge fan of
                  Arsenal FC and the Baltimore Ravens.
                </p>
              </div>
              <div className="my-5">
                <h1 className="text-2xl text-center font-bold relative z-20 bg-clip-text bg-gradient-to-b text-blue-700 dark:text-blue-500">
                  Deep Learning and AI
                </h1>
                <p className="text-neutral-300 mx-4">
                  I went down the rabbit hole of AI and deep learning and I've
                  been hooked ever since. I've worked on projects that involve
                  computer vision, natural language processing and more.
                </p>
              </div>
              <div className="my-5">
                <h1 className="text-2xl text-center font-bold relative z-20 bg-clip-text bg-gradient-to-b text-blue-700 dark:text-blue-500">
                  Learning new languages
                </h1>
                <p className="text-neutral-300 mx-4">
                  Previously on my interests....
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 items-center justify-center mx-auto max-w-4xl my-5">
            <h1 className="text-3xl text-center font-bold relative z-20 bg-clip-text bg-gradient-to-b text-blue-700 dark:text-blue-500">
              Skills
            </h1>
            <div className="flex">
              <div className="grid grid-cols-3 grid-flow-col gap-4">
                <div className="my-5">
                  <h1 className="text-2xl text-center font-bold relative z-20 bg-clip-text bg-gradient-to-b text-blue-700 dark:text-blue-500">
                    Full Stack Engineering
                  </h1>
                  <p className="text-neutral-300 mx-3">
                    Learning more about backed and front end development has
                    been a great experience.
                  </p>
                </div>
                <div className="my-5">
                  <h1 className="text-2xl text-center font-bold relative z-20 bg-clip-text bg-gradient-to-b text-blue-700 dark:text-blue-500">
                    Deep Learning and AI
                  </h1>
                  <p className="text-neutral-300 mx-4">
                    I went down the rabbit hole of AI and deep learning and I've
                    been hooked ever since. I've worked on projects that involve
                    computer vision, natural language processing and more.
                  </p>
                </div>
                <div className="my-5">
                  <h1 className="text-2xl text-center font-bold relative z-20 bg-clip-text bg-gradient-to-b text-blue-700 dark:text-blue-500">
                    To be continued...
                  </h1>
                  <p className="text-neutral-300 mx-4">
                    Previously on my interests....
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
