import React, { useContext } from "react";
import { dataContext } from "./../App";
import Eng from "../languages/Eng.json";
import Pl from "../languages/Pl.json";
import plIcon from "../resources/poland-flag-icon-64.png";
import engIcon from "../resources/united-kingdom-flag-icon-64.png";
import Print from "./print";

export default function Nav() {
  const { setLanguage } = useContext(dataContext);

  const eng = () => {
    setLanguage(Eng);
  };

  const pl = () => {
    setLanguage(Pl);
  };
  return (
    <nav className="top-nav">
      <div>
        <button onClick={() => eng()} className="language-btn">
          <img src={engIcon} alt="icon_eng"></img>
        </button>
        <button onClick={() => pl()} className="language-btn">
          <img src={plIcon} alt="icon_pl"></img>
        </button>
      </div>
      <Print />
    </nav>
  );
}
