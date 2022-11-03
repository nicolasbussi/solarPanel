import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {css} from "styled-components/macro"; //eslint-disable-line
import { SectionHeading as HeadingTitle, Subheading } from "../components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import DesignImage from  "../images/design.png";
import InstallationImage from  "../images/installation.png";
import PowerOnImage from  "../images/powerOn.png";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const ThreeColumn = tw.div`flex flex-col lg:items-stretch lg:flex-row md:items-stretch md:flex-row flex-wrap`;
const Column = tw.div`mt-24 lg:w-1/3 lg:pl-0 md:w-9/12 md:pl-56 sm:pl-35 xs:pl-24 xxs:pl-5 xxs:pr-5`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Card = tw.div`lg:mx-4 xl:mx-8 max-w-sm flex flex-col h-full `;
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center h-80 lg:h-64 rounded rounded-b-none`
]);

const Details = tw.div`p-6 rounded rounded-t-none  flex-1 flex flex-col items-center text-center lg:block lg:text-left `;
const MetaContainer = tw.div`flex items-center`;
const Meta = styled.div`
  ${tw`text-secondary-100 font-medium text-sm flex items-center leading-none mr-6 last:mr-0`}
  svg {
    ${tw`w-4 h-4 mr-1`}
  }
`;

const Title = tw.h5`mt-4 leading-snug font-bold text-lg`;
const Description = tw.p`mt-2 text-sm text-secondary-100`;
const Link = styled(PrimaryButtonBase).attrs({as: "a"})`
  ${tw`inline-block mt-4 text-sm font-semibold`}
`
export default ({
  heading = "How it works",
  description = "Learn the 3 step process to install solar panels",

}) => {
  const blogPosts = [
    {
      imageSrc: DesignImage,
      title: "Design",
    },
    {
      imageSrc: InstallationImage,
      title: "Installation",
    },
    {
      imageSrc: PowerOnImage,
      title: "Powe On",
    }
  ];
  return (
  
    <Container>
      <Content>
        <HeadingInfoContainer>
          <HeadingTitle>{heading}</HeadingTitle>
          <HeadingDescription>{description}</HeadingDescription>
        </HeadingInfoContainer>
        <ThreeColumn>
          {blogPosts.map((post, index) => (
            <Column key={index}>
              <Card>
                <Image imageSrc={post.imageSrc} />
                <Details>
                  <Title>{post.title}</Title>
                </Details>
              </Card>
            </Column>
          ))}
        </ThreeColumn>
      </Content>
     
    </Container>
  );
};
