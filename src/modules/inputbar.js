import React from "react";
import BasicInfo from "./inputs/basicInfo";
import Bio from "./inputs/bio";

export default function InputBar() {
  return (
    <nav className="input-nav">
      <BasicInfo />
      <Bio />
    </nav>
  );
}
