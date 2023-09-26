"use client";

import React, { useContext } from "react";
import SectionHeading from "./SectionHeading";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import useSectionInView from "@/lib/hooks";
import { useTheme } from "@/context/theme-cotext";

const Experience = () => {
  const { ref } = useSectionInView("Experience", 0.75);
  const { theme } = useTheme();
  return (
    <section
      ref={ref}
      id="experience"
      className="scroll-mt-28 mb-28 sm:mb-40"
    >
      <SectionHeading>My Experience</SectionHeading>
      <div>
        <VerticalTimeline
          lineColor=""
          animate={true}
          layout="1-column"
        >
          {experiencesData.map(
            (exp, index) => (
              <React.Fragment key={index}>
                <VerticalTimelineElement
                  visible
                  contentStyle={{
                    background: theme === "light" ?  "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                    boxShadow: "none",
                    border: "1px solid rgba(0, 0, 0, 0.05)",
                    textAlign: "left",
                    padding: "1.3rem 2rem",
                  }}
                  contentArrowStyle={{
                    borderRight: theme === "light" ? "0.4rem solid #9ca3af" : "0.4rem solid rgba(255,255,255,0.5)",
                  }}
                  date={exp.date}
                  icon={exp.icon}
                  iconStyle={{
                    background: theme === "light" ? "white" : "rgba(255,255,255,0.15)",
                    fontSize: "1.5rem",
                  }}
                >
                  <h3 className="font-semibold capitalize">{exp.title}</h3>
                  <p className="font-normal !mt-0">{exp.location}</p>
                  <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">{exp.description}</p>
                  <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">{exp.megaProject}</p>
                </VerticalTimelineElement>
              </React.Fragment>
            )
          )}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
