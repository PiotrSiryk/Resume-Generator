import React, { useEffect, useContext } from "react";
import { dataContext } from "../App";

export default function Print() {
  const { data, canvasRef } = useContext(dataContext);

  useEffect(() => {
    const head = document.querySelector(".resume>header").offsetHeight;
    const bioSection = document.querySelector(".bio-section").offsetHeight;
    const expSection = document.querySelector(".experience-section")
      .offsetHeight;
    if (head + bioSection + expSection > 1137) {
      console.log(document.querySelector(".resume"));
      document.querySelector(".resume").style.height = `${2 * 1137}px`;
    }
    if (head + bioSection + expSection < 1137) {
      console.log(document.querySelector(".resume"));
      document.querySelector(".resume").style.height = `${1 * 1137}px`;
    }
  }, [data]);

  const printToPdf = () => {
    const toPrint = document.querySelector(".resume-container").innerHTML;
    const backup = document.body.innerHTML;
    const photo = document.querySelector("canvas");

    sessionStorage.setItem("photo", photo.toDataURL());

    document.body.innerHTML = toPrint;
    document.querySelector(".resume").style.transform = "scale(1)";
    /* document.querySelector(".resume").style.width = "805px";
    document.querySelector(".resume").style.height = "1137px"; */

    document.querySelector(".display-image").innerHTML = "";
    document.querySelector(".display-image").appendChild(photo);
    window.print();
    document.body.innerHTML = backup;
    window.location.reload();
  };

  return (
    <div>
      <button onClick={() => printToPdf()} className="btn-print">
        Print
      </button>
    </div>
  );
}
