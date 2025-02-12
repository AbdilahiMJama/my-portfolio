"use client";
import { divider } from "@nextui-org/react";
import { NavBar } from "../navbar/navbar";
import { Spotlight } from "../ui/spotlight";
import { HoverEffect } from "../ui/card-hover-effect";
import profilePic from "../../../public/images/abdilahi.png";
import kenya from "../../../public/images/kenya.png";
import germany from "../../../public/images/germany.png";
import italy from "../../../public/images/italy.png";
import brazil from "../../../public/images/brazil.png";
import somaliland from "../../../public/images/somaliland.png";
import somalia from "../../../public/images/somalia.png";

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
          <h1 className="text-3xl text-center font-bold relative z-20 bg-clip-text bg-gradient-to-b text-blue-700 dark:text-blue-500 my-7">
            Interests and Hobbies
          </h1>
          <div className="flex">
            <div className="grid grid-cols-3 grid-flow-col gap-4">
              <div className="my-5">
                <h1 className="text-xl text-center font-bold relative z-20 bg-clip-text bg-gradient-to-b text-blue-700 dark:text-blue-500">
                  Sports
                </h1>
                <p className="text-neutral-300 mx-5">
                  Beyond my academic life, I'm an avid sports fan. I love
                  watching soccer, football and other sports. I'm a huge fan of
                  Arsenal FC and the Baltimore Ravens.
                </p>
              </div>
              <div className="my-5">
                <h1 className="text-xl text-center font-bold relative z-20 bg-clip-text bg-gradient-to-b text-blue-700 dark:text-blue-500">
                  TBC....
                </h1>
                <p className="text-neutral-300 mx-5">
                  "Coming soon" ~ Abdilahi Jama
                </p>
              </div>
              <div className="my-5">
                <h1 className="text-xl text-center font-bold relative z-20 bg-clip-text bg-gradient-to-b text-blue-700 dark:text-blue-500">
                  Learning new languages
                </h1>
                <p className="text-neutral-300 mx-5 italic">
                  " If you speak to a man in a language he understands, that
                  goes to his head. If you speak to him in his language, that
                  goes to his heart ". ~ Nelson Mandela
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 items-center justify-center mx-auto max-w-4xl my-5">
            <div className="flex">
              <div className="grid grid-cols-3 grid-flow-col gap-4">
                <div className="my-5">
                  <h1 className="text-xl text-center font-bold relative z-20 bg-clip-text bg-gradient-to-b text-blue-700 dark:text-blue-500">
                    Full Stack Engineering
                  </h1>
                  <p className="text-neutral-300 mx-3">
                    Learning more about backed and front end development has
                    been a great experience.
                  </p>
                </div>
                <div className="my-5">
                  <h1 className="text-xl text-center font-bold relative z-20 bg-clip-text bg-gradient-to-b text-blue-700 dark:text-blue-500">
                    Deep Learning and AI
                  </h1>
                  <p className="text-neutral-300 mx-4">
                    I went down the rabbit hole of AI and deep learning and I've
                    been hooked ever since. I've worked on projects that involve
                    computer vision, natural language processing and more.
                  </p>
                </div>
                <div className="my-5">
                  <h1 className="text-xl text-center font-bold relative z-20 bg-clip-text bg-gradient-to-b text-blue-700 dark:text-blue-500">
                    Languages
                  </h1>
                  <div className="grid grid-cols-3 grid-flow-col gap-4 my-4">
                    <div>
                      <p className="text-lg font-bold relative z-20 bg-clip-text bg-gradient-to-b text-blue-700 dark:text-blue-500 mb-2">
                        Native
                      </p>
                      <div className="inline-flex gap-2">
                        <Image
                          src={kenya}
                          height={20}
                          width={20}
                          alt="kenya"
                        ></Image>
                        <Image
                          src={somaliland}
                          height={20}
                          width={20}
                          alt="lander"
                        ></Image>
                        <Image
                          src={somalia}
                          height={20}
                          width={20}
                          alt="xamar"
                        ></Image>
                      </div>
                    </div>
                    <div>
                      <p className="text-lg font-bold relative z-20 bg-clip-text bg-gradient-to-b text-blue-700 dark:text-blue-500 mb-2">
                        Fluent
                      </p>
                      <Image
                        src={germany}
                        height={20}
                        width={20}
                        alt="de"
                      ></Image>
                    </div>
                    <div>
                      <p className="text-lg font-bold relative z-20 bg-clip-text bg-gradient-to-b text-blue-700 dark:text-blue-500 mb-2">
                        Learning:
                      </p>
                      <div className="inline-flex gap-2">
                        <Image
                          src={brazil}
                          height={20}
                          width={20}
                          alt="br"
                        ></Image>
                        <Image
                          src={italy}
                          height={20}
                          width={20}
                          alt="it"
                        ></Image>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
