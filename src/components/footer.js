import React from 'react';

import Logo from './global/logo';
import {Send} from "@material-ui/icons";
import EndImg from '../assets/home/images/group.png'

import { FaYoutube, FaLinkedinIn, FaInstagram } from '../../node_modules/react-icons/fa';
import {Link} from "react-router-dom";

export default function Footer() {
    return(
      <footer>
          <div className="container">
              <div className="row" style={{'marginTop':'75px'}}>
                  <div className="col-lg-3 col-md-12">
                      <Logo/>
                      <p className="mt-3 text-blue contact-info" style={{'fontSize': '14px'}}>
                          7 rue Sainte Lucie,<br/>
                          75 015 PARIS, FRANCE
                      </p>
                  </div>
                  <div className="col-lg-2 col-md-6">
                      <h5 className="footer-title">Nos expertises</h5>
                      <ul className="nav flex-column">
                          <li className="nav-item">
                              <Link className="nav-link active" to="#">Cloud</Link>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link" to="#">Modern Workplace</Link>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link" to="#">Sécurité</Link>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link" to="#">Services Managés</Link>
                          </li>
                      </ul>
                  </div>
                  <div className="col-lg-2 col-md-6">
                      <h5 className="footer-title">Resources</h5>
                      <ul className="nav flex-column">
                          <li className="nav-item">
                              <Link className="nav-link active" to="#">Qui sommes-nous ?</Link>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link" to="#">Partenariats</Link>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link" to="#">Efisens Lab</Link>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link" to="#">Carrières</Link>
                          </li>
                      </ul>
                  </div>
                  <div className="col-lg-2 col-md-6">

                  </div>
                  <div className="col-lg-3 col-md-6">
                      <h5 className="footer-title">
                          Contact
                      </h5>
                      <ul className="nav flex-column">
                          <li className="nav-item">
                              <Link className="nav-link active" to="#">Nous contacter</Link>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link" to="#">01 44 37 07 07</Link>
                          </li>
                          <li className="nav-item">
                              <button className="social-button" style={{'marginLeft':'1rem'}}>
                                  <FaLinkedinIn/>
                              </button>
                              <button className="social-button">
                                  <FaInstagram/>
                              </button>
                              <button className="social-button">
                                  <FaYoutube/>
                              </button>
                          </li>

                      </ul>
                  </div>
              </div>
              <div className="row mt-5 news-letter-footer" style={{'marginBottom':'75px'}}>
                  <div className="col-lg-3">
                      <h5 className="text-green text-uppercase">
                          S’inscrire à notre newsletter
                      </h5>
                      <div className="news-letter">
                          <form>
                              <div className="form-group position-relative mb-0">
                                  <input type="text" className="form-control news-letter-input" placeholder="Votre email"/>
                                  <button type="submit" className="submit news-letter-submit">
                                      <Send/>
                                  </button>
                              </div>
                          </form>
                      </div>
                  </div>
                  <div className="col-lg-5">
                      <h5 className="text-green text-uppercase">
                          &nbsp;
                      </h5>
                      <h6 className="text-green ">
                          En renseignant votre adresse email, vous accepter de recevoir nos derniers articles de blog par courrier électronique et vous prenez connaissances de notre politique de protection des données personnelles. Vous pouvez vous désinscrire à tout moment à l'aide des liens de désinscription ou en nous contactant ici.
                      </h6>
                  </div>
                  <div className="col-lg-3"/>
                  <div className="col-lg-1" style={{'display':'flex','alignItems':'flex-end'}}>
                      <img src={EndImg} alt=""/>
                  </div>
              </div>
          </div>
          <div className="container-fluid bg-primary text-white footer-bar">
              <div className="row">
                  <div className="container">
                      <div className="row" style={{'paddingTop':'24px', 'paddingBottom':'24px' }}>
                          <div className="col-lg-2">
                              © Efisens
                          </div>

                          <div className="col-lg-8">
                              <span>
                                  Mentions légales
                              </span>
                              <span style={{'marginLeft':'20px'}}>
                                  Protection des données personnelles
                              </span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </footer>
    );
}