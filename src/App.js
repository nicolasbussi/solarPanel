import React, {Component} from 'react';
// import NavBar from './components/navbar';

// import PAGES from './constant/pages';
// import HomePage from './pages/home_page';
// import EnergySavingPage from './pages/energy_saving_page';
// import MaintainancePage from './pages/maintainance_page';
// import AirConditioningPage from './pages/air_conditioning_page';
// import AirFiltrationPage from './pages/air_filtration_page';
// import WaterFiltrationPage from './pages/water_filtration_page';
// import WaterHeatersPage from './pages/water_heaters_page';
// import InsulationAndDuctworkPage from './pages/insulation_and_ductwork_page';
// import ReferralProgramPage from './pages/referral_program_page';
// import CareersPage from './pages/careers_page';
// import BookOnlinePage from './pages/book_online_page';
// import BookServicePage from './pages/book_service_page';
// import FinancingPage from './pages/financing_page';

import Navbar from './components/navbar';
import Home from "./pages/home_page"
import AboutUsPage from "./pages/about_us_page"
import ServicesPage from "./pages/services_page"
import ContactPage from "./pages/contact_page"
import { Route, Routes } from "react-router-dom"
import FinancingPage from './pages/financing_page';


class App extends Component {
  
//   state   = {
//     page: PAGES.HOME
// }

// handleSelectPage = (selectedPage) => { 
//   const newPage = selectedPage
//   this.setState({page: newPage})
// };


  render() {

    // let selectedPage = this.state.page;

    // get the correct content page to display
    // let content = getContentToShow(selectedPage);
    
    
    return (
      <>
        {/* <NavBar onSelectPage= {this.handleSelectPage} selectedPage={this.state.page}/>
        <div className="container">
        <h1 style={{paddingLeft: '185px', color: '#BADA55', textAalign:'center', fontSize:'18px'}}>1-888-788-4822</h1>
        </div>
        {content} */}
        <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/financing" element={<FinancingPage />} />
        </Routes>
      </div>
      </>
    )
  }
}

export default App;


//  function getContentToShow(selectedPage){
//   let content;
//   if(selectedPage === PAGES.HOME){
//     content =  <HomePage/>

//   } else if(selectedPage === PAGES.ENERGY_SAVING){
//     content =  <EnergySavingPage/>

//   } else if(selectedPage === PAGES.MAINTAINANCE){
//     content =  <MaintainancePage/>

//   } else if(selectedPage === PAGES.AIR_CONDITIONING){
//     content =  <AirConditioningPage/>

//   } else if(selectedPage === PAGES.AIR_FILTRATION){
//     content =  <AirFiltrationPage/>

//   } else if(selectedPage === PAGES.WATER_FILTRATION){
//     content =  <WaterFiltrationPage/>

//   } else if(selectedPage === PAGES.WATER_HEATERS){
//     content =  <WaterHeatersPage/>

//   } else if(selectedPage === PAGES.INSULATION_AND_DUCTWORK){
//     content =  <InsulationAndDuctworkPage/>

//   } else if(selectedPage === PAGES.REFERRAL_PROGRAM){
//     content =  <ReferralProgramPage/>

//   } else if(selectedPage === PAGES.CAREERS){
//     content =  <CareersPage/>

//   } else if(selectedPage === PAGES.BOOK_ONLINE){
//     content =  <BookOnlinePage/>

//   } else if(selectedPage === PAGES.BOOK_SERVICE){
//     content =  <BookServicePage/>

//   } else if(selectedPage === PAGES.FINANCING){
//     content =  <FinancingPage/>

//   }

//   return content

//  }