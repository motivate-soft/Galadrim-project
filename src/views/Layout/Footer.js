import React from 'react'

import Logo from './../Components/Common/Logo';
import styled from 'styled-components';
import { MdSend } from 'react-icons/md';
import ShapesGroup from "../../assets/Images/home/group@3x.png"
import InstagramIcon from "../../assets/Icons/instagram.svg"
import LinkedinIcon from "../../assets/Icons/linkedin.svg"
import YoutubeIcon from "../../assets/Icons/youtube.svg"
import { Link } from 'react-router-dom';


const CustomInput = styled.input`
    font-size: 16px;
    font-family: "Roboto Medium";
    width: calc(100% - 50px);
    height: 50px;
    margin-bottom: 8px;
    padding-left: 16px;
    border: 2px solid #ebebeb;
    border-right: 0;
    border-radius: 4px 0 0 4px;
    transition: border ease 300ms;
    &:focus{
        border: 1px solid #00d5b4;
        border-right: 0;
    }
`

const InputAppend = styled.div`
    display: flex;
    background-color: #00d5b4;
    width: 50px;
    height: 50px;
    border-radius: 0 4px 4px 0;
    & {
        svg {
            width: 24px;
            height: 24px;
            fill: white;
            margin: auto;
        }
    }
`

export default function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row text-darkblue">
                    <div className="col-12 col-md-6 col-lg-3 col-xl-3">
                        <Logo />
                        <p className="footer-address">7 rue Sainte Lucie,<br />75 015 PARIS, FRANCE</p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 col-xl-2">
                        <h5>Nos expertises</h5>
                        <Link to="/Cloud" className="nav-link">Cloud</Link>
                        <Link to="/Modern-Workplace" className="nav-link">Modern Workplace</Link>
                        <Link to="/Security" className="nav-link">Sécurité</Link>
                        <Link to="/Managed-Services" className="nav-link">Services Managés</Link>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 col-xl-2">
                        <h5>Ressources</h5>
                        <Link to="/Who-We-Are" className="nav-link">Qui sommes-nous ?</Link>
                        <Link to="/Partnership" className="nav-link">Partenariats</Link>
                        <Link to="/Efisens-Lab" className="nav-link">Efisens Lab</Link>
                        <Link to="/Careers" className="nav-link">Carrières</Link>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 offset-xl-2 col-xl-3">
                        <h5>Contact</h5>
                        <Link to="/Contact" className="nav-link">Nous contacter</Link>
                        <p>01 44 37 07 07</p>
                        <div className="px-3 py-3 d-block">
                            <img src={InstagramIcon} alt="instagram icon" className="social-icon mr-3" />
                            <img src={LinkedinIcon} alt="linkedin icon" className="social-icon mr-3" />
                            <img src={YoutubeIcon} alt="youtube icon" className="social-icon" />
                        </div>
                    </div>
                </div>
                <div className="row newsletter-container">
                    <div className="col-12 col-md-6 col-lg-3 newsletter-form">
                        <h6>S’inscrire à notre newsletter</h6>
                        <div className="d-flex">
                            <CustomInput placeholder="votre email" />
                            <InputAppend ><MdSend /></InputAppend>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-5 newsletter-form-text">
                        <p>En renseignant votre adresse email, vous accepter de recevoir nos derniers articles de blog par courrier électronique et vous prenez connaissances de notre politique de protection des données personnelles. Vous pouvez vous désinscrire à tout moment à l'aide des liens de désinscription ou en nous contactant ici.</p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-end">
                        <img src={ShapesGroup} alt="shapes group" className="shapes-group" />
                    </div>
                </div>
            </div>
            <div className="footer-bar  bg-blue text-white">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-3 col-lg-2  my-4">© Efisens</div>
                        <div className="col-12 col-md-9 col-lg-8 text-white d-flex  my-4">
                            <span className="mr-4">Mentions légales</span>
                            <span>Protection des données personnelles</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
