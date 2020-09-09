import React from 'react';

import Logo from '../components/logo';
import {Send} from "@material-ui/icons";
import EndImg from '../assets/home/images/group.png'

import { FaYoutube, FaLinkedinIn, FaInstagram } from '../../node_modules/react-icons/fa';

export default function Footer() {
    return(
      <footer>
          <div className="container">
              <div className="row" style={{'marginTop':'75px'}}>
                  <div className="col-lg-3 col-md-12">
                      <Logo/>
                      <p className="mt-3 text-blue" style={{'fontSize': '14px','fontFamily':'RobotoRegular'}}>
                          7 rue Sainte Lucie,<br/>
                          75 015 PARIS, FRANCE
                      </p>
                  </div>
                  <div className="col-lg-2 col-md-6">
                      <h5 className="footer-title">Nos expertises</h5>
                      <ul className="nav flex-column">
                          <li className="nav-item">
                              <a className="nav-link active" href="#">Cloud</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="#">Modern Workplace</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="#">Sécurité</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="#">Services Managés</a>
                          </li>
                      </ul>
                  </div>
                  <div className="col-lg-2 col-md-6">
                      <h5 className="footer-title">Resources</h5>
                      <ul className="nav flex-column">
                          <li className="nav-item">
                              <a className="nav-link active" href="#">Qui sommes-nous ?</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="#">Partenariats</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="#">Efisens Lab</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="#">Carrières</a>
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
                              <a className="nav-link active" href="#">Nous contacter</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="#">01 44 37 07 07</a>
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
              <div className="row mt-5" style={{'marginBottom':'75px'}}>
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
                      <h6 className="text-green roboto-regular">
                          En renseignant votre adresse email, vous accepter de recevoir nos derniers articles de blog par courrier électronique et vous prenez connaissances de notre politique de protection des données personnelles. Vous pouvez vous désinscrire à tout moment à l'aide des liens de désinscription ou en nous contactant ici.
                      </h6>
                  </div>
                  <div className="col-lg-3">

                  </div>
                  <div className="col-lg-1" style={{'display':'flex','alignItems':'flex-end'}}>
                      <img src={EndImg} alt=""/>
                  </div>
              </div>
          </div>
          <div className="container-fluid bg-primary text-white">
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