import React from 'react';
import { Link } from 'react-router-dom';
import '../Classes/Classes.css';

const Term = ({className,classLink,termLink,}) => {
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
}

export default Term;
