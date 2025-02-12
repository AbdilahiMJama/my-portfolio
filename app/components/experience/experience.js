"use client";
import Image from "next/image";
import React from "react";
import { Timeline } from "../ui/timeline";

export default function Experience() {
  const data = [
    {
      title: "August 2024 - Present:",
      content: (
        <div>
          <p className="text-sm font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 mb-4">
            Currently a Senior.
          </p>
          <p className="text-xs md:text-xl font-normal relative z-20 bg-clip-text bg-gradient-to-b text-blue-700 dark:text-blue-500">
            Systemic Lupus Erythematosus (SLE) project:
          </p>
          <p className="font-normal text-sm relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 mb-4">
            - Systemic Lupus Erythematosus (SLE) is a chronic autoimmune disease
            that causes the body to attack its own cells, tissues and organs.
            One of its important features is a butterfly malar rash, this rash
            appears on the nose bridge and the cheeks. It mimics the shape of
            the wings of a butterfly, hence the name. <br />- The project aims
            to develop a deep learning model to classify the butterfly malar
            rash in patients with SLE.The first step is creating a usable
            dataset (1000+ images) by scraping images from the internet and then
            augmenting the images to 224 by 224. In addition, we use transfer
            learning which is the use of pretrained models on a larger dataset
            such as the Imagenet datasest.{" "}
          </p>
          <p className="text-xs md:text-xl font-normal relative z-20 bg-clip-text bg-gradient-to-b text-blue-700 dark:text-blue-500">
            Research: Federated Learning and Continuous Autonomous Vehicles.
          </p>
          <p className="font-normal text-sm relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 mb-4">
            {" "}
            In Progress{" "}
          </p>
          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
    {
      title: "May 2024 - August 2024",
      content: (
        <div>
          <p className="text-xs md:text-xl font-bold relative z-20 bg-clip-text bg-gradient-to-b text-blue-700 dark:text-blue-500">
            Internship:
          </p>
          <p className="text-xs md:text-xl font-normal relative z-20 bg-clip-text bg-gradient-to-b text-blue-700 dark:text-blue-500">
            Technology Consulting Intern at DXC Technology.
          </p>
          <p className="text-xs md:text-sm font-normal relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
            - First internship experience with a great company. I had the
            opportunity to work with the performance engineering team that
            specifically the fraud detection team that is consulting with
            Mastercard.
            <br />
            - I was able to learn a lot about the industry and the importance of
            performance engineering and fraud detection. - I worked on a project
            that involved refactoring a multi-step analysis program in Java and
            Spring Boot that creates multiple graphs for easier analysis.
            <br />- My favorite quote by my mentor was "An expert knows one more
            thing than you do". Something that I will always remember.
          </p>
        </div>
      ),
    },
    {
      title: "January 2024 - May 2024",
      content: (
        <div>
          <p className="font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 mb-4">
            Junior Year.
          </p>
          <p className="text-xs md:text-xl font-normal relative z-20 bg-clip-text bg-gradient-to-b text-blue-700 dark:text-blue-500">
            Intuilize Customer Segmentation Project:
          </p>
          <p className=" text-xs md:text-sm font-normal relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 mb-4">
            (NDA PROJECT): Customer and Product Segmentation using Machine
            Learning for price and inventory optimization.
          </p>
        </div>
      ),
    },
    {
      title: "August 2023 - December 2023",
      content: (
        <div>
          <p className="font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b text-blue-700 dark:text-blue-500 mb-1">
            Junior Year.
          </p>
          <p className="text-xs md:text-xl font-normal relative z-20 bg-clip-text bg-gradient-to-b text-blue-700 dark:text-blue-500">
            Astronomy Project: Merging galaxies detection system:
          </p>
          <p className=" text-xs md:text-sm font-normal relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 mb-4">
            - This school project aimed to classify merging galaxies from
            non-merging galaxies using machine learning. The dataset was
            obtained from the James Webb Space Telescope. - The dataset was
            preprocessed with the help of python packages such as Astropy that
            is specific for astronomical data.
          </p>
        </div>
      ),
    },
    {
      title: "January 2023 - May 2024",
      content: (
        <div>
          <p className="text-xs md:text-xl font-normal relative z-20 bg-clip-text bg-gradient-to-b text-blue-700 dark:text-blue-500">
            MavPASS Leader : Data Structures with Java:
          </p>
          <p className=" text-xs md:text-sm font-normal relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 mb-4">
            - <b>Maverick Peer facilitated Academic Support System (MavPASS)</b>{" "}
            is a peer-led academic support program that provides students with
            the opportunity to work with a peer leader who has successfully
            completed the course.
            <br />- Working with peers is a great way to learn and teach since
            it helped reinforce the concepts that I learnt. I was able to help
            students understand the concepts of Data Structures with Java.
          </p>
        </div>
      ),
    },
    {
      title: "August 2022 - May 2024",
      content: (
        <div>
          <p className="text-xs md:text-xl font-normal relative z-20 bg-clip-text bg-gradient-to-b text-blue-700 dark:text-blue-500">
            Teaching / Lab Assistant for Introduction to Programming with
            Python:
          </p>
          <p className=" text-xs md:text-sm font-normal relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 mb-4">
            - Actively communicated with and collaborated with course
            instructors for the Introduction to Programming with Python course
            to align support efforts for students withing the lab and the
            classroom content. <br /> - Increase the student passing rate up to
            75% and overall independent problem solving ability when facing
            coding challenges.
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full rounded-md bg-black/[0.96] antialiased bg-grid-white/[0.02] relative flex flex-col">
      <Timeline data={data} />
    </div>
  );
}
