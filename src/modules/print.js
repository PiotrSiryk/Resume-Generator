import React from "react";

export default function Print() {
  const printToPdf = () => {
    const toPrint = document.querySelector(".resume-container").innerHTML;
    const backup = document.body.innerHTML;
    document.body.innerHTML = toPrint;
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
