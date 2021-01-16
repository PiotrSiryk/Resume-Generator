import React from "react";
import BasicInfo from "./inputs/basicInfo";
import Bio from "./inputs/bio";
import Skills from "./inputs/skills";
import Education from "./inputs/education";
import Photo from "./inputs/photo";
import Experience from "./inputs/experience";

export default function InputBar() {
  return (
    <nav className="input-nav">
      <Photo />
      <BasicInfo />
      <Bio />
      <Skills />
      <Education />
      <Experience />
    </nav>
  );
}
