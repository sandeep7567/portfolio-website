"use client";

import React from 'react'
import SectionHeading from './SectionHeading'
import { skillsData } from '@/lib/data'
import useSectionInView from '@/lib/hooks'

import { motion } from "framer-motion";

const fadeAnimationVariants = {
  initial: {opacity: 0, y: 100},
  animate: (index: number) => ({opacity: 1, y: 0, transition: {delay: 0.05 * index},}),
}

const Skills = () => {
  const { ref } = useSectionInView("Skills", 0.50);
  return (
    <section
      id='skills'
      ref={ref}
      className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'>
      <SectionHeading>
        Skills
      </SectionHeading>
      <ul className='flex flex-wrap justify-center items-center gap-2 text-lg text-gray-800'>
        {skillsData.map((skill, index) => (
          <motion.li
            variants={fadeAnimationVariants}
            initial="initial"
            whileInView={"animate"}
            viewport={{
              once: true,
            }}
            custom={index}
            className='border bg-white border-black/10 rounded-xl px-5 py-3
            dark:bg-white/10 dark:text-white/80 '
            key={index}>
              {skill}
          </motion.li>
        ))}
      </ul>

    </section>
  )
}

export default Skills