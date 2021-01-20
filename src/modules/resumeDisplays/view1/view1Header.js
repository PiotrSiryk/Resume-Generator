import React, { useContext } from "react";
import { dataContext } from "../../../App";

export default function View1Header() {
  const context = useContext(dataContext);
  const { basic, bio, skill, education, experience, hobby } = context.data;
  console.log(basic);
  const { language } = context;
  return (
    <>
      <header>
        <h1>{basic.name}</h1>
      </header>
    </>
  );
}
