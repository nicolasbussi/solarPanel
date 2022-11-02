import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Subheading } from "./misc/Headings";

const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-80 min-h-12 `}
  background-image: url("https://images.unsplash.com/photo-1579547945413-497e1b99dac0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80");
`;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;

const Heading = styled.h1`
  ${tw`text-3xl text-center sm:text-xl lg:text-4xl xl:text-4xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;
const SubHeading = tw.h2`text-gray-100 text-center sm:text-xl lg:text-3xl xl:text-3xl`;

export default () => {
 

  return (
    <Container>
      <HeroContainer>
      <Heading>Stop rentinig power. Start producing it.</Heading>
      <SubHeading>Save up to 100% on your bill. Swap your current eletric bill with solar financing to avoid any cost whatsoever and to save money in the future</SubHeading>
        {/* <StyledHeader links={navLinks} /> */}
      </HeroContainer>
    </Container>
  );
};