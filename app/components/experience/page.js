import Image from "next/image";
import React from "react";
import { Timeline } from "../ui/timeline";

export default function Experience() {
  const data = [
    {
      title: "August 2024 - Present:",
      content: (
        <div>
          <h4 className="text-sm font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 mb-8"></h4>
          <p className="text-neutral-300 text-xs md:text-sm font-normal mb-4">
            Currently a Senior.
          </p>
          <p className="text-neutral-300 text-xs md:text-sm font-normal mb-4">
            Working on a Systemic Lupus Erythematosus (SLE) project.
          </p>
          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
    {
      title: "May 2024 - August 2024",
      content: (
        <div>
          <p className="text-neutral-300 text-xs md:text-sm font-normal mb-4">
            Technology Consulting Intern at DXC Technology.
          </p>
        </div>
      ),
    },
    {
      title: "January 2024 - May 2024",
      content: (
        <div>
          <p className="text-neutral-300 text-xs md:text-sm font-normal mb-8">
            Junior Year.
          </p>
          <p className="text-neutral-300 text-xs md:text-sm font-normal mb-4">
            Intuilize Customer Segmentation Project
          </p>
          <p className="text-neutral-300 text-xs md:text-sm font-normal mb-4">
            MavPASS Leader : Data Structures with Java.
          </p>
          <p className="text-neutral-300 text-xs md:text-sm font-normal mb-4">
            Teaching / Lab Assistant for Introduction to Programming with
            Python.
          </p>
        </div>
      ),
    },
    {
      title: "August 2023 - December 2023",
      content: (
        <div>
          <p className="text-neutral-300 text-xs md:text-sm font-normal mb-4">
            Junior Year.
          </p>
          <p className="text-neutral-300 text-xs md:text-sm font-normal mb-4">
            Astronomy Project: Merging galaxies detection system.
          </p>
          <p className="text-neutral-300 text-xs md:text-sm font-normal mb-4">
            MavPASS Leader : Introduction to Programming with Python.
          </p>
          <p className="text-neutral-300 text-xs md:text-sm font-normal mb-4">
            Teaching / Lab Assistant for Introduction to Programming with
            Python.
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
