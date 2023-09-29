"use client";

import React, { useRef } from "react";

import { projectsData } from "@/lib/data";

import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";

type ProjectDetailProps = (typeof projectsData)[number];

const ProjectDetail = ({
  title,
  description,
  tags,
  imageUrl,
  icon,
  link,
  gitLink,
  liveLink,
}: ProjectDetailProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
    // smooth: 0.1
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section
        className="relative bg-gray-100 rounded-lg max-w-[42rem] border border-black/5 
    overflow-hidden sm:pr-8 sm:h-[22rem] sm:group-even:pl-8 hover:bg-gray-200 transition
     dark:bg-white/10 dark:hover:bg-white/20 dark:text-white"
      >
        <div
          className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] 
            flex flex-col h-full sm:group-even:ml-[18rem]"
        >
          <h3 className="text-2xl">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap items-center gap-2 mt-4 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider
            text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className="mt-2 flex justify-between items-center">
            <a
              href={gitLink}
              target="_blank"
              className="flex justify-center items-center hover:scale-125 shadow-lg drop-shadow-lg focus:scale-100 
            bg-white/[0.7] w-8 h-8 rounded-full gap-2
            leading-relaxed text-2xl text-gray-700 dark:text-white/70 dark:bg-black/60
            transition-all duration-300">
              {icon}
            </a>
            <a
              href={liveLink}
              target="_blank"
              className="flex justify-center items-center gap-2 hover:scale-110 focus:scale-100 
            bg-white/[0.7] bg-opacity-30 hover:bg-opacity-50 shadow-lg w-24 h-8 
            rounded-lg text-sm leading-relaxed 
            text-gray-700 dark:text-white/70 dark:bg-black/60 transition-all duration-300">
              {link}Live Link
            </a>
          </div>
          
        </div>

        <Image
          src={imageUrl}
          alt={"Project I worked on"}
          quality={95}
          className="absolute hidden sm:block top-14 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:-translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:-right-[initial]
        group-even:-left-40

        "
        />
      </section>
    </motion.div>
  );
};

export default ProjectDetail;
