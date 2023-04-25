import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";

import OpeningPage from "./screens/Opening";
import LoginPage from "./screens/Login";
import Main from "./screens/Main";

import HomePage from "./screens/Home";
import ContactPage from "./screens/contact";
import SettingsPage from "./screens/Settings";

import "./css/style.css";
const Model = () =>{
  
    return(


      <BrowserRouter>
      <Routes>

      <Route path="" element={<OpeningPage></OpeningPage>}></Route>
      <Route path="login" element={<LoginPage></LoginPage>}></Route>
      <Route path="main" element={<Main></Main>}></Route>

      <Route path="home" element={<HomePage></HomePage>}></Route>
      <Route path="contact" element={<ContactPage></ContactPage>}></Route>
      <Route path="settings" element={<SettingsPage></SettingsPage>}></Route>


      </Routes>
      </BrowserRouter>
    

    )
  
}
export default Model;