import React, { useEffect } from "react";

import { useActiveSectionContext } from "@/context/active-sectioncontext";
import { useInView } from "react-intersection-observer";
import { SectionName } from "./types";

const useSectionInView = (sectionName: SectionName, threshold=0.75, ) => {
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  const { ref, inView, } = useInView({
    threshold,
  });
  
  useEffect(() => {
    if(inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName)
    }
  }, [setActiveSection, inView, timeOfLastClick]);

  return {ref}
};

export default useSectionInView;