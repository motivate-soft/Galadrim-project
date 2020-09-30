import React from 'react'

import ExpertiseBanner from '../Components/Expertise/ExpertiseBanner'
import OurApproach from '../Components/Expertise/OurApproach';
import Resources from '../Components/Expertise/Resources';
import TechChoices from '../Components/Expertise/TechChoices';
import OurExpertise from '../Components/Expertise/OurExpertise';
import FooterBanner from '../Components/Common/FooterBanner';

// banner 
import TitleImage from '../../assets/Images/expertise/security/security-white.svg';
import Background1 from '../../assets/Images/expertise/security/security-background-1.svg'
import Background2 from '../../assets/Images/expertise/security/security-background-2.svg'
import Background3 from '../../assets/Images/expertise/security/security-background-3.svg'


// expertise feature images
import OptimizationImage from '../../assets/Images/expertise/security/padlock.svg';
import AdaptableImage from '../../assets/Images/expertise/security/encryption.svg';
import ScalabilityImage from '../../assets/Images/expertise/security/surveillance.svg';

// approaches
import GreenMiniImage from '../../assets/Shapes/drawings/green-mini.svg';
// import BlueMiniImage from '../../assets/Shapes/drawings/blue-mini.svg';
// import OrangeMiniImage from '../../assets/Shapes/drawings/orange-mini.svg';
import OrangeCircleImage from '../../assets/Shapes/others/orange-circle.svg'
// import BlueCircleImage from '../../assets/Shapes/others/blue-circle.svg'

// TechChoices
import MicrosoftLogo from '../../assets/Images/expertise/security/logo-microsoft@3x.png';
import CiscoLogo from '../../assets/Images/expertise/security/logo-cisco@3x.png';
import SentinelLogo from '../../assets/Images/expertise/security/logo-sentinel@3x.jpg';
import FortinetLogo from '../../assets/Images/expertise/security/logo-fortinet@3x.png';
import JuniperLogo from '../../assets/Images/expertise/security/logo-juniper@3x.png';
import SonicLogo from '../../assets/Images/expertise/security/logo-sonic@3x.png';
import RuckusLogo from '../../assets/Images/expertise/security/logo-ruckus@3x.png';


// OurExpertise
import Cloud from '../../assets/Images/home/cloud.svg'
import Workplace from '../../assets/Images/home/modern-workplace.svg'
// import Security from '../../assets/Images/home/security.svg'
import ManagedService from '../../assets/Images/home/managed-service.svg'

import ArticleImage from "../../assets/Images/demo.jpg"
import SecurityForm from '../Components/Expertise/Forms/SecurityForm';
import SecurityMSP from '../Components/Expertise/SecurityMSP';

// Fixed Navbar
import ExpertiseStickyNavbar from '../Components/Expertise/ExpertiseStickyNavbar';
import CloudWhite from '../../assets/Images/expertise/cloud/cloud-white.svg'
import WorkplaceWhite from '../../assets/Images/expertise/modern-workplace/modern-workplace-white.svg'
import ManagedServiceWhite from '../../assets/Images/expertise/managed-services/managed-service.svg'
import SecurityWhite from '../../assets/Images/expertise/security/security-white.svg'
// import ExpertiseStickyTopNavbar from '../Components/Expertise/ExpertiseStickyTopNavbar';
import SecurityFeature from './../Components/Expertise/Features/SecurityFeature';



// const color = "#00D2B5"
const color = "green"

const cloudBannerData = {
    color: "#00D2B5",
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
        title: 'Protection',
        subtitle: `Vous permettre d'être serein en protégeant votre cœur informatique ainsi que vos données tout en garantssant la protection des données utilisateurs (RGDP ready)`,
        details: [
            "Firewall / Antivirus",
            "Réseaux virtuels et physiques",
            "Interconnexion",
            "Routage",
            "WIFI"
        ]
    },
    {
        id: 2,
        img: AdaptableImage,
        title: 'Chiffrement',
        subtitle: `Protéger vos ressources critiques : données, identité et infrastructure quelque soit l'environnement grâce à des technologies et outils innovants.`,
        details: [
            "VPN",
            "Chiffrement de données",
            "Contrôle des applications et du réseau",
            "Authentification/SSO",
        ]
    },
    {
        id: 3,
        img: ScalabilityImage,
        title: 'Surveillance',
        subtitle: `Assurer la disponibilité et la performance de vos applications, en permanence et sans concession sur la sécurité.`,
        details: [
            "Supervision & analyse prédictive",
            "Maintenance",
            "Gestion des incidents",
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
    bottomCircleImage: OrangeCircleImage,
    bottomMiniImage: GreenMiniImage,
}

const techChoicesLogos = [
    {
        src: MicrosoftLogo,
        alt: "Microsoft",
        maxWidth: 242,
    },
    {
        src: FortinetLogo,
        alt: "Fortnet",
        maxWidth: 316,
    },
    {
        src: SentinelLogo,
        alt: "equinix",
        maxWidth: 261,
    },
    {
        src: JuniperLogo,
        alt: "Juniper",
        maxWidth: 202,
    },
    {
        src: SonicLogo,
        alt: "Sonic",
        maxWidth: 266,
    },
    {
        src: CiscoLogo,
        alt: "Cisco",
        maxWidth: 200,
    },
    {
        src: RuckusLogo,
        alt: "Ruckus",
        maxWidth: 232,
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
            img: Workplace,
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
            img: ManagedService,
            title: 'Services Managés',
            text: 'Superviser votre système IT. Équiper des meilleurs outils pour superviser de façon complète votre S',
            active: false,
        },
    ]
}

const fixedNavItems = [
    {
        id: 1,
        title: 'Cloud',
        actionText: 'Intéressé par nos solutions Cloud ?',
        image: CloudWhite,
    },
    {
        id: 2,
        title: 'Modern Workplace',
        actionText: 'Intéressé par notre solution Modern Worplace ?',
        image: WorkplaceWhite,
    },
    {
        id: 3,
        title: 'Sécurité',
        actionText: 'Intéressé par notre service de Sécurité ?',
        image: SecurityWhite,
    },
    {
        id: 4,
        title: 'Services Managés',
        actionText: 'Intéressé par nos Services Managés ?',
        image: ManagedServiceWhite,
    }
]

const footerBannerTitle = "Parlez à un expert Sécurité."


export default function ExpertiseSecurity() {
    return (
        <>
            {/* <ExpertiseStickyTopNavbar /> */}
            <ExpertiseBanner {...cloudBannerData}>
                <SecurityForm color={color} />
            </ExpertiseBanner >
            <ExpertiseStickyNavbar color={color} navItem={fixedNavItems[2]} />
            <SecurityFeature color={color} items={expertiseFeature} />
            <OurApproach color={color} {...approachData} />
            <TechChoices color={color} logos={techChoicesLogos} />
            <SecurityMSP />
            <Resources color={color} articles={articleData} />
            <OurExpertise color={color} data={expertiseData} />
            <FooterBanner color={color} title={footerBannerTitle} />
        </>
    )
}
