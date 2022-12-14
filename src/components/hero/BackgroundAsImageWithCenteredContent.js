import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PricingHeaderImage from "../../images/pricingHeaderImage.svg";
import AboutUsHeaderImage from "../../images/aboutUsHeaderImage.svg";
import HeaderImage from "../../images/headerBackground.svg";
import Header, { NavLink, NavLinks, PrimaryLink as PrimaryLinkBase, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

const HeaderTitle = styled.h1`${tw`text-6xl  xxs:text-4xl xs:text-6xl lg:text-8xl xl:text-8xl 2xl:text-8xl md:text-8xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-header-start-color via-header-middle-color to-header-end-color pt-35 lg:pt-35 xl:pt-35 2xl:pt-35 md:pt-32 sm:pt-35 pl-10 lg:pl-35 xl:pl-35 2xl:pl-35 md:pl-10 sm:pl-10`}
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
line-height: 1;
`;

var HeaderImageToUse = '';

if(window.location.pathname === '/'){
  HeaderImageToUse = HeaderImage;

} else if (window.location.pathname === '/about-us'){
  HeaderImageToUse = AboutUsHeaderImage;

} else if (window.location.pathname === '/pricing'){
  HeaderImageToUse = PricingHeaderImage;

}
  


const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8  bg-center bg-cover h-96 min-h-12`}
  background-image: url("${HeaderImageToUse}")
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0`;
// bg-black opacity-75`;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;

const Heading = styled.h1`
  ${tw`text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const PrimaryAction = tw.button`rounded-full px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 font-bold shadow transition duration-300 bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:outline-none focus:shadow-outline`;

export default () => {
  
  const navLinks = [
    <NavLinks key={1}>
       <NavLink href="/">
        Home
      </NavLink>
      <NavLink href="/about-us">
        About Us
      </NavLink>
      <NavLink href="/pricing">
        Pricing
      </NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <PrimaryLink href="/#">
        Schedule Free Call
      </PrimaryLink>
    </NavLinks>
  ];

  var titleTop = '';
  var titleBottom = '';

  if(window.location.pathname === '/'){
    titleTop = 'Your Florida';
    titleBottom = 'solar partners';

  } else if (window.location.pathname === '/about-us'){
    titleTop = 'About';
    titleBottom = 'Us';

  } else if (window.location.pathname === '/pricing'){
    titleTop = 'Convenient';
    titleBottom = 'Pricing';
  }

  return (
    <Container >
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <HeaderTitle>{titleTop}<br></br>{titleBottom}</HeaderTitle>
      </HeroContainer>
    </Container>
  );
};