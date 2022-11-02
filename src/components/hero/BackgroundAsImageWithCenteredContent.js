import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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

const pathName = window.location.pathname





const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8  bg-center bg-cover h-96 min-h-12`}

  ;
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
      <NavLink href="/about-us">
        About Us
      </NavLink>
      <NavLink href="/benefits">
        Benefits
      </NavLink>
      <NavLink href="/how-it-works">
        How it works
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

  let backgroundImage = pathName == '' ? "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" : pathName == 'about-us' ? "https://images.unsplash.com/photo-1604076984203-587c92ab2e58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" : pathName == 'contact' ? "https://images.unsplash.com/photo-1604076850742-4c7221f3101b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" : "https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2029&q=80" 

  const divStyle = {
    backgroundImage: `url("${backgroundImage}")` ,
    
};

const secondDivStyle = {
  backgroundImage: `url("https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")` ,
  
};


  return (
    
    <Container style={pathName == '' ? divStyle : secondDivStyle}>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} />
        {/* <Content>
          <Heading>
              Book Music & Comedy Events
              <br />
              anywhere in New York
          </Heading>
          <PrimaryAction>Search Events Near Me</PrimaryAction>
        </Content> */}
      </HeroContainer>
      
      
    </Container>
  );
};