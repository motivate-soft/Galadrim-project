import React from 'react';
import Footer from "../components/footer";
import FullScreenNav from "../components/global/full_skin";
import Header from "../components/header";
import ExpertiseCloudBanner from "../components/expertise/cloud_banner";
import OurExpertise from "../components/expertise/our_expertise";
import OurApproach from "../components/expertise/our_approach";
import OurTechnique from "../components/expertise/our_technique";
import Resource from "../components/expertise/resource";
import OtherExpertise from "../components/expertise/other_expertise";
import CloudContactUs from "../components/expertise/cloud_contact_us";
import BannerLogoImage from '../assets/expertise/service-manager/services-manag-s.svg';
import BannerLogoMobileImage from '../assets/expertise/service-manager/services-manag-s.svg';
import BannerTitleImage from '../assets/expertise/service-manager/service-manag-white.svg'
import BannerImage0 from "../assets/expertise/service-manager/service-manag_3.svg";
import BannerImage1 from "../assets/expertise/service-manager/service-manag_2.svg";
import BannerImage2 from "../assets/expertise/service-manager/service-manag.svg";
import OptimizationImage from "../assets/expertise/service-manager/gestion.svg";
import AdaptableImage from "../assets/expertise/service-manager/maintenance.svg";
import ScalabilityImage from "../assets/expertise/service-manager/outils.svg";

const theme = {
    mainColor: '#ff5e4d',
    secondaryColor: '#001a5c',
    banner: {
        logo: BannerLogoImage,
        logoMobile: BannerLogoMobileImage,
        titleImage: BannerTitleImage,
        titleFirst: "Services",
        titleSecond: "Managés",
        titleFontSize: '53px',
        bannerContent: bannerContent(),
        bannerImage0: BannerImage0,
        bannerImage1: BannerImage1,
        bannerImage2: BannerImage2,
        formCard: {
            title: "Intéressé par nos Services Managés ?",
            subtitle: "Remplissez ce formulaire et notre équipe commerciale reviendra rapidement vers vous.",
            buttonText: "Envoyer le formulaire",
            description: " Ces informations font l’objet d’un traitement informatisé par EFISENS, destiné à répondre et assurer le suivi de votre demande, et seront conservées durant le temps nécessaire pour y répondre. Conformément à la réglementation informatique et libertés, vous bénéficiez d’un droit d’accès et de rectification, de portabilité, d’effacement des informations vous concernant ou une limitation du traitement. Contactez-nous à l’adresse : conformite-RGPD@efisens.fr pour toutes demandes concernant vos données.",
            formFields: [
                {
                    labelText: "Nom",
                    name: "Name",
                    classes: "form-group col-md-6",
                    id: "name",
                    type: "text",
                    placeholder: "Nom",
                },
                {
                    labelText: "Prénom",
                    name: "password",
                    classes: "form-group col-md-6",
                    id: "password",
                    type: "password",
                    placeholder: "Dupont",
                },
                {
                    labelText: "Email professionnel",
                    name: "email",
                    classes: "form-group col-md-12",
                    id: "email",
                    type: "email",
                    placeholder: "jean.dupont@mail.com",
                },
                {
                    labelText: "Numéro de téléphone",
                    name: "phone",
                    classes: "form-group col-md-12",
                    id: "phone",
                    type: "text",
                    placeholder: "06 25 22 22 22"
                },
                {
                    labelText: "Nom de l'entreprise",
                    name: "company",
                    classes: "form-group col-md-12",
                    id: "company",
                    type: "text",
                    placeholder: "Entreprise"
                },
            ]
        },
    },
    ourExpertise: {
        title: "Notre expertise",
        cards: [
            {
                id : '1',
                img: {
                    url : OptimizationImage,
                    alt : 'OptimizationImage'
                },
                title: 'Management',
                titleWidth: '348px',
                subtitle : 'Administrer et effectuer de la surveillance de remédiation pour être proactif au quotidien.',
                content : Content1()
            },
            {
                id : '2',
                img: {
                    url : AdaptableImage,
                    alt : 'AdaptableImage'
                },
                titleWidth: '348px',
                title: 'Maintenance',
                subtitle : 'Vous accompagner sur les problématiques du quotidien de vos infrastructures et de vos users.',
                content : Content2()
            },
            {
                id : '3',
                img: {
                    url : ScalabilityImage,
                    alt : 'ScalabilityImage'
                },
                title: 'Outils',
                titleWidth: '348px',
                subtitle : 'Superviser votre système IT. Équiper des meilleurs outils pour superviser de façon complète votre SI, au quotidien.',
                content : Content3()
            }
        ]
    }

};


function Content1() {
    return (
        <>
            <li>Supervision et optimisation des coût d'exploitation d'une infrastructure</li>
            <li>Audit de performance Infrastructure</li>
            <li>Supervision proactive de vos infrastructures</li>
            <li>Préconisations de transition vers le cloud</li>
        </>
    );
}

function Content2() {
    return (
        <>
            <li>Refonte d'une cartographie applicative cloud ready</li>
            <li>Modernisation des couches OS et Firmware</li>
            <li>Audit et optimisation du réseau</li>
        </>
    );
}

function Content3() {
    return (
        <>
            <li>Transformer une infrastructure vers des solutions PaaS (Platform as a Service)</li>
            <li>Conteneurisation</li>
            <li>Modernisation complète du système d'information</li>
            <li>Console de management et administration mutli-cloud</li>
        </>
    );
}


function bannerContent() {
    return (
        <>
            <p>
                Vous accompagner au quotidien et et veiller au bon fonctionnement et évolutivité de votre IT
                Manager votre SI de manière totalement différente et gagner en efficacité comme jamais auparavant.
            </p>
            <p>
                Vous accompagner au quotidien et et veiller au bon fonctionnement et évolutivité de votre IT
                Manager votre SI de manière totalement différente et gagner en efficacité comme jamais auparavant.
            </p>
            <h5>
                Vous accompagner au quotidien et et veiller au bon fonctionnement et évolutivité de votre IT
            </h5>
        </>
    );
}

export default function ExpertiseServiceManager() {
    return (
      <>
          <FullScreenNav/>
          <Header/>
          <ExpertiseCloudBanner theme={theme}/>
          <div className="spacer"/>
          <OurExpertise theme={theme}/>
          <OurApproach theme={theme}/>
          <OurTechnique theme={theme}/>
          <Resource theme={theme}/>
          <OtherExpertise theme={theme}/>
          <CloudContactUs theme={theme}/>
          <Footer/>
      </>
    );
}