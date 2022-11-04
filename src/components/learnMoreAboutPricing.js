import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Subheading } from "./misc/Headings";
import LearnMoreAboutPricingBackground from "../images/learnMoreAboutPricingBackground.svg";

import { PrimaryLink as PrimaryLink} from "components/headers/light.js";

const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-96 min-h-12 pl-20 pr-20 pt-20 pb-20`}
  background-image: url("${LearnMoreAboutPricingBackground}")
`;
const ButtonDiv = styled.div`${tw`pl-10 lg:pl-35 xl:pl-35 2xl:pl-35 md:pl-10 sm:pl-10 pt-10 items-center px-28`}`;
const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;

const Heading = styled.h1`
  ${tw` text-center text-xl  xxs:text-base xs:text-base lg:text-4xl xl:text-4xl 2xl:text-4xl md:text-xl sm:text-xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0 pt-1 xs:pt-20 xxs:pt-20 sm:pt-1 `}
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  span {
    ${tw`inline-block mt-2`}
  }
`;
const SubHeading = styled.h2`${tw`text-gray-100 text-center sm:text-xl lg:text-2xl xl:text-2xl px-28 xxs:px-1 xs:px-1 lg:px-28 xl:px-28 md:px-8 pt-10`} font-family: 'Poppins';
font-style: normal;
font-weight: 600;`;

export default () => {
 

  return (
    <Container>
      <HeroContainer>
      <Heading>Stop rentinig power. Start producing it.</Heading>
      <br></br>
      <SubHeading>Save up to 100% on your bill. Swap your current eletric bill with solar financing to avoid any cost whatsoever and to save money in the future</SubHeading>
        {/* <StyledHeader links={navLinks} /> */}
        <ButtonDiv>
        <PrimaryLink css={tw`rounded-full bg-cta-color`}href="/#">Learn more about pricing</PrimaryLink>
        </ButtonDiv>
      </HeroContainer>
     
    </Container>
  );
};