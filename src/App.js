import React, { useReducer, useEffect } from "react";
import icon from "./icon.png";
import InputBar from "./modules/inputbar";
import ResumeView from "./modules/resumeView";
import Print from "./modules/print";

export const dataContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "add-basic-info":
      return { ...state, basic: action.data };
    case "add-bio":
      return { ...state, bio: action.data };
    case "add-skill":
      if (state.skill) {
        return { ...state, skill: [...state.skill, action.data.skill] };
      } else {
        return { ...state, skill: [action.data.skill] };
      }
    case "remove-skill":
      const removedSkill = state.skill.filter(
        (el, index) => index !== action.data
      );
      return { ...state, skill: removedSkill };
    case "add-education":
      if (state.education) {
        return { ...state, education: [...state.education, action.data] };
      } else {
        return { ...state, education: [action.data] };
      }
    case "remove-education":
      const removedEducation = state.education.filter(
        (el, index) => index !== action.data
      );
      return { ...state, education: removedEducation };
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
