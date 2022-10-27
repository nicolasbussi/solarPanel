import { Outlet } from 'react-router-dom';
import tw from "twin.macro";
import styled from "styled-components";
// import Header from './Header';
import Header from "./headers/light.js";
import MiniCenteredFooter from "../components/footers/MiniCenteredFooter.js";


const Layout = () => {
  return (
    <div>
      <Header/>
      <div className="content">
        <Outlet />
      </div>
      <MiniCenteredFooter>  </MiniCenteredFooter> 
    </div>
  );
};

export default Layout;
