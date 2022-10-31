import Hero from "components/hero/TwoColumnWithFeaturesAndTestimonial.js";

import tw from "twin.macro";
// import { SectionHeading } from "../../components/misc/Headings.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";



const Heading = tw(SectionHeading)`w-full`;

const AboutUs = () => {
  // const featuresQuality = ["10 years parts warranty", "Authorized dealer with top 10 brands in USA", "Industry-Leading , energy efficient products", "Products manufactured in America"];
  // const featuresService = ["20 years experience in customer service", "Free energy assessment/quotes", "24/7 - 365 days a year service line", "Over 25 licensed & trained technicians & installers"];
  // const featuresMission = ["Offering Eco-friendly products", "Reducing home energy costs", "Reducing home carbon footprint", "Creating helathy&clean enviroments for families"];


  return (
    <>
  <Heading>About us</Heading>
    <Hero>  </Hero>
    </>
  )
};

export default AboutUs;
