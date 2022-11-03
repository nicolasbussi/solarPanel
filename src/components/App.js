import { Routes, Route } from 'react-router-dom';
import Home from '../routes/Home';
import AboutUs from '../routes/AboutUs';
import Pricing from '../routes/Pricing';
import Faqs from '../routes/Faqs';
import Layout from './Layout';
import GlobalStyles from '../styles/GlobalStyles';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="pricing" element={<Pricing />} />
          {/* <Route path="faqs" element={<Faqs />} /> */}
          <Route path="*" element={<p>Not found!</p>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
