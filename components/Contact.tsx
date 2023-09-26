"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import useSectionInView from "@/lib/hooks";

import { motion } from "framer-motion";
import { sentEmail } from "@/actions/sendEmail";
import SubmitBtn from "@/components/SubmitBtn";
import toast from "react-hot-toast";

const Contact = () => {
  const { ref } = useSectionInView("Contact", 0.65);

  return (
    <motion.section
      id="contact"
      ref={ref}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className=" text-gray-700 -mt-6 text-sm dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:sandeepthakur7567@gmail.com">
          sandeepthakur7567@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form 
        className="mt-10 flex flex-col dark:text-black"
        action={ async (formData) => {
          const { data, error } = await sentEmail(formData);

          if(error) {
            toast.error(error);
            return;
          }

          toast.success("Email send successfully");

        }}
      >
        <input   
          placeholder="Your email"
          className="h-14 px-4 rounded-lg borderBlack dark:outline-none dark:bg-white/80 dark:focus:bg-white/100 transition-all duration-300"
          type="email"
          name="senderEmail"
          required
          maxLength={500}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4
          dark:outline-none dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all duration-300"
          name="message"
          id="message"
          placeholder="Your Message"
          required
          maxLength={5000}
        />
        <SubmitBtn/>
      </form>
    </motion.section>
  );
};

export default Contact;
