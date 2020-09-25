import React, { useState, useEffect, useRef } from 'react';

import Logo from '../../Components/Common/Logo';
import { Link, useLocation } from "react-router-dom";
import { FaAngleDown, FaLock } from 'react-icons/fa';
import { IconButton } from '../../Components/Elements/Buttons';

import Cloud from '../../../assets/Images/home/cloud.svg'
import Workplace from '../../../assets/Images/home/modern-workplace.svg'
import Security from '../../../assets/Images/home/security.svg'
import ManagedService from '../../../assets/Images/home/managed-service.svg'


export default function TopNavbar(props) {
    const location = useLocation()
    const [dropdownhovered, setDropdownhovered] = useState(false)

    const navRef = useRef(null)
    const bgRef = useRef(null)

    useEffect(() => {
        const currentPath = location.pathname
        const baseUrl = currentPath.split('/')[1]
        if (baseUrl === 'efilab') {
            navRef.current.style.display = 'none'
        } else {
            navRef.current.style.display = 'flex'
        }
        console.log(dropdownhovered)
        if (dropdownhovered === true) {
            bgRef.current.classList.add("bg-hovered")
        } else {
            bgRef.current.classList.remove("bg-hovered")
        }
    }, [location, dropdownhovered, bgRef])

    return (
        <>
            <nav ref={navRef} className="navbar top-navbar">
                <div className="navbar-brand  mr-2"><Link className="" to="/"><Logo /></Link></div>
                <div className="navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/who-we-are">Qui sommes nous ?</Link>
                        </li>
                        <li className="nav-item nav-dropdown"
                            onMouseEnter={() => setDropdownhovered(true)}
                            onMouseLeave={() => setDropdownhovered(false)}>
                            <Link className="nav-link" to="/expertise/cloud">Nos expertises <FaAngleDown /></Link>
                            <div className="dropdown-content">
                                <div className="tail" />
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-lg-6">
                                            <Link to="/expertise/cloud">
                                                <div className="dropdown-item d-flex align-items-center">
                                                    <div>
                                                        <img className="align-self-start mr-3" src={Cloud} alt="Cloud" />
                                                    </div>
                                                    <div className="d-flex flex-column">
                                                        <h5 className="mt-0">Top-aligned media</h5>
                                                        <p>Adopter des solutions cloud hybrides</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-12 col-sm-12 col-lg-6">
                                            <Link to="/expertise/modern-workplace">
                                                <div className="dropdown-item d-flex align-items-center">
                                                    <div>
                                                        <img className="align-self-start mr-3" src={Workplace} alt="Workplace" />
                                                    </div>
                                                    <div className="d-flex flex-column">
                                                        <h5 className="mt-0">Modern Workplace</h5>
                                                        <p>Moderniser vos environnements de travail</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-12 col-sm-12 col-lg-6">
                                            <Link to="/expertise/security">
                                                <div className="dropdown-item d-flex align-items-center">
                                                    <div>
                                                        <img className="align-self-start mr-3" src={Security} alt="Security" />
                                                    </div>
                                                    <div className="d-flex flex-column">
                                                        <h5 className="mt-0">Sécurité</h5>
                                                        <p>Protéger vos données, votre infrastructure et vos utilisateurs</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-12 col-sm-12 col-lg-6">
                                            <Link to="/expertise/managed-services">
                                                <div className="dropdown-item d-flex align-items-center">
                                                    <div className="rounded">
                                                        <img className="align-self-start" src={ManagedService} alt="ManagedService" />
                                                    </div>
                                                    <div className="d-flex flex-column">
                                                        <h5 className="mt-0">Services Managés</h5>
                                                        <p>Superviser et surveiller votre système IT</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/partnership">Nos partenariats</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/clic-shop">Efisens Clic&Shop<br /><span>Notre boutique IT en ligne</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/efilab">Efisens Lab</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/career">Carrières</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Nous contacter</Link>
                        </li>
                    </ul>
                </div>
                <IconButton backgroundColor="#ff5e4d" color="#ffffff"><FaLock />Accès client</IconButton>
            </nav>
            <div ref={bgRef} id="overlay-background" className="overlay-background" />
        </ >
    );
}

