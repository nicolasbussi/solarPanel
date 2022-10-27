import { Outlet } from 'react-router-dom';
import Header from './Header';
import MiniCenteredFooter from "../components/footers/MiniCenteredFooter.js";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="content">
        <Outlet />
      </div>
      <MiniCenteredFooter>  </MiniCenteredFooter> 
    </div>
  );
};

export default Layout;
