import React from "react";

export default function Print() {
  const printToPdf = () => {
    const toPrint = document.querySelector(".resume-container").innerHTML;
    const backup = document.body.innerHTML;
    const photo = document.querySelector("canvas");
    document.body.innerHTML = toPrint;
    document.querySelector(".resume").style.transform = "scale(1)";
    document.querySelector(".resume").style.width = "805px";
    document.querySelector(".resume").style.height = "1137px";
    const head = document.querySelector(".resume>header").offsetHeight;
    const bioSection = document.querySelector(".bio-section").offsetHeight;
    const expSection = document.querySelector(".experience-section")
      .offsetHeight;
    if (head + bioSection + expSection > 1137) {
      console.log(document.querySelector(".resume"));
      document.querySelector(".resume").style.height = `${2 * 1137}px`;
    }
    document.querySelector(".display-image").innerHTML = "";
    document.querySelector(".display-image").appendChild(photo);
    window.print();
    document.body.innerHTML = backup;
    window.location.reload();
  };

  return (
    <div>
      <button onClick={() => printToPdf()}>Print</button>
    </div>
  );
}
