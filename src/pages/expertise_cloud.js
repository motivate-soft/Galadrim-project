import React from 'react';
import '../styles/expertise.scss'
import ExpertiseCloudBanner from "../components/expertise/cloud_banner";
import OurExpertise from "../components/expertise/our_expertise";
import OurApproach from "../components/expertise/our_approach";
import FullScreenNav from "../components/global/full_skin";
import Header from "../components/header";
import Footer from "../components/footer";
import OurTechnique from "../components/expertise/our_technique";
import Resource from "../components/expertise/resource";
import OtherExpertise from "../components/expertise/other_expertise";
import CloudContactUs from "../components/expertise/cloud_contact_us";
import BannerLogoImage from "../assets/expertise/cloud1/cloud_4.svg";
import BannerLogoMobileImage from "../assets/expertise/cloud1/cloud_4.svg";
import BannerTitleImage from "../assets/expertise/cloud1/cloud-white.svg";
import BannerImage0 from '../assets/expertise/cloud1/cloud_3.svg';
import BannerImage1 from '../assets/expertise/cloud1/cloud_2.svg';
import BannerImage2 from '../assets/expertise/cloud1/cloud.svg';
import OptimizationImage from "../assets/expertise/cloud/maximisation.svg";
import AdaptableImage from "../assets/expertise/cloud/adaptabilit.svg";
import ScalabilityImage from "../assets/expertise/cloud/volution.svg";

const theme = {
    mainColor: '#00d2b5',
    secondaryColor: '#ff5e4d',
    banner: {
        logo: BannerLogoImage,
        logoMobile: BannerLogoMobileImage,
        titleImage: BannerTitleImage,
        titleFirst: "Cloud Hybride",
        titleSecond: "",
        titleFontSize: '64px',
        bannerContent: bannerContent(),
        bannerImage0: BannerImage0,
        bannerImage1: BannerImage1,
        bannerImage2: BannerImage2,
        formCard: {
            title: "Intéressé par nos solutions Cloud ?",
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
        }
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
                title: 'Optimisation',
                titleWidth: '180px',
                subtitle : 'Rendre efficace l\'utilisation de votre IT au quotidient',
                content : Content1()
            },
            {
                id : '2',
                img: {
                    url : AdaptableImage,
                    alt : 'AdaptableImage'
                },
                titleWidth: '180px',
                title: 'Adaptabilité',
                subtitle : 'Rendre flexible vos technologies IT',
                content : Content2()
            },
            {
                id : '3',
                img: {
                    url : ScalabilityImage,
                    alt : 'ScalabilityImage'
                },
                title: 'Évolutivité',
                titleWidth: '348px',
                subtitle : 'Améliorer votre écosystème IT en fonction de vos usages et des nouvelles technologies',
                content : Content3()
            }
        ]
    }
};

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


class ExpertiseCloud extends React.Component{

    state = {
        theme:theme
    }

    render()
    {
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
}

export default ExpertiseCloud
