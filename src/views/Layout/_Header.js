// import React, { useState, useEffect } from 'react'
// import { Link } from "react-router-dom";
// import styled from 'styled-components';

// import { FaAngleDown, FaLock } from 'react-icons/fa';
// import Cloud from '../../assets/Images/home/cloud.png'
// import Workplace from '../../assets/Images/home/modern-workplace.png'
// import Security from '../../assets/Images/home/security.png'
// import ServiceManager from '../../assets/Images/home/managed-service.svg'
// import { Navbar, Nav, Form, NavDropdown, Row } from 'react-bootstrap';
// import NavDropdownMenu from './NavDropdownMenu';
// import Logo from '../Components/Common/Logo';


// const Section = styled.div`
//     border-bottom: 1px solid rgb(238, 238, 238);
    
// `
// const NavbarContainer = styled.div`
//     max-width: 1440px;
//     margin-left: auto;
//     margin-right: auto;
//     .navbar {
//         padding: 0 !important;
//         .nav-link {
//             color: #001A5C !important;
//             padding: 1rem 0.5rem !important;
//         }
//         .nav-link:hover{
//             color: #2196F3!important;
//         }
//         @media screen and (min-width: 1440px){
//             .nav-link {
//                 padding: 1rem !important;
//             }
//         }
//         .dropdown-toggle::after {
//             display: none !important;
//         }
//         .dropdown-toggle {
//             svg {
//                 margin-left: 8px;
//             }
//         }
//         .dropdown-menu {
//             position: absolute;
//             top: 100%;
//             left: 12px;
//             border-radius: 8px;
//             background-color: #ffffff;
//             border: 1px solid #f2f2f2 !important;
//             box-shadow: 0 2px 4px 0 rgba(41, 41, 43, 0.05), 0 20px 40px 0 rgba(41, 41, 43, 0.05);
//             .dropdown-item{
//                 color: #001A5C !important; 
//             }
//         }
//     }
// `

// const DropdownArrow = styled.div`
//     position: absolute;
//     left: 121px;
//     top: -7px;
//     width: 12px;
//     height: 12px;
//     -webkit-transform: rotateZ(45deg);
//     -ms-transform: rotateZ(45deg);
//     transform: rotateZ(45deg);
//     border-left: 1px solid #f2f2f2 !important;
//     border-top: 1px solid #f2f2f2 !important;
//     background-color: #ffffff;
// `

// const DropdownRow = styled.div`
//     width: 540px;
//     display: flex;
//     flex-wrap: wrap;
//     padding: 14px 25px 0;
//     & .dropdown-item {
//         white-space: wrap !important;
//         opacity: .5;

//         transition: opacity ease .5s;
//     }
//     & .dropdown-item:hover {
//         opacity: 1;
//         text-decoration: none;
//         background-color: #ffffff;
//     }
// `

// export default function Header() {
//     const [indropdowntoggle, setIndropdowntoggle] = useState(false);
//     const [indropdown, setIndropdown] = useState(false);
//     const [mobilemode, setMobilemode] = useState(false);

//     useEffect(() => {
//         if (window.innerWidth >= 1200) {
//             setMobilemode(false);
//         } else {
//             setMobilemode(true);
//         }
//     }, [])

//     return (
//         <Section>
//             <NavbarContainer>
//                 <Navbar bg="white" expand="xl">
//                     <Navbar.Brand href="/"><Logo /></Navbar.Brand>
//                     <Navbar.Toggle aria-controls="top-nav" />
//                     <Navbar.Collapse id="top-nav">
//                         <Nav className="mr-auto">
//                             <Nav.Link href="/who-we-are">Qui sommes nous ?</Nav.Link>
//                             <NavDropdown
//                                 title={
//                                     <span>Nos expertises<FaAngleDown /></span>
//                                 }
//                                 id="top-nav-dropdown"
//                                 show={indropdown || indropdowntoggle}
//                                 onClick={() => setIndropdowntoggle(!indropdowntoggle)}
//                                 onMouseEnter={() => !mobilemode && setIndropdowntoggle(true)}
//                                 onMouseLeave={() => !mobilemode && setIndropdowntoggle(false)}>

//                                 <DropdownRow onMouseEnter={() => !mobilemode && setIndropdown(true)} onMouseLeave={() => !mobilemode && setIndropdown(false)}>
//                                     <DropdownArrow />
//                                     <NavDropdown.Item href="/expertise/cloud" className="col-12 col-md-6 p-0">
//                                         <NavDropdownMenu img={Cloud} title="Top-aligned media" text="des solutions cloud hybrides" />
//                                     </NavDropdown.Item>
//                                     <NavDropdown.Item href="/expertise/modern-workplace" className="col-12 col-md-6 p-0">
//                                         <NavDropdownMenu img={Workplace} title="Modern Workplace" text="Moderniser vos environnements de travail" />
//                                     </NavDropdown.Item>
//                                     <NavDropdown.Item href="/expertise/security" className="col-12 col-md-6 p-0">
//                                         <NavDropdownMenu img={Security} title="Sécurité" text="Protéger vos données, votre infrastructure et vos utilisateurs" />
//                                     </NavDropdown.Item>
//                                     <NavDropdown.Item href="/expertise/service-manager" className="col-12 col-md-6 p-0">
//                                         <NavDropdownMenu img={ServiceManager} title="Services Managés" text="Superviser et surveiller votre système IT" />
//                                     </NavDropdown.Item>
//                                 </DropdownRow>
//                             </NavDropdown>
//                             <Nav.Link href="/partnership">Nos partenariats</Nav.Link>
//                             <Nav.Link href="/shop">Efisens Clic&Shop</Nav.Link>
//                             <Nav.Link href="/laboratory">Efisens Lab</Nav.Link>
//                             <Nav.Link href="/career">Carrières</Nav.Link>
//                             <Nav.Link href="/contact">Nous contacter</Nav.Link>
//                         </Nav>
//                         <Form inline>
//                             <button className="btn text-white bg-orange d-flex justify-content-center align-items-center">
//                                 <FaLock className="mr-1" />Accès client</button>
//                         </Form>
//                     </Navbar.Collapse>
//                 </Navbar>
//             </NavbarContainer>
//         </Section>
//     )
// }
