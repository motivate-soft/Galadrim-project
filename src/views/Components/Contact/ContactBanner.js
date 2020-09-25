import React, { useState } from 'react'
import { FaLock } from 'react-icons/fa';
import { Underline } from '../Elements/Typography'
import { IconButton } from './../Elements/Buttons';

import LeftBottomImage from '../../../assets/Images/charts/cloud.svg';
import CenterBottomImage from '../../../assets/Images/charts/modern-workplace.svg';
import RightBottomImage from '../../../assets/Images/charts/security.svg';
import RoundedOrangeImage from '../../../assets/Shapes/rounded-angle/orange-rounded.svg';
import ContactTab from './ContactTab';
import ContactFormSuccess from './ContactFormSuccess';

const color = '#00175f'


export default function ContactBanner() {
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (value) => {
        setTimeout(() => {
            alert(value)
            setSubmitted(true)
        }, 1000)
    }

    return (
        <div className="section contact-banner">
            <div className="contact-banner-background-container">
                <img src={LeftBottomImage} alt="Left Background" className="bottom-left" />
                <img src={CenterBottomImage} alt="Center Background" className="bottom-center" />
                <img src={RightBottomImage} alt="Right Background" className="bottom-right" />
                <img src={RoundedOrangeImage} alt="Rounded Orange" className="orange-rounded" />
            </div>
            <div className="container">
                <div className="row text-darkblue">
                    <div className="col-12 col-md-6">
                        <h1 className="banner-title">Contactez Efisens</h1>
                        <Underline color={color} left={45} bottom={0} />
                        <h5>Notre équipe est disponible du lundi au vendredi de 9h à 18h30.<br /> Déjà client ? Pour contacter notre support, veuillez vous connecter à votre espace client.</h5>
                        <IconButton backgroundColor="#ff5e4d" color="#ffffff"><FaLock />Accès client</IconButton>
                    </div>
                    <div className="col-12 col-md-6">
                        {
                            submitted ? <ContactFormSuccess /> : <ContactTab onSubmit={handleSubmit} />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
