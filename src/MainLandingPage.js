import React, {useEffect } from "react";
import { components } from "ComponentRenderer.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, Content2Xl} from "components/misc/Layouts";
import BackgroundAsImageWithCenteredContentHero from "components/hero/BackgroundAsImageWithCenteredContent.js";
import TwoColContactUsFullForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";
import ThreeColSimpleFeatures from "components/features/ThreeColSimple.js";
import WithStatsAndImage2Features from "components/features/TwoColSingleFeatureWithStats2.js";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomizeIconImage from "images/customize-icon.svg";


export default ({
  threeCards  = [
    {
      imageSrc: ShieldIconImage,
      title: "Zero Dollars Down",
      description: "",
      url: "https://timerse.com"
    },
    {
      imageSrc: SupportIconImage,
      title: "No Payments Until Next Year",
      description: "",
      url: "https://google.com"
    },
    {
      imageSrc: CustomizeIconImage,
      title: "Approval Based On Home Equity",
      description: "",
      url: "https://reddit.com"
    }],
  fiveCards = [
    {
      imageSrc: ShieldIconImage,
      title: "Zero Dollars Down",
      description: "",
      url: "https://timerse.com"
    },
    {
      imageSrc: SupportIconImage,
      title: "No Payments Until Next Year",
      description: "",
      url: "https://google.com"
    },
    {
      imageSrc: CustomizeIconImage,
      title: "Approval Based On Home Equity",
      description: "",
      url: "https://reddit.com"
    },
    {
      imageSrc: CustomizeIconImage,
      title: "No Minimum Credit Score Required",
      description: "",
      url: "https://reddit.com"
    },
    {
      imageSrc: CustomizeIconImage,
      title: "Get Qualified in Minutes",
      description: "",
      url: "https://reddit.com"
    }
  ],
  features = null,
  landingPages = components.landingPages,
  innerPages = components.innerPages,
  blocks = components.blocks,
  heading = "Free Modern React Templates for every need.",
  description = "Easily customizable modern React UI Templates and Components built using TailwindCSS which are also lightweight and simple to setup. All components are modular and fully responsive for great mobile experience as well as big desktop screens.  Brand Colors are also fully customizable. Free for personal as well as commercial use."
}) => {
  /*
   * Using gtag like this because we only want to use Google Analytics when Main Landing Page is rendered
   * Remove this part and the the gtag script inside public/index.html if you dont need google analytics
   */
  useEffect(() => {
    window.gtag("js", new Date());
    window.gtag("config", "UA-45799926-9");
  }, [])

  return (
    <AnimationRevealPage disabled>
      <Container tw="bg-gray-100 -mx-8 -mt-8 pt-8 px-8">
        {/* <Content2Xl> */}

          <BackgroundAsImageWithCenteredContentHero></BackgroundAsImageWithCenteredContentHero>
          <TwoColContactUsFullForm></TwoColContactUsFullForm>
          <ThreeColSimpleFeatures cards={fiveCards}/>
          <WithStatsAndImage2Features>  </WithStatsAndImage2Features>
          <ThreeColSimpleFeatures cards={threeCards}/>
         

        {/* </Content2Xl> */}
      </Container>
    </AnimationRevealPage>
  );
};
