import React from 'react'

import ExpertiseBanner from '../Components/Expertise/ExpertiseBanner'
import OurApproach from '../Components/Expertise/OurApproach';
import TechChoices from '../Components/Expertise/TechChoices';
import Resources from '../Components/Expertise/Resources';
import FooterBanner from '../Components/Common/FooterBanner';
import CloudForm from '../Components/Expertise/Forms/CloudForm';
import ExpertiseFeatures from '../Components/Expertise/ExpertiseFeatures';
import OurExpertise from '../Components/Expertise/OurExpertise';

// banner 
import BannerLogoImage from '../../assets/Images/expertise/cloud/cloud-banner-logo.svg'
import BannerLogoMobileImage from '../../assets/Images/expertise/cloud/cloud-banner-logo.svg'
import TitleImage from '../../assets/Images/expertise/cloud/cloud-white.svg';
import Background1 from '../../assets/Images/expertise/cloud/cloud-background-1.svg'
import Background2 from '../../assets/Images/expertise/cloud/cloud-background-2.svg'
import Background3 from '../../assets/Images/expertise/cloud/cloud-background-3.svg'


// expertiseFeatures
import OptimizationImage from '../../assets/Images/expertise/cloud/maximisation.svg';
import AdaptableImage from '../../assets/Images/expertise/cloud/adaptabilit.svg';
import ScalabilityImage from '../../assets/Images/expertise/cloud/volution.svg';

// approaches
import GreenMiniImage from '../../assets/Shapes/drawings/green-mini.svg';
// import BlueMiniImage from '../../assets/Shapes/drawings/blue-mini.svg';
// import OrangeMiniImage from '../../assets/Shapes/drawings/orange-mini.svg';

// TechChoices
import MicrosoftImage from '../../assets/Images/expertise/cloud/microsoft@3x.png';
import AzureImage from '../../assets/Images/expertise/cloud/microsoft-azure-logo.png';
import NutanixImage from '../../assets/Images/expertise/cloud/nutanix.png';
import AwsImage from '../../assets/Images/expertise/cloud/amazon-web-services-logo@3x.png';
import VmwareImage from '../../assets/Images/expertise/cloud/v-mware-logo.png';
import EquinixImage from '../../assets/Images/expertise/cloud/equinix-logo-1200-x-627.png';

// OurExpertise
// import Cloud from '../../assets/Images/home/cloud.svg'
import Workspace from '../../assets/Images/home/modern-workplace.svg'
import Security from '../../assets/Images/home/security.svg'
import ServiceManager from '../../assets/Images/home/managed-service.svg'

import ArticleImage from "../../assets/Images/demo.jpg"


// const color = "#00D2B5"
const color = "green"

const cloudBannerData = {
    color: "#00D2B5",
    bannerLogo: {
        image: BannerLogoImage,
        mobileImage: BannerLogoMobileImage,
        width: 290,
        mobileWidth: 182,
    },
    bannerTitleImage: TitleImage,
    bannerBackgroundImage1: Background1,
    bannerBackgroundImage2: Background2,
    bannerBackgroundImage3: Background3,

    bannerTitle: 'Cloud Hybride',
    bannerSubtitle: `Plus de performance, d’agilité et de sécurité – Dites oui au cloud !`,
    bannerDescription: `Mettre à disposition le meilleur du cloud public et d'une infrastructure traditionnelle pour vous proposer une infrastructure évolutive dans le temps.
    Développement de vos applications, espaces de tests, Pic et débordement d'activité, plan de reprise d’activité... Affranchissez-vous de vos contraintes d’hier pour mettre en place les solutions technologiques innovantes de demain !`,
    formTitle: `Intéressé par nos solutions Cloud ?`,
    formSubtitle: `Remplissez ce formulaire et notre équipe commerciale reviendra rapidement vers vous.`,
    formDescription: `Ces informations font l’objet d’un traitement informatisé par EFISENS, destiné à répondre et assurer le suivi de votre demande, et seront conservées durant le temps nécessaire pour y répondre. Conformément à la réglementation informatique et libertés, vous bénéficiez d’un droit d’accès et de rectification, de portabilité, d’effacement des informations vous concernant ou une limitation du traitement. Contactez-nous à l’adresse : conformite-RGPD@efisens.fr pour toutes demandes concernant vos données.`,
    formButtonText: `Envoyer le formulaire`,
}

const expertiseFeature = [
    {
        id: 1,
        img: OptimizationImage,
        title: 'Optimisation',
        subtitle: 'Rendre efficace l\'utilisation de votre IT au quotidient',
        details: [
            "Supervision et optimisation des coût d'exploitation d'une infrastructure",
            "Audit de performance Infrastructure",
            "Supervision proactive de vos infrastructures",
            "Préconisations de transition vers le cloud"
        ]
    },
    {
        id: 2,
        img: AdaptableImage,
        title: 'Adaptabilité',
        subtitle: 'Rendre flexible vos technologies IT',
        details: [
            "Refonte d'une cartographie applicative cloud ready",
            "Modernisation des couches OS et Firmware",
            "Audit et optimisation du réseau",
        ]
    },
    {
        id: 3,
        img: ScalabilityImage,
        title: 'Évolutivité',
        subtitle: 'Améliorer votre écosystème IT en fonction de vos usages et des nouvelles technologies',
        details: [
            "Transformer une infrastructure vers des solutions PaaS (Platform as a Service)",
            "Conteneurisation",
            "Modernisation complète du système d'information",
            "Console de management et administration mutli-cloud"
        ]
    }
];

const approachData = {
    title: "Notre démarche",
    subtitle: "En fonction de vos challenges technologiques et usages, nous pouvons créer, déployer et maintenir des solutions cloud sur mesure, afin de vous permettre de vous concentrer sur vos métiers",
    approaches: [
        {
            step: 1,
            color: '#FF5E4D',
            title: "Conception & architecture ",
            text: "Analyse et audit de l'existant et propositions de nouvelles architectures."
        },
        {
            step: 2,
            color: '#00D2B5',
            title: "Conception & architecture ",
            text: "Design et validation de l'architecture cloud cible."
        },
        {
            step: 3,
            color: '#001A5C',
            title: "Conception & architecture ",
            text: "Fournir les services managés nécessaires à l'évolution de vos technologies, au fil du temps et en fonction de vos besoins."
        },
    ],
    bottomMiniImage: GreenMiniImage,
}

const techChoicesLogos = [
    {
        src: MicrosoftImage,
        alt: "Microsoft",
        maxWidth: 200,
    },
    {
        src: AzureImage,
        alt: "Azure",
        maxWidth: 200,
    },
    {
        src: NutanixImage,
        alt: "Nutanix",
        maxWidth: 240,
    },
    {
        src: AwsImage,
        alt: "Aws",
        maxWidth: 130,
    },
    {
        src: VmwareImage,
        alt: "Vmware",
        maxWidth: 240,
    },
    {
        src: EquinixImage,
        alt: "Equinix",
        maxWidth: 160,
    },
]

const articleData = [
    {
        id: 1,
        title: "Enjeux et bénéfices de la dématérialisation informatique",
        text: "Si sine metu contineret, saluti prospexit civium, qua intellegebat contineri.",
        image: ArticleImage,
        tag: "Univers",
        time: 5
    },
    {
        id: 2,
        title: "Enjeux et bénéfices de la dématérialisation informatique",
        text: "Si sine metu contineret, saluti prospexit civium, qua intellegebat contineri.",
        image: ArticleImage,
        tag: "Univers",
        time: 5
    },
    {
        id: 3,
        title: "Enjeux et bénéfices de la dématérialisation informatique",
        text: "Si sine metu contineret, saluti prospexit civium, qua intellegebat contineri.",
        image: ArticleImage,
        tag: "Univers",
        time: 5
    },
    {
        id: 4,
        title: "Enjeux et bénéfices de la dématérialisation informatique",
        text: "Si sine metu contineret, saluti prospexit civium, qua intellegebat contineri.",
        image: ArticleImage,
        tag: "Univers",
        time: 5
    },
]

const expertiseData = {
    title: "Nos autres expertises",
    subtitle: "Nous agrégeons les meilleures technologies IT pour qu’elles puissent vous être bénéfiques au quotidien.",
    items: [
        // {
        //     id: '1',
        //     img: Cloud,
        //     title: 'Cloud',
        //     text: 'Optimiser l’utilisation de votre IT au quotidien avec des technologies agiles, sécurisées et innovantes.',
        //     active: false,
        // },
        {
            id: '2',
            img: Workspace,
            title: 'Modern Workplace',
            text: 'Mettre en place et interconnecter des solutions collaboratives pour vos équipes.',
            active: false,
        },
        {
            id: '3',
            img: Security,
            title: 'Sécurité',
            text: 'Vous permettre d’être serein en protégeant votre cœur informatique ainsi que vos données  tout en garantissant la protection des données utilisateurs (RGPD friendly).',
            active: false,
        },
        {
            id: '4',
            img: ServiceManager,
            title: 'Services Managés',
            text: 'Superviser votre système IT. Équiper des meilleurs outils pour superviser de façon complète votre S',
            active: false,
        },
    ]
}

const footerBannerTitle = "Parlez à un expert cloud."


export default function ExpertiseCloud() {
    return (
        <>
            <ExpertiseBanner {...cloudBannerData}>
                <CloudForm color={color} />
            </ExpertiseBanner >
            <ExpertiseFeatures color={color} items={expertiseFeature} />
            <OurApproach color={color} {...approachData} />
            <TechChoices color={color} logos={techChoicesLogos} />
            <Resources color={color} articles={articleData} />
            <OurExpertise color={color}  data={expertiseData} />
            <FooterBanner color={color} title={footerBannerTitle} />
        </>
    )
}
