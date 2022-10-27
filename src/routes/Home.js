import MiniCenteredFooter from "../components/footers/MiniCenteredFooter.js";
import WithStatsAndImage2Features from "../components/features/TwoColSingleFeatureWithStats2.js";
import Features from "../components/features/ThreeColSimple.js";
import SaaSProductLandingPage from "../demos/SaaSProductLandingPage.js";
const Home = () => {
  const featuresQuality = ["10 years parts warranty", "Authorized dealer with top 10 brands in USA", "Industry-Leading , energy efficient products", "Products manufactured in America"];
  const featuresService = ["20 years experience in customer service", "Free energy assessment/quotes", "24/7 - 365 days a year service line", "Over 25 licensed & trained technicians & installers"];
  const featuresMission = ["Offering Eco-friendly products", "Reducing home energy costs", "Reducing home carbon footprint", "Creating helathy&clean enviroments for families"];


  return (
    <>
    <SaaSProductLandingPage>  </SaaSProductLandingPage>
      {/* <WithStatsAndImage2Features>  </WithStatsAndImage2Features>
      <Features
        cards={[
          {
            title: "QUALITY",
            features:featuresQuality
          },
          {
            title: "SERVICE",
            features:featuresService
          },
          {
            title: "MISSION",
            features:featuresMission
          },
        ]}
      />
      <MiniCenteredFooter>  </MiniCenteredFooter> */}
    </>
  )
};

export default Home;
