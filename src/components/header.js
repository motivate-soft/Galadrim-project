import React from 'react';
import Logo from './global/logo';

import { FaAngleDown, FaLock } from '../../node_modules/react-icons/fa';
import Cloud from '../assets/home/images/cloud.png';
import Workspace from '../assets/home/images/modern-workplace.png';
import Service from '../assets/home/images/s-curit.png';
import ServiceManage from '../assets/home/images/service-manag.png';


export default function Header() {

	return (
		<div style={{

		}}>
            <nav className="navbar navbar-expand-lg" style={{'borderBottom': '1px solid #eee'}}>
                <a className="" href="/"><Logo /></a>

                <div className="collapse navbar-collapse ml-2" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/who_we_are">Qui sommes nous ?</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Nos expertises <FaAngleDown/></a>
                            <div className="dropdown-content">
                                <div className="card card-body">
                                    <div className="tail"/>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <a href="/expertise/cloud">
                                                <div className="media">
                                                    <img className="align-self-start mr-3" src={Cloud}
                                                         alt="Cloud"/>
                                                        <div className="media-body">
                                                            <h5 className="mt-0">Top-aligned media</h5>
                                                            <p>Adopter des solutions cloud hybrides</p>
                                                        </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-lg-6">
                                            <a href="/expertise/modern_workplace">
                                                <div className="media">
                                                    <img className="align-self-start mr-3" src={Workspace}
                                                         alt="Cloud"/>
                                                    <div className="media-body">
                                                        <h5 className="mt-0">Modern Workplace</h5>
                                                        <p>Moderniser vos environnements de travail</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-lg-6">
                                            <a href="/expertise/security">
                                                <div className="media">
                                                    <img className="align-self-start mr-3" src={Service}
                                                         alt="Cloud"/>
                                                    <div className="media-body">
                                                        <h5 className="mt-0">Sécurité</h5>
                                                        <p>Protéger vos données, votre infrastructure et vos utilisateurs</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-lg-6">
                                            <a href="/expertise/service_manager">
                                                <div className="media">
                                                    <img className="align-self-start mr-3" src={ServiceManage}
                                                         alt="Cloud"/>
                                                    <div className="media-body">
                                                        <h5 className="mt-0">Services Managés</h5>
                                                        <p>Superviser et surveiller votre système IT</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/partner_ship">Nos partenariats</a>
                        </li>
						<li className="nav-item">
                            <a className="nav-link" href="/click_shopping">Efisens Clic&Shop</a>
                        </li>
						<li className="nav-item">
                            <a className="nav-link" href="/laboratory">Efisens Lab</a>
                        </li>
						<li className="nav-item">
                            <a className="nav-link" href="/career">Carrières</a>
                        </li>
						<li className="nav-item">
                            <a className="nav-link" href="/contact">Nous contacter</a>
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

