import React from "react";
import { Link } from "react-router-dom";
import ClassContainer from "../../../Classes/ClassContainer.js";
import "../../../Classes/Classes.css";

const ThirdChemics = () => {
  return (
    <>
      <h1 className="class-header">
        <Link to="/">الصفوف الثانوية</Link> ←{" "}
        <Link to="/thirdSecondary">الثالث الثانوي</Link>←{" "}
        <Link to="/thirdSecondary/Chemics">الكيمياء</Link>
      </h1>
      <div className="classes-container">
        <ClassContainer title="Okay test chemics" />
        <ClassContainer />
        <ClassContainer />
        <ClassContainer />
        <ClassContainer />
        <ClassContainer />
        <ClassContainer />
        <ClassContainer />
      </div>
    </>
  );
};

export default ThirdChemics;
