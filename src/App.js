import React, { useReducer, useEffect } from "react";
import icon from "./icon.png";
import InputBar from "./modules/inputbar";
import ResumeView from "./modules/resumeView";
import Print from "./modules/print";

export const dataContext = React.createContext();

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "add-basic-info":
      return { ...state, basic: action.data };
    case "add-bio":
      return { ...state, bio: action.data };
  }
};

export default function App() {
  const localData = JSON.parse(localStorage.getItem("ResumeData"));
  const [data, dispatch] = useReducer(reducer, localData || {});

  useEffect(() => {
    localStorage.setItem("ResumeData", JSON.stringify(data));
  }, [data]);

  return (
    <dataContext.Provider value={{ dispatch, data }}>
      <Print />
      <div className="all">
        <InputBar />
        <ResumeView />
      </div>
    </dataContext.Provider>
  );
}
