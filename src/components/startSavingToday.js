import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Subheading } from "./misc/Headings";
import HeaderImage from "../images/headerBackground.svg";
import { PrimaryLink as PrimaryLink} from "components/headers/light.js";
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-72 min-h-12 ml-32 mr-32 rounded-[20px] `}
  background-image: url("${HeaderImage}");
`;
const ButtonDiv = styled.div`${tw`pl-10 lg:pl-35 xl:pl-35 2xl:pl-35 md:pl-10 sm:pl-10 pt-10 items-center px-28`}`;
const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;

const Heading = styled.h1`
  ${tw`text-3xl text-center sm:text-xl lg:text-3xl xl:text-4xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0 pt-10`}
  span {
    ${tw`inline-block mt-2`}
  }
  font-family: 'Poppins';
font-style: normal;
font-weight: 600;
line-height: 1;
`;
const SubHeading = styled.h2`${tw`text-gray-100 text-center pt-8 px-28`}  
font-family: 'Inter';
font-weight: 400
`;

export default () => {
 

  return (
    <Content>
      <Container>
      <HeroContainer>
      <Heading>Start Saving Today</Heading>
      <SubHeading>Join thousands of home owner that saved from 30% to 50% on their avarage electric bill</SubHeading>
        {/* <StyledHeader links={navLinks} /> */}
        <ButtonDiv>
        <PrimaryLink css={tw`rounded-full bg-cta-color`}href="/#">Schedule Free Call</PrimaryLink>
        </ButtonDiv>
      </HeroContainer>
    </Container>
    </Content>
    
  );
};