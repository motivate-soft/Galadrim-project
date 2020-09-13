import React from 'react';
import Footer from "../components/footer";
import FullScreenNav from "../components/global/full_screen_nav";
import Header from "../components/header";
import ExpertiseCloudBanner from "../components/expertise/cloud_banner";
import OurExpertise from "../components/expertise/our_expertise";
import OurApproach from "../components/expertise/our_approach";
import OurTechnique from "../components/expertise/our_technique";
import Resource from "../components/expertise/resource";
import OtherExpertise from "../components/expertise/other_expertise";
import CloudContactUs from "../components/expertise/cloud_contact_us";
import BannerLogoImage from "../assets/expertise/modern-workplace/modern-workplace_4.svg";
import BannerLogoMobileImage from "../assets/expertise/modern-workplace/modern-workplace_4.svg";
import BannerTitleImage from "../assets/expertise/modern-workplace/modern-workplace-white.svg";
import BannerImage0 from "../assets/expertise/modern-workplace/modern-workplace_3.svg";
import BannerImage1 from "../assets/expertise/modern-workplace/modern-workplace_2.svg";
import BannerImage2 from "../assets/expertise/modern-workplace/modern-workplace.svg";
import OptimizationImage from "../assets/expertise/modern-workplace/productivit.svg";
import AdaptableImage from "../assets/expertise/modern-workplace/mobilit.svg";
import ScalabilityImage from "../assets/expertise/modern-workplace/collaboration.svg";
import ourApproachImage1 from "../assets/home/images/article.jpg";
import ourApproachImage2 from '../assets/home/images/article.jpg';
import ourApproachBottomImage from "../assets/expertise/modern-workplace/bleu-mini.svg";

import MicrosoftImage from '../assets/expertise/cloud1/ld-0005692867-1.png';
import AzureImage from '../assets/expertise/cloud1/1200-px-microsoft-azure-logo-svg.png';
import NutanixImage from '../assets/expertise/cloud1/nutanix.png';
import AWSImage from '../assets/expertise/cloud1/1200-px-amazon-web-services-logo-svg.png';
import VMWareImage from '../assets/expertise/cloud1/v-mware-logo.png';
import EquinixImage from '../assets/expertise/cloud1/equinix-logo-1200-x-627.png';

const theme = {
    mainColor: '#001a5c',
    secondaryColor: '#ff5e4d',
    banner: {
        logo: BannerLogoImage,
        logoMobile: BannerLogoMobileImage,
        titleImage: BannerTitleImage,
        titleFirst: "Modern",
        titleSecond: "Workplace",
        titleFontSize: '53px',
        bannerContent: bannerContent(),
        bannerImage0: BannerImage0,
        bannerImage1: BannerImage1,
        bannerImage2: BannerImage2,
        formCard: {
            title: "Intéressé par notre solution Modern Worplace ?",
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
                title: 'Productivité',
                titleWidth: '348px',
                subtitle : 'Optimiser l\'expérience de vos collaborateurs au quotidien tout en protégeant vos données personnelles ',
                content : Content1()
            },
            {
                id : '2',
                img: {
                    url : AdaptableImage,
                    alt : 'AdaptableImage'
                },
                titleWidth: '348px',
                title: 'Mobilité',
                subtitle : 'Vous permettre d’avoir le même espace de travail quelque que soit le lieu ou le device que vous utilisez.',
                content : Content2()
            },
            {
                id : '3',
                img: {
                    url : ScalabilityImage,
                    alt : 'ScalabilityImage'
                },
                title: 'Collaboration',
                titleWidth: '348px',
                subtitle : 'Faciliter les synergies et la collaboration entre les équipes',
                content : Content3()
            }
        ]
    },
    ourApproach: {
        title: "Notre démarche",
        subtitle: "Mettre en place des solutions collaboratives interconnectées pour vous permettre une gestion fluide des équipes. Proposer une expérience de travail identique quelque soit le lieu ou le device que vous utilisez.",
        cards: {
            card1: {
                title: "Conception & architecture ",
                titleMaxWidth: "200px",
                description: "Analyse et audit de l'existant (usages, matériels, nouveaux besoins). Préconisations de nouvelles solutions."
            },
            card2: {
                title: "Implémentation configuration",
                titleMaxWidth: "200px",
                description: "Design et implémentation des solutions choisies et définition du cursus d'adoption des usages et des technologies.",
            },
            card3: {
                title: "Gestion du cycle de vie",
                titleMaxWidth: "200px",
                description: "Supervision, management et accompagnement en continu à l'utilisation des nouvelles solutions.",
            },
        },
        image1: ourApproachImage1,
        image2: ourApproachImage2,
        bottomImage: ourApproachBottomImage,
    },
    ourTechnique: {
        title: "Nos choix technologiques",
        brands: [
            {
                name: "Microsoft",
                image: MicrosoftImage
            },
            {
                name: "Azure",
                image: AzureImage
            },
            {
                name: "Nutanix",
                image: NutanixImage
            },
            {
                name: "AWS",
                image: AWSImage
            },
            {
                name: "WMWare",
                image: VMWareImage
            },
            {
                name: "Equinix",
                image: EquinixImage
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
                Mettre à disposition le meilleur du cloud public et d'une infrastructure traditionnelle pour vous proposer une infrastructure évolutive dans le temps.
            </p>
            <p>
                Développement de vos applications, espaces de tests, Pic et débordement d'activité, plan de reprise d’activité...
                Affranchissez-vous de vos contraintes d’hier pour mettre en place les solutions technologiques innovantes de demain !
            </p>
            <h5>
                Plus de performance, d’agilité et de sécurité – Dites oui au cloud !
            </h5>
        </>
    );
}

export default function ExpertiseModernWorkplace() {
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