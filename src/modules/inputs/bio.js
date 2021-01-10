import React, { useContext, useState } from "react";
import { dataContext } from "../../App";

export default function Bio() {
  const context = useContext(dataContext);
  const [current, setCurrent] = useState({
    bio: "",
  });
  const add = (ev) => {
    ev.preventDefault();
    const { dispatch } = context;
    dispatch({ type: "add-object", data: current, name: "bio" });
  };

  return (
    <div className="add-basic-info">
      <form action="">
        <div>
          <label htmlFor="bio">Bio</label>
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
        <button onClick={(event) => add(event)}>Add</button>
      </form>
    </div>
  );
}
