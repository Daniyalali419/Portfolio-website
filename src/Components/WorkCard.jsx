import React from "react";
import "./WorkCard.css";
import { NavLink } from "react-router-dom";
const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="image" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
      </div>
      <div className="pro-btns">
        <NavLink to="url.com" className="btn">
          View
        </NavLink>
        <NavLink to={props.source} className="btn">
          Source
        </NavLink>
      </div>
    </div>
  );
};

export default WorkCard;
