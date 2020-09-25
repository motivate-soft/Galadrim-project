import React from 'react'
import ContactBanner from '../Components/Contact/ContactBanner'
import EfisensLab from '../Components/Common/EfisensLab'
import ContactTrustUs from './../Components/Contact/ContactTrustUs';
import ContactFormSuccess from '../Components/Contact/ContactFormSuccess';

export default function Contact() {
    return (
        <>
            <ContactBanner />
            <ContactTrustUs />
            <EfisensLab />
        </>
    )
}
