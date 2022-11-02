import PageContent from "components/pricing/TwoPlansWithDurationSwitcher.js";
import styled from "styled-components";
import tw from "twin.macro";
// import { SectionHeading } from "../../components/misc/Headings.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";


const Heading = tw(SectionHeading)`w-full`;
const PageTitle = styled.h2`${tw` text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl md:text-4xl sm:text-4xl font-extrabold text-black text-center bg-clip-text`}
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
line-height: 1;
`;
const PageBody= styled.p`${tw` text-base lg:text-2xl xl:text-2xl 2xl:text-2xl md:text-2xl sm:text-2xl font-extrabold text-black text-center bg-clip-text px-8 pt-8`}
font-family: 'Inter';
font-style: normal;
font-weight: 400;
`;
const AboutUs = () => {

  return (
    <>
     <Container>
      <ContentWithPaddingXl>
        <PageTitle>{"Welcome to Innovation"}<br></br>{"Services Corp."}</PageTitle>
        <PageBody>{"Innovation Home Services works with the best in the industry. Our vision starts with the goal of making solar, simple and affordable for everyone."}<br></br><br></br><br></br>{"Since 2012, Floridians have been trusting us to provide the resources and knowledge they need in order to achieve their solar power goals. "}<br></br><br></br><br></br>{"Through our focus on customer service, dedication to customer relationships, and passion for innovation energy technologies, we've positioned ourselves to be the industry leaders that can adapt and grown along with the evolving solar landscape. "}</PageBody>
      </ContentWithPaddingXl>

    </Container>
    </>
  )
};

export default AboutUs;
