import React from "react";
import { NavLink } from "react-router-dom";


const Main = () =>{

    return(
      <div>
        <div className="header">
            <div className="header_image"></div>
            <div className="header_links">
              <NavLink to="/home">HOME</NavLink>
              <NavLink to="/contact">CONTACT</NavLink>
              <NavLink to="/settings">SETTINGS</NavLink>

            </div>
        </div>
        <div className="content">
        <h2>this is main page</h2>
        </div>
        <div className="footer"><NavLink to="/">Go to OpeningPage</NavLink>
        </div>
        
      </div>

    )


}
export default Main;