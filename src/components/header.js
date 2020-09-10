import React from 'react';
import Logo from './global/logo';

import { FaAngleDown, FaLock } from '../../node_modules/react-icons/fa';
import Cloud from '../assets/home/images/cloud.png';
import Workspace from '../assets/home/images/modern-workplace.png';
import Service from '../assets/home/images/s-curit.png';
import ServiceManage from '../assets/home/images/service-manag.png';
import {Link} from "react-router-dom";


export default function Header() {

	return (
		<div style={{

		}}>
            <nav className="navbar navbar-expand-lg" style={{'borderBottom': '1px solid #eee'}}>
                <Link className="" to="/"><Logo /></Link>

                <div className="collapse navbar-collapse ml-2" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            
                            <Link className="nav-link" to="/who_we_are">Qui sommes nous ?</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Nos expertises <FaAngleDown/></Link>
                            <div className="dropdown-content">
                                <div className="card card-body">
                                    <div className="tail"/>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <Link to="/expertise/cloud">
                                                <div className="media">
                                                    <img className="align-self-start mr-3" src={Cloud}
                                                         alt="Cloud"/>
                                                        <div className="media-body">
                                                            <h5 className="mt-0">Top-aligned media</h5>
                                                            <p>Adopter des solutions cloud hybrides</p>
                                                        </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-lg-6">
                                            <Link to="/expertise/modern_workplace">
                                                <div className="media">
                                                    <img className="align-self-start mr-3" src={Workspace}
                                                         alt="Cloud"/>
                                                    <div className="media-body">
                                                        <h5 className="mt-0">Modern Workplace</h5>
                                                        <p>Moderniser vos environnements de travail</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-lg-6">
                                            <Link to="/expertise/security">
                                                <div className="media">
                                                    <img className="align-self-start mr-3" src={Service}
                                                         alt="Cloud"/>
                                                    <div className="media-body">
                                                        <h5 className="mt-0">Sécurité</h5>
                                                        <p>Protéger vos données, votre infrastructure et vos utilisateurs</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-lg-6">
                                            <Link to="/expertise/service_manager">
                                                <div className="media">
                                                    <img className="align-self-start mr-3" src={ServiceManage}
                                                         alt="Cloud"/>
                                                    <div className="media-body">
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
                            <Link className="nav-link" to="/partner_ship">Nos partenariats</Link>
                        </li>
						<li className="nav-item">
                            <Link className="nav-link" to="/click_shopping">Efisens Clic&Shop</Link>
                        </li>
						<li className="nav-item">
                            <Link className="nav-link" to="/laboratory">Efisens Lab</Link>
                        </li>
						<li className="nav-item">
                            <Link className="nav-link" to="/career">Carrières</Link>
                        </li>
						<li className="nav-item">
                            <Link className="nav-link" to="/contact">Nous contacter</Link>
                        </li>

                    </ul>
                </div>
				<button className="btn btn-danger btn-custom">
                    <FaLock/> Accès client
				</button>
            </nav>
		</div >

	);
}

