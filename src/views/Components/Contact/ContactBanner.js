import React from 'react'
import { FaLock } from 'react-icons/fa';
import { Title, Underline } from '../Elements/Typography'
import { IconButton } from './../Elements/Buttons';
import BannerFormCard from '../Common/BannerFormCard';
import ContactForm from './ContactForm';

import LeftBottomImage from '../../../assets/Images/charts/cloud.svg';
import CenterBottomImage from '../../../assets/Images/charts/modern-workplace.svg';
import RightBottomImage from '../../../assets/Images/charts/security.svg';
import OrangeRoundedImage from '../../../assets/Shapes/rounded-angle/orange-rounded.svg';
import styled from 'styled-components';
import ContactTab from './ContactTab';

const color = '#00175f'


export default function ContactBanner() {
    return (
        <div className="section contact-banner">
            <img src={LeftBottomImage} alt="Left Background" className="bottom-left" />
            <img src={CenterBottomImage} alt="Center Background" className="bottom-center" />
            <img src={RightBottomImage} alt="Right Background" className="bottom-right" />
            <div className="container">
                <div className="row text-darkblue">
                    <div className="col-12 col-md-6">
                        <h1 className="banner-title">Contactez Efisens</h1>
                        <Underline color={color} left={45} bottom={0} />
                        <h5>Notre équipe est disponible du lundi au vendredi de 9h à 18h30.<br /> Déjà client ? Pour contacter notre support, veuillez vous connecter à votre espace client.</h5>
                        <IconButton backgroundColor="#ff5e4d" color="#ffffff"><FaLock />Accès client</IconButton>
                    </div>
                    <div className="col-12 col-md-6">
                        <ContactTab />
                    </div>
                </div>
            </div>
        </div>
    )
}
