import React from 'react'

import ExpertiseBanner from '../Components/Expertise/ExpertiseBanner'
import OurApproach from '../Components/Expertise/OurApproach';
import Resources from '../Components/Expertise/Resources';
import TechChoices from '../Components/Expertise/TechChoices';
import ExpertiseFeatures from '../Components/Expertise/ExpertiseFeatures';
import OurExpertise from '../Components/Expertise/OurExpertise';
import FooterBanner from '../Components/Common/FooterBanner';

// banner 
import BannerLogoImage from '../../assets/Images/expertise/security/security-banner-logo.svg'
import BannerLogoMobileImage from '../../assets/Images/expertise/security/security-banner-logo.svg'
import TitleImage from '../../assets/Images/expertise/security/security-white.svg';
import Background1 from '../../assets/Images/expertise/security/security-background-1.svg'
import Background2 from '../../assets/Images/expertise/security/security-background-2.svg'
import Background3 from '../../assets/Images/expertise/security/security-background-3.svg'


// expertiseFeatures
import OptimizationImage from '../../assets/Images/expertise/security/padlock.svg';
import AdaptableImage from '../../assets/Images/expertise/security/encryption.svg';
import ScalabilityImage from '../../assets/Images/expertise/security/surveillance.svg';

// approaches
import GreenMiniImage from '../../assets/Shapes/drawings/green-mini.svg';
// import BlueMiniImage from '../../assets/Shapes/drawings/blue-mini.svg';
// import OrangeMiniImage from '../../assets/Shapes/drawings/orange-mini.svg';

// TechChoices
import MicrosoftImage from '../../assets/Images/expertise/security/microsoft@3x.png';
import AzureImage from '../../assets/Images/expertise/security/microsoft-azure-logo.png';
import NutanixImage from '../../assets/Images/expertise/security/nutanix.png';
import AwsImage from '../../assets/Images/expertise/security/amazon-web-services-logo@3x.png';
import VmwareImage from '../../assets/Images/expertise/security/v-mware-logo.png';
import EquinixImage from '../../assets/Images/expertise/security/equinix-logo-1200-x-627.png';

// OurExpertise
import Cloud from '../../assets/Images/home/cloud.svg'
import Workspace from '../../assets/Images/home/modern-workplace.svg'
// import Security from '../../assets/Images/home/security.svg'
import ServiceManager from '../../assets/Images/home/managed-service.svg'

import ArticleImage from "../../assets/Images/demo.jpg"
import SecurityForm from '../Components/Expertise/Forms/SecurityForm';
import SecurityMSP from 'views/Components/Expertise/SecurityMSP';



// const color = "#00D2B5"
const color = "green"

const cloudBannerData = {
    color: "#00D2B5",
    // bannerLogo: {
    //     image: BannerLogoImage,
    //     mobileImage: BannerLogoMobileImage,
    //     width: 490,
    //     mobileWidth: 256,
    // },
    bannerTitleImage: TitleImage,
    bannerBackgroundImage1: Background1,
    bannerBackgroundImage2: Background2,
    bannerBackgroundImage3: Background3,

    bannerTitle: 'Sécurité',
    bannerSubtitle: `Offrez une expérience unique à vos collaborateurs, dans des environnements sécurisés.`,
    bannerDescription: `Vous permettre de mettre en œuvre un système de protection proactif et adapté à vos besoins et usages
    Déploiement dans le Cloud, nouvelles réglementations toujours plus contraignantes et multiplication des cyberattaques… Garantissez votre sécurité informatique entreprise !`,

    formBackground: 'orange-rounded-background',
    formTitle: `Intéressé par notre service de Sécurité ?`,
    formSubtitle: `Remplissez ce formulaire et notre équipe commerciale reviendra rapidement vers vous.`,
    formDescription: ` Ces informations font l’objet d’un traitement informatisé par EFISENS, destiné à répondre et assurer le suivi de votre demande, et seront conservées durant le temps nécessaire pour y répondre. Conformément à la réglementation informatique et libertés, vous bénéficiez d’un droit d’accès et de rectification, de portabilité, d’effacement des informations vous concernant ou une limitation du traitement. Contactez-nous à l’adresse : conformite-RGPD@efisens.fr pour toutes demandes concernant vos données.`,
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
    subtitle: "Nous sécurisons de manière active et proactive toutes les briques de votre IT, de l'utilisateur jusqu’à l'infrastructure, grâce à une méthodologie et des outils approuvés sur le marché. ",
    approaches: [
        {
            step: 1,
            color: '#FF5E4D',
            title: "Conseil & accompagnement ",
            text: "Audit sécurité de l'existant, test d’intrusion, préconisation de méthodologies à appliquer et de solutions de sécurité à implémenter."
        },
        {
            step: 2,
            color: '#00D2B5',
            title: "Intégration de solutions de sécurité",
            text: "Assurer le choix, le déploiement et le bon fonctionnement des solutions de sécurité mises en place en partenariat  avec des spécialistes de la cybersécurité comme AISI. "
        },
        {
            step: 3,
            color: '#001A5C',
            title: "Management de sécurité en continu ",
            text: "Mettre en place des outils de surveillance proactifs de l'activité de votre IT. Mise en place de méthodologie et deprocessus d'évolution de votre organisation."
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
        {
            id: '1',
            img: Cloud,
            title: 'Cloud',
            text: 'Optimiser l’utilisation de votre IT au quotidien avec des technologies agiles, sécurisées et innovantes.',
            active: false,
        },
        {
            id: '2',
            img: Workspace,
            title: 'Modern Workplace',
            text: 'Mettre en place et interconnecter des solutions collaboratives pour vos équipes.',
            active: false,
        },
        // {
        //     id: '3',
        //     img: Security,
        //     title: 'Sécurité',
        //     text: 'Vous permettre d’être serein en protégeant votre cœur informatique ainsi que vos données  tout en garantissant la protection des données utilisateurs (RGPD friendly).',
        //     active: false,
        // },
        {
            id: '4',
            img: ServiceManager,
            title: 'Services Managés',
            text: 'Superviser votre système IT. Équiper des meilleurs outils pour superviser de façon complète votre S',
            active: false,
        },
    ]
}

const footerBannerTitle = "Parlez à un expert Sécurité."


export default function ExpertiseSecurity() {
    return (
        <>
            <ExpertiseBanner {...cloudBannerData}>
                <SecurityForm color={color} />
            </ExpertiseBanner >
            <ExpertiseFeatures color={color} items={expertiseFeature} featureBackground />
            <OurApproach color={color} {...approachData} />
            <TechChoices color={color} logos={techChoicesLogos} />
            <SecurityMSP />
            <Resources color={color} articles={articleData} />
            <OurExpertise color={color} data={expertiseData} />
            <FooterBanner color={color} title={footerBannerTitle} />
        </>
    )
}
