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
            - Led a team of 4 in creating a dataset containing butterfly rash
            and facial rash images and design an extract transform load (ETL)
            pipeline to store the data in a database.
            <br />- Developed a state of the art of convolutonal neural network
            based model to detect butterfly malar rash from facial images and
            draft a conference paper.
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
            - Supported the performance engineering team in fraud detection
            through analyzing and monitoring database metrics.
            <br /> - Refactored a multi-step analysis program in Java and Spring
            Boot to a one step program to increase efficiency and performance.{" "}
            <br /> - Developed a testing environment for data monitoring,
            utilizing log tools in Java to improve and half the time of problem
            solving.
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
            - Developed and applied machine learning tools to automate the
            identification of specific types of galaxies in a dataset obtained
            from images captured by the James Webb Space Telescope.
            <br /> - Focused on identifying galaxies that are merging or have
            recently merged with other galaxies in their vicinity.
            <br />- Utilized: Python-based libraries such as NumPy, Pandas,
            Matplotlib, and Scikit-learn.
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
            - Supported students in challenging courses such as Introduction to
            Programming with Python and Data Structures with Java. <br /> -
            Tailored my approach to cater the needs of the students and adapt to
            various learning styles and skill levels.
          </p>
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
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
