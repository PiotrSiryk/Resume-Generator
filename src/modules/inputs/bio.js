import React, { useContext, useState } from "react";
import { dataContext } from "../../App";

export default function Bio() {
  const context = useContext(dataContext);
  const [current, setCurrent] = useState({
    bio: "",
  });
  const { dispatch, language } = context;
  const add = (ev) => {
    ev.preventDefault();
    dispatch({ type: "add-object", data: current, name: "bio" });
  };

  return (
    <div className="add-bio">
      <form action="">
        <div>
          <label htmlFor="bio">{language.nav.bio}</label>
          <textarea
            name=""
            cols="30"
            rows="10"
            type="text-area"
            id="bio"
            onChange={(event) =>
              setCurrent((prev) => {
                return { ...prev, bio: event.target.value };
              })
            }
          ></textarea>
        </div>
        <button onClick={(event) => add(event)}>{language.nav.add}</button>
      </form>
    </div>
  );
}
