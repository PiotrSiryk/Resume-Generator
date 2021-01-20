import React, { useContext } from "react";
import { dataContext } from "../../../App";

export default function View1Header() {
  const context = useContext(dataContext);
  const { basic } = context.data;
  return (
    <>
      <header>
        <h1>{basic.name}</h1>
      </header>
    </>
  );
}
