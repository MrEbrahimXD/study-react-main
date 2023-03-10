import React from "react";
import { Link } from "react-router-dom";
import ClassContainer from "../../Classes/ClassContainer.js";
import "../../Classes/Classes.css";

const FirstSecondary = () => {
  return (
    <>
      <h1 className="class-header">
        <Link to="/">الصفوف الثانوية</Link> ←{" "}
        <Link to="/firstSecondary">الأول الثانوي</Link>{" "}
      </h1>
      <div className="classes-container">
        <ClassContainer link="/firstSecondary/1" />
        <ClassContainer link="/firstSecondary/2" />
      </div>
    </>
  );
};

export default FirstSecondary;
