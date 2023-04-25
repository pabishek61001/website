import React from "react";
import { NavLink } from "react-router-dom";


const OpeningPage = ()=>{


      return(

      <div>
         <h1>Welcome to my_App</h1> 
        <NavLink to="/login">go to LoginPage</NavLink>
        <br></br>
        <NavLink to="/main">go to mainpage</NavLink>


      </div>


      )

}

export default OpeningPage;