import React from "react";
import { NavLink } from "react-router-dom";

const Header  = () => {

    return(

        <div className="header">
        <div className="header_image"></div>
        <div className="header_links">
       
          <NavLink to="/home">HOME</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>
          <NavLink to="/settings">SETTINGS</NavLink>

        </div>
    </div>

    )


} 
export default Header;