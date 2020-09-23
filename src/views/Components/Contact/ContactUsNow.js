import React from 'react'
import { OrangeButton } from '../Elements/Buttons'


export default function ContactUsNow() {
    return (
        <div className="contact-us-now bg-white text-darkblue text-center">
            <h4 className="mx-auto">Contactez-nous dès maintenant</h4>
            <p className="block-subtitle">Notre équipe est disponible du lundi au vendredi de 9h à 18h30</p>
            <OrangeButton className="mx-auto">01 44 37 07 07</OrangeButton>
        </div>
    )
}
