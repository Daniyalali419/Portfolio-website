import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

import React, { useState } from "react";

const Navbar = () => {
  const [Click, setClick] = useState(true);
  const handleClick = () => setClick(!Click);
  const [color,setColor] = useState(false);
  const changeColor = ()=>{
    if(window.scrollY >=100){
      setColor(true)
    }else{setColor(false)}
  }
  window.addEventListener("scroll", changeColor )

  return (
    <div className={color ? "header header-bg":"header"}>
      <Link to={"/"}>
        <div className="portfolio"><h1>Portfolio.</h1></div>
      </Link>
      <ul className={Click ? "nav-menu":"nav-menu active"}>
        <li>
          <Link to={"/"}>Home</Link>
          <Link to={"/project"}>Project</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
      <div className="side-menu" onClick={handleClick}>
        {Click ? (
          <FaBars size={20} style={{ color: "#ffff" }} />
        ) : (
          <FaTimes size={20} style={{ color: "#ffff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
