import { NavBar } from "../navbar/page";
import { HoverEffect } from "../ui/card-hover-effect";

export const schoolProjects = [
  {
    title: "Systemic Lupus Erythematosus Detection System",
    description:
      "A lupus detection system for early diagnosis based on the malar rash.",
    link: "https://github.com/AbdilahiMJama/SLE-Detection-System",
  },
  {
    title: "Intuilize Customer Segmentation",
    description: "An NDA project on customer and product segmentation.",
    link: "",
  },
  {
    title: "Merging Galaxies",
    description:
      "A machine learning project on detecting whether galaxies obtained from images by the James Webb Space Telecsope are merging or not .",
    link: "https://google.com",
  },
];
export const personalProjects = [
  {
    title: "Rate my Professor Clone with AI chatbot",
    description:
      "A rate my professor chatbot that gives your professor ratings.",
    link: "https://github.com/AbdilahiMJama/rate-my-professor",
  },
  {
    title: "Pantry Tracker",
    description:
      "A pantry management system that helps users keep track of their groceries.",
    link: "https://github.com/AbdilahiMJama/Pantry-Tracker",
  },
  {
    title: "Coffee Chatbot",
    description: "A simple coffee chatbot for the Headstarter AI fellowship.",
    link: "https://github.com/AbdilahiMJama/headstarter-chatbot",
  },
  {
    title: "Flashcard SaaS",
    description:
      "A simple flashcard app for learning with an AI learning assistant.",
    link: "https://github.com/AbdilahiMJama/flashcard-saas",
  },
];

export default function Projects() {
  return (
    <div className="h-[80rem] w-full rounded-md bg-black/[0.96] antialiased bg-grid-white/[0.02] relative flex flex-col">
      <NavBar />
      <div className=" p-4 m-20 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-3xl text-center font-bold relative z-20 bg-clip-text bg-gradient-to-b text-blue-700 dark:text-blue-500">
          School Projects
        </h1>
        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={schoolProjects} />
        </div>
      </div>
      <div className=" p-4 m-20 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-3xl text-center font-bold relative z-20 bg-clip-text bg-gradient-to-b text-blue-700 dark:text-blue-500">
          Personal Projects (Shoutout to Headstarter AI and Bill Zhang)
        </h1>
        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={personalProjects} />
        </div>
      </div>
    </div>
  );
}
