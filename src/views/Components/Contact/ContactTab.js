import React, { useState } from "react";

import styled from "styled-components";
import BannerFormCard from './../Common/BannerFormCard';
import ContactForm from './ContactForm';
import ContactUsNow from "./ContactUsNow";
import { BaseButton } from "../Elements/Buttons";


const formData = {
    color: '#001a5c',
    formTitle: 'Intéressé par une ou plusieurs solutions ?',
    formSubtitle: 'Remplissez ce formulaire et notre équipe commerciale reviendra rapidement vers vous.',
    formDescription: 'Ces informations font l’objet d’un traitement informatisé par EFISENS, destiné à répondre et assurer le suivi de votre demande, et seront conservées durant le temps nécessaire pour y répondre. Conformément à la réglementation informatique et libertés, vous bénéficiez d’un droit d’accès et de rectification, de portabilité, d’effacement des informations vous concernant ou une limitation du traitement. Contactez-nous à l’adresse : conformite-RGPD@efisens.fr pour toutes demandes concernant vos données.'
}

const Tabs = styled.div`
    margin-top: 77px;
    font-family: "Gilroy-Bold";
    button:nth-child(1){
        border-radius: 8px 0 0 0;
    }
    button:nth-child(2){
        border-radius: 0 8px 0 0;
    }
    @media (max-width: 768px){
        margin-top: 50px;
    }
`;

const Tab = styled(BaseButton)`
    width: 50%;
    height: 53px;
    color: #ff4e41;
    box-sizing: border-box; 
    font-family: 'Gilroy-Bold';
    font-size: 13px;
    background-color: #ff4e41;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: ${props => (props.active ? "4px solid #ff4e41" : "4px solid transparent")};
    background-color: ${props => (props.active ? "rgba(255, 94, 77, 0.08)" : "rgba(255, 94, 77, 0.04);")};
`;

const Content = styled.div`
  ${props => (props.active ? "" : "display:none")}
`;


export default function ContactTab(props) {
    const [active, setActive] = useState(0);
    const handleClick = e => {
        const index = parseInt(e.target.id, 0);
        if (index !== active) {
            setActive(index);
        }
    };
    return (
        <div className="contact-tab">
            <Tabs>
                <Tab onClick={handleClick} active={active === 0} id={0}>
                    Se faire rappeler
                </Tab>
                <Tab onClick={handleClick} active={active === 1} id={1}>
                    Appeler maintenant
                </Tab>
            </Tabs>
            <Content active={active === 0}>
                <BannerFormCard
                    formTitle={formData.formTitle}
                    formSubtitle={formData.formSubtitle}
                    formDescription={formData.formDescription}
                    color={formData.color}
                    className="not-top-rounded">
                    <ContactForm />
                </BannerFormCard>
            </Content>
            <Content active={active === 1}>
                <ContactUsNow />
            </Content>
        </div>
    );
}


