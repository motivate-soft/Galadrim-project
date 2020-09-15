import React from 'react';
import ContactFormCard from "./contact_form_card";

import { FaLock } from '../../../node_modules/react-icons/fa';
import RightBottomImage from '../../assets/formes/charts/cloud.svg';
import CenterBottomImage from '../../assets/formes/charts/modern-workplace.svg';
import LeftBottomImage from '../../assets/formes/charts/s-curit.svg';



export default function ContactBanner() {
    return (
        <>
            <div className="contact_banner">
                <img src={RightBottomImage} className={"banner0image"} alt=""/>
                <img src={CenterBottomImage} className={"banner1image"} alt=""/>
                <img src={LeftBottomImage} className={"banner2image"} alt=""/>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className={'title-area'}>
                                <h1 className="image_title">Contactez Efisens</h1>
                            </div>
                            <div className={'right-blue-bar-area'}>
                                <div className={'right-blue-bar'}/>
                            </div>
                            <div className="description">
                                <p>Notre équipe est disponible du lundi au vendredi de 9h à 18h30.</p>
                                <p>Déjà client ? Pour contacter notre support, veuillez vous connecter à votre espace client.</p>
                            </div>
                            <div className={'button-area'}>
                                <button className={'btn btn-custom'}>
                                    <FaLock/> Accès client
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <ContactFormCard/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}