import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-logo">
        <img alt="logo" src="https://static.wixstatic.com/media/1f9fd6_622d9c1d6c1b468eb7e354a105b1882c~mv2.png/v1/crop/x_0,y_316,w_1320,h_419/fill/w_284,h_90,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1f9fd6_622d9c1d6c1b468eb7e354a105b1882c~mv2.png"></img>
      </Link>
      <ul>
        <CustomLink to="/about-us">About Us</CustomLink>
        <CustomLink to="/services">Services</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
        <CustomLink to="/financing">Financing</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

// import { Link, useMatch, useResolvedPath } from "react-router-dom"
// import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown'
// import PAGES from '../constant/pages';

// export default function Navbar() {
//   return (
// //     <nav className="nav">
// //       <Link to="/" className="site-title">
// //         <img alt="logo" src="https://static.wixstatic.com/media/1f9fd6_622d9c1d6c1b468eb7e354a105b1882c~mv2.png/v1/crop/x_0,y_316,w_1320,h_419/fill/w_284,h_90,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1f9fd6_622d9c1d6c1b468eb7e354a105b1882c~mv2.png"></img>
// //       </Link>
// //       <ul>
// //       <li className="nav-item dropdown">
// //           <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
// //             Dropdown link
// //           </a>
// //           <ul className="dropdown-menu">
// //             {/* <li><a className="dropdown-item" href="/">Action</a></li> */}
// //             <li><CustomLink to="/pricing">Pricing</CustomLink></li>
// //             <li><a className="dropdown-item" href="/">Another action</a></li>
// //             <li><a className="dropdown-item" href="/">Something else here</a></li>
// //           </ul>
// //         </li>
// //         {/* <CustomLink to="/pricing">Pricing</CustomLink> */}
// //         {/* <CustomLink to="/about">About</CustomLink> */}
// //       </ul>
// //     </nav>
// //   )

//             <Nav className="nav" style={{paddingLeft: '300px'}} variant="pills" onSelect={this.props.handleSelectPage}>
                 
//                 <Nav.Item>
//                     {/* <Nav.Link onClick={()=>this.props.onSelectPage(PAGES.HOME)} >
//                         <img alt="logo" src="https://static.wixstatic.com/media/1f9fd6_622d9c1d6c1b468eb7e354a105b1882c~mv2.png/v1/crop/x_0,y_316,w_1320,h_419/fill/w_284,h_90,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1f9fd6_622d9c1d6c1b468eb7e354a105b1882c~mv2.png"></img>
//                     </Nav.Link> */}
//                            <Link to="/" className="site-title">
//          <img alt="logo" src="https://static.wixstatic.com/media/1f9fd6_622d9c1d6c1b468eb7e354a105b1882c~mv2.png/v1/crop/x_0,y_316,w_1320,h_419/fill/w_284,h_90,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1f9fd6_622d9c1d6c1b468eb7e354a105b1882c~mv2.png"></img>
//        </Link>
//                 </Nav.Item>
        
//                 <NavDropdown className="" title="About Us" id="nav-dropdown-about-us">
//                     <NavDropdown.Item className="" onClick={()=>this.props.onSelectPage(PAGES.ENERGY_SAVING)}>Energy Saving</NavDropdown.Item>
//                     <NavDropdown.Item onClick={()=>this.props.onSelectPage(PAGES.MAINTAINANCE)}>Maintainance</NavDropdown.Item>
//                 </NavDropdown>
// {/*             
//                 <NavDropdown title="Services" id="nav-dropdown-services">
//                     <NavDropdown.Item onClick={()=>this.props.onSelectPage(PAGES.AIR_CONDITIONING)}>Air Conditioning</NavDropdown.Item>
//                     <NavDropdown.Item onClick={()=>this.props.onSelectPage(PAGES.AIR_FILTRATION)}>Air Filtration</NavDropdown.Item>
//                     <NavDropdown.Item onClick={()=>this.props.onSelectPage(PAGES.WATER_FILTRATION)}>Water Filtration</NavDropdown.Item>
//                     <NavDropdown.Item onClick={()=>this.props.onSelectPage(PAGES.WATER_HEATERS)}>Water Heaters</NavDropdown.Item>
//                     <NavDropdown.Item onClick={()=>this.props.onSelectPage(PAGES.INSULATION_AND_DUCTWORK)}>Insulation & Ductwork</NavDropdown.Item>
//                 </NavDropdown>
        
//                 <NavDropdown title="Contact" id="nav-dropdown-contact">
//                     <NavDropdown.Item onClick={()=>this.props.onSelectPage(PAGES.REFERRAL_PROGRAM)}>Referral Program</NavDropdown.Item>
//                     <NavDropdown.Item onClick={()=>this.props.onSelectPage(PAGES.CAREERS)}>Careers</NavDropdown.Item>
//                     <NavDropdown.Item onClick={()=>this.props.onSelectPage(PAGES.BOOK_ONLINE)}>Book Online</NavDropdown.Item>
//                     <NavDropdown.Item onClick={()=>this.props.onSelectPage(PAGES.BOOK_SERVICE)}>Book Service</NavDropdown.Item>
//                 </NavDropdown> */}

//                 <Nav.Item>
//                     <Nav.Link onClick={()=>this.props.onSelectPage(PAGES.FINANCING)}>Financing</Nav.Link>
//                 </Nav.Item>
//             </Nav>
//         );
    
  
// }

// // function CustomLink({ to, children, ...props }) {
// //   const resolvedPath = useResolvedPath(to)
// //   const isActive = useMatch({ path: resolvedPath.pathname, end: true })

// //   return (
// //     <li className={isActive ? "active" : ""}>
// //       <Link to={to} {...props}>
// //         {children}
// //       </Link>
// //     </li>
// //   )
// // }
// // import React, {Component} from 'react';
// // import Nav from 'react-bootstrap/Nav';
// // import NavDropdown from 'react-bootstrap/NavDropdown';
// // import PAGES from '../constant/pages';
// // import styles from '../mystyle.module.css'; 

// // class NavBar extends Component {

// //     render() {    

// // //         let className = 'active';
// // //   if (this.props.isActive) {
// // //     className += ' menu-active';
// // //   }


// //         return (
// //             <Nav style={{paddingLeft: '300px'}} variant="pills" onSelect={this.props.handleSelectPage}>
                 
// //                 <Nav.Item>
// //                     <Nav.Link onClick={()=>this.props.onSelectPage(PAGES.HOME)} >
// //                         <img alt="logo" src="https://static.wixstatic.com/media/1f9fd6_622d9c1d6c1b468eb7e354a105b1882c~mv2.png/v1/crop/x_0,y_316,w_1320,h_419/fill/w_284,h_90,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1f9fd6_622d9c1d6c1b468eb7e354a105b1882c~mv2.png"></img>
// //                     </Nav.Link>
// //                 </Nav.Item>
        
// //                 <NavDropdown className={styles.bigRed} title="About Us" id="nav-dropdown-about-us">
// //                     <NavDropdown.Item className={styles.bigRed} onClick={()=>this.props.onSelectPage(PAGES.ENERGY_SAVING)}>Energy Saving</NavDropdown.Item>
// //                     <NavDropdown.Item onClick={()=>this.props.onSelectPage(PAGES.MAINTAINANCE)}>Maintainance</NavDropdown.Item>
// //                 </NavDropdown>
            
// //                 <NavDropdown title="Services" id="nav-dropdown-services">
// //                     <NavDropdown.Item onClick={()=>this.props.onSelectPage(PAGES.AIR_CONDITIONING)}>Air Conditioning</NavDropdown.Item>
// //                     <NavDropdown.Item onClick={()=>this.props.onSelectPage(PAGES.AIR_FILTRATION)}>Air Filtration</NavDropdown.Item>
// //                     <NavDropdown.Item onClick={()=>this.props.onSelectPage(PAGES.WATER_FILTRATION)}>Water Filtration</NavDropdown.Item>
// //                     <NavDropdown.Item onClick={()=>this.props.onSelectPage(PAGES.WATER_HEATERS)}>Water Heaters</NavDropdown.Item>
// //                     <NavDropdown.Item onClick={()=>this.props.onSelectPage(PAGES.INSULATION_AND_DUCTWORK)}>Insulation & Ductwork</NavDropdown.Item>
// //                 </NavDropdown>
        
// //                 <NavDropdown title="Contact" id="nav-dropdown-contact">
// //                     <NavDropdown.Item onClick={()=>this.props.onSelectPage(PAGES.REFERRAL_PROGRAM)}>Referral Program</NavDropdown.Item>
// //                     <NavDropdown.Item onClick={()=>this.props.onSelectPage(PAGES.CAREERS)}>Careers</NavDropdown.Item>
// //                     <NavDropdown.Item onClick={()=>this.props.onSelectPage(PAGES.BOOK_ONLINE)}>Book Online</NavDropdown.Item>
// //                     <NavDropdown.Item onClick={()=>this.props.onSelectPage(PAGES.BOOK_SERVICE)}>Book Service</NavDropdown.Item>
// //                 </NavDropdown>

// //                 <Nav.Item>
// //                     <Nav.Link onClick={()=>this.props.onSelectPage(PAGES.FINANCING)}>Financing</Nav.Link>
// //                 </Nav.Item>
// //             </Nav>
// //         );
// //     }
// //   }



// // export default NavBar;