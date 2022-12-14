import { Outlet } from 'react-router-dom';
// import Header from "./headers/light.js";
import MiniCenteredFooter from "../components/footers/MiniCenteredFooter.js";
// import Hero from "components/hero/BackgroundAsImageWithCenteredContent.js";



import React from "react";
import Hero from "components/hero/BackgroundAsImageWithCenteredContent.js";
import tw from "twin.macro";
import styled from "styled-components";

export const DesktopNavLinks = tw.nav`hidden lg:flex flex-1 justify-between items-center ml-32 mr-32`;
export const NavLinks = tw.div`inline-block`;

export const NavLink = tw.a`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500

`;

export const LogoLink = styled(NavLink)`
  ${tw`flex items-center font-black border-b-0 text-2xl! ml-0!`};
  font-family: 'lekton';
  font-style: normal;
  font-weight: 700;
  img {
    ${tw`w-10 mr-3`}
  }
`;

export const divider = tw.div`
  // text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  // font-semibold tracking-wide transition duration-300
  // pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500
bg-red-900
h-10

`;

export const styledDivider = styled(divider)`
  ${tw`bg-red-900
  h-10`};
  bg-red-900
h-10
`;


const defaultLogoLink = (
  <LogoLink href="/">
    {"Innovation"} <br></br> {"Energy Services"}</LogoLink>
);

const links = [
  <NavLinks key={1}>
    <NavLink href="/about-us">
      About Us
    </NavLink>
    <NavLink href="/pricing">
      Pricing
    </NavLink>
  </NavLinks>,
];


const Layout = () => {
  return (
    <>
    <Hero />
       <div className="content">
     <div style={{height: '15vh'}}> </div>
         <Outlet />
         
        
       
       </div>
    {/* <MiniCenteredFooter />  */}
    {/* <DesktopNavLinks css={collapseBreakpointCss.desktopNavLinks}> */}
    <div style={{height: '15vh'}}> </div>
    <DesktopNavLinks>
        {defaultLogoLink}
        {links}
      </DesktopNavLinks>
      <hr></hr>
      <div style={{height: '5vh'}}> </div>
    </>
  );
};

export default Layout;
