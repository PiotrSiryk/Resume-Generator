import React from "react";
import BasicInfo from "./inputs/basicInfo";
import Bio from "./inputs/bio";
import Skills from "./inputs/skills";
import Education from "./inputs/education";

export default function InputBar() {
  return (
    <nav className="input-nav">
      <BasicInfo />
      <Bio />
      <Skills />
      <Education />
    </nav>
  );
}
