import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaGithubSquare, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { BiLink } from "react-icons/bi";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "CodeHelp Web Development BootCamp 2023 (MERN Stack)",
    location: "Vadodara, Gujarat",
    description:
      `I am a graduate of the CodeHelp Web Development BootCamp in 2023, where I undertook an intensive
       6-month program focusing on the MERN (MongoDB, Express.js, React, Node.js) stack. This comprehensive 
       training equipped me with a solid foundation in web development and modern technologies. My stack 
       includes React, Next.js, HTML, CSS, and JavaScript, Tailwind CSS, Redux Toolkit, Express.js and MongoDB. 
       I'm open to full-time opportunities.`,
    megaProject:
      `MegaProject - StudyNotion LMS Project Overview: "StudyNotion LMS: A secure, role-based platform enabling instructors to create courses and
       students to purchase and access content with robust authentication and authorization."`,
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  // {
  //   title: "Front-End Developer",
  //   location: "Vadodara, Gujarat",
  //   description:
  //     "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
  //   megaProject:
  //    `MegaProject - StudyNotion LMS Project Overview: "StudyNotion LMS: A secure, role-based platform enabling instructors to create courses and
  //     students to purchase and access content with robust authentication and authorization."`,
  //  icon: React.createElement(CgWorkAlt),
  //   date: "2019 - 2021",
  // },
  // {
  //   title: "Full-Stack Developer",
  //   location: "Vadodara, Gujarat",
  //   description:
  //     "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
  //   megaProject:
  //    `MegaProject - StudyNotion LMS Project Overview: "StudyNotion LMS: A secure, role-based platform enabling instructors to create courses and
  //     students to purchase and access content with robust authentication and authorization."`,
  //   icon: React.createElement(FaReact),
  //   date: "2021 - present",
  // },
] as const;

export const projectsData = [
  {
    title: "StudyNotion-LMS",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["MERN", "React", "Redux Toolkit", "Express.Js", "MongoDB", "Tailwind", "Node.Js"],
    imageUrl: corpcommentImg,
    icon: React.createElement(FaGithubSquare),
    link: React.createElement(BiLink),
    gitLink: "https://github.com/sandeep7567/StudyNotion-A-Learning-Management-System",
    liveLink: "https://studynotion-a-learning-management-system-frontend.vercel.app/",
  },
  {
    title: "Portfolio Website",
    description:
    "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
    icon: React.createElement(FaGithubSquare),
    link: React.createElement(BiLink),
    gitLink: "https://github.com/sandeep7567/portfolio-website",
    liveLink: "https://github.com/sandeep7567/portfolio-website",
  },
  {
    title: "Feedback-Board",
    description:
    "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["MERN", "React", "Next.js", "Redux Toolkit", "Express.Js", "MongoDB", "Tailwind", "Node.Js"],
    imageUrl: rmtdevImg,
    icon: React.createElement(FaGithubSquare),
    link: React.createElement(BiLink),
    gitLink: "https://github.com/sandeep7567/Feedback-Board",
    liveLink: "https://feedback-board-mu.vercel.app/",
  },
  {
    title: "Spotify Clone",
    description:
    "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "PostSQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
    icon: React.createElement(FaGithubSquare),
    link: React.createElement(BiLink),
    gitLink: "https://github.com/sandeep7567/spotify-clone",
    liveLink: "https://spotify-clone-six-coral.vercel.app/",
  },
  {
    title: "Razorpay-Clone",
    description:
    "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["Tailwind",],
    imageUrl: wordanalyticsImg,
    icon: React.createElement(FaGithubSquare),
    link: React.createElement(BiLink),
    gitLink: "https://github.com/sandeep7567/Razorpay-Clone",
    liveLink: "https://razorpay-clone-sand-psi.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  // "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "GitHub",
  "Tailwind",
  // "Prisma",
  "MongoDB",
  "Redux",
  // "GraphQL",
  // "Apollo",
  "Express",
  // "PostgreSQL",
  // "Python",
  // "Django",
  "Framer Motion",
] as const;