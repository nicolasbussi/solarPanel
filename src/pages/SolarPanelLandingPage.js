import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase, SubheadingCustom } from "../components/misc/Headings.js";
import { SectionDescription } from "../components/misc/Typography";
import { Container as ContainerBase, ContentWithPaddingXl } from "../components/misc/Layouts";

import styled from "styled-components";
export default () => {
  // const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const HighlightedText = tw.span`text-primary-500`;
  const Heading = tw(SectionHeading)`w-full text-white`;
  const Description = tw(SectionDescription)`mx-auto`;
  const Subheading= tw(SubheadingCustom)`mx-auto`;
  const cards = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1550699026-4114bbf4fb49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80",
      subtitle: "SAVINGS",
      title: "Pay less for Electricity",
      description:
        "Save up tp 50% on your electrical bill. Energy will increase in the next years but you can avoid your bill. Install solar.",
      color: 'text-red-800'
    },

    {
      imageSrc:
        "https://images.unsplash.com/photo-1543423924-b9f161af87e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      subtitle: "ENVIROMENT",
      title: "Produce clean energy",
      description:
        "Not only you will save on your energy bill but you will also, in some cases, produce enough energy to be sold back on the grid.",
        color: 'text-red-800'
    },

    {
      imageSrc:
        "https://images.unsplash.com/photo-1509824227185-9c5a01ceba0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80",
      subtitle: "HOME VALUE",
      title: "Increase  home value",
      description:
        "Increase your home value by 3% to 5% when installing solar.",
        color: 'text-red-800'
    }
  ];
  const Content = tw.div`mt-16`;
  const Card = styled.div(props => [
    tw`mt-24 md:flex justify-center items-center`,
    props.reversed ? tw`flex-row-reverse` : "flex-row"
  ]);
  const Image = styled.div(props => [
    `background-image: url("${props.imageSrc}");`,
    tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-80 md:h-144 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`
  ]);
  const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
  const Subtitle = tw.div`font-bold tracking-wide text-secondary-100 text-primary-100`;
  const Title = tw.h4`text-3xl font-bold text-gray-900`;
  const Link = tw.a`inline-block mt-4 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;






  const StatsContainerBase = tw(ContainerBase)`my-8 lg:my-10 bg-red-900 text-gray-100 -mx-8 px-8`;
  const StatsHeadingContainer = tw.div`bg-purple-900`;
  const StatsHeading = tw(SectionHeading)`sm:text-3xl md:text-4xl lg:text-5xl`;
  const StatsSubheading = tw(SubheadingBase)`text-gray-100 text-center`;
  const StatsDescription = tw(SectionDescription)`text-gray-400 text-center mx-auto max-w-screen-md`;

  const Container = tw.div`mt-8 flex flex-col sm:flex-row items-center justify-center flex-wrap max-w-screen-md justify-between mx-auto`
  const Stat = tw.div`flex flex-col text-center p-4 tracking-wide`
  const StatKey = tw.div`text-xl font-medium text-white`
  const StatValue = tw.div`text-4xl sm:text-3xl md:text-4xl lg:text-5xl text-white`


  const subheadingStatsText = "";
  const headingStatsText = "Our mission is to empower home and business owners with the right to choose where their energy comes from.";
  // const descriptionStatsText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  const stats = [
    {
      key: "Satisfied Clients",
      value: "3453",
    },
    {
      key: "# of trees plants",
      value: "3453",
    },
    {
      key: "Tons of C02 saved",
      value: "3453",
    },
  ]



  return (
    // <AnimationRevealPage>
<>
    {/* <Heading>Your Florida solar panel</Heading> */}
    <Subheading>Produce clean energy and save on your bills</Subheading>
    <Description>Join more than 1000+ happy costumers</Description>


    <Content>
          {cards.map((card, i) => (
            <Card key={i} reversed={i % 2 === 1}>
              <Image imageSrc={card.imageSrc} />
              <Details>
                <Subtitle>{card.subtitle}</Subtitle>
                <Title>{card.title}</Title>
                <Description>{card.description}</Description>
                {/* <Link href={card.url}>See Event Details</Link> */}
              </Details>
            </Card>
          ))}
        </Content>

        <StatsHeadingContainer>
          {/* {subheadingStatsText && <Subheading>{subheadingStatsText}</Subheading>} */}
          <Heading>{headingStatsText}</Heading>
          {/* {descriptionStatsText && <Description>{descriptionStatsText}</Description>} */}
          <Container>
          {stats.map((stat, index) => (
            <Stat key={index}>
              <StatValue>{stat.value}</StatValue>
              <StatKey>{stat.key}</StatKey>
            </Stat>
          ))}
        </Container>
        </StatsHeadingContainer>



    </>
  );
}






// return (
//   // <AnimationRevealPage>
//   <>
//     {/* <Hero roundedHeaderButton={true} /> */}
// <Heading>Your Florida solar panel</Heading>

//     <Features
//       subheading={<Subheading>Features</Subheading>}
//       heading={
//         <>
//           We have Amazing <HighlightedText>Service.</HighlightedText>
//         </>
//       }
//     />
//     <MainFeature
//       subheading={<Subheading></Subheading>}
//       imageSrc={heroScreenshotImageSrc}
//       imageBorder={true}
//       imageDecoratorBlob={true}
//     />
//     <FeatureWithSteps
//       subheading={<Subheading></Subheading>}
//       heading={
//         <>
//           <HighlightedText>Our mission is to empower home and business owners  </HighlightedText>with the right to choose where their energy comes from.
//         </>
//       }
//       textOnLeft={false}
//       imageSrc={macHeroScreenshotImageSrc}
//       imageDecoratorBlob={true}
//       decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
//     />
//     {/* <MainFeature2
//       subheading={<Subheading>VALUES</Subheading>}
//       heading={
//         <>
//           We Always Abide by Our <HighlightedText>Principles.</HighlightedText>
//         </>
//       }
//       imageSrc={prototypeIllustrationImageSrc}
//       showDecoratorBlob={false}
//       features={[
//         {
//           Icon: MoneyIcon,
//           title: "Affordable",
//           description: "We promise to offer you the best rate we can - at par with the industry standard.",
//           iconContainerCss: tw`bg-green-300 text-green-800`
//         },
//         {
//           Icon: BriefcaseIcon,
//           title: "Professionalism",
//           description: "We assure you that our templates are designed and created by professional designers.",
//           iconContainerCss: tw`bg-red-300 text-red-800`
//         }
//       ]}
//     /> */}
//     <Testimonial
//       subheading={<Subheading>Testimonials</Subheading>}
//       heading={
//         <>
//           Our Clients <HighlightedText>Love Us.</HighlightedText>
//         </>
//       }
//       testimonials={[
//         {
//           stars: 5,
//           profileImageSrc:
//             "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
//           heading: "",
//           quote:
//             "I never would have imagined going solar. But it was time, and we love it! Every step of the process was properly done and highly reccomended. ",
//           customerName: "Carolyn, Hilaire",
//           customerTitle: ""
//         },
//         {
//           stars: 5,
//           profileImageSrc:
//             "https://images.unsplash.com/photo-1542740348-39501cd6e2b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
//           heading: "",
//           quote:
//             "Everything in the transition went smoothly and it has eliminated my electricity bill, also helping the environment. It's a win win situation",
//           customerName: "Glenn, Witter",
//           customerTitle: ""
//         },
//         {
//           stars: 5,
//           profileImageSrc:
//             "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
//           heading: "",
//           quote:
//             "Professional, very organized and handled any  issues immediately , customer service and management were great!",
//           customerName: "Eduardo, Mesidor",
//           customerTitle: ""
//         }
//       ]}
//     />

//     {/* <GetStarted/>
//     <Footer /> */}
//   {/* </AnimationRevealPage> */}
//   </>
// );
