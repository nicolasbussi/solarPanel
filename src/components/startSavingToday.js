import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Subheading } from "./misc/Headings";
import StartSavingTodayBackground from "../images/startSavingTodayBackground.svg";

import { PrimaryLink as PrimaryLink} from "components/headers/light.js";

const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-72 min-h-12 ml-32 mr-32 rounded-[20px]`}
  // background-image: url("https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80");
background-image: url("${StartSavingTodayBackground}")
`;
const ButtonDiv = styled.div`${tw` pt-10 items-center px-28 xxs:px-1 xs:px-1 lg:px-28  xl:px-28 md:px-8 sm:px-8`}`;
const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;

const Heading = styled.h1`
  ${tw`text-3xl text-center text-xl  xxs:text-base xs:text-base lg:text-4xl xl:text-4xl 2xl:text-4xl md:text-xl sm:text-xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0 px-28 xxs:px-1 xs:px-1 lg:px-28 xl:px-28 md:px-8 pt-8 sm:pt-32 xxs:pt-32 xs:pt-32 lg:pt-8 xl:pt-8 md:pt-8 sm:pt-8`}
  span {
    ${tw`inline-block mt-2`}
  }
  font-family: 'Poppins';
font-style: normal;
font-weight: 600;
line-height: 1;
`;
const SubHeading = styled.h2`${tw`text-gray-100 text-center text-xl  xxs:text-base xs:text-base lg:text-base xl:text-xl 2xl:text-xl md:text-xl sm:text-xl pt-8 px-28 xxs:px-1 xs:px-1 lg:px-28  xl:px-28 md:px-8 sm:px-8`}  
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