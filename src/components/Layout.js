import { Outlet } from 'react-router-dom';
// import Header from "./headers/light.js";
import MiniCenteredFooter from "../components/footers/MiniCenteredFooter.js";
// import Hero from "components/hero/BackgroundAsImageWithCenteredContent.js";



import React from "react";
import Hero from "components/hero/BackgroundAsImageWithCenteredContent.js";





const Layout = () => {
  return (
    <>
    <Hero />
       <div className="content">
     
         <Outlet />
         <div style={{height: '102vh'}}>
        
        </div>
       </div>
    {/* <MiniCenteredFooter />  */}
    </>
  );
};

export default Layout;
