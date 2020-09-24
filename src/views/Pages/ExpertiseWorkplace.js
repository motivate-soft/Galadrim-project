import React from 'react'

import ExpertiseBanner from '../Components/Expertise/ExpertiseBanner'
import OurApproach from '../Components/Expertise/OurApproach';
import Resources from '../Components/Expertise/Resources';
import TechChoices from '../Components/Expertise/TechChoices';
import ExpertiseFeatures from '../Components/Expertise/ExpertiseFeatures';
import OurExpertise from '../Components/Expertise/OurExpertise';
import FooterBanner from '../Components/Common/FooterBanner';

// banner 
import BannerLogoImage from '../../assets/Images/expertise/modern-workplace/modern-workplace-banner-logo.svg'
import BannerLogoMobileImage from '../../assets/Images/expertise/modern-workplace/modern-workplace-banner-logo-mobile.svg'
import TitleImage from '../../assets/Images/expertise/modern-workplace/modern-workplace-white.svg';
import Background1 from '../../assets/Images/expertise/modern-workplace/modern-workplace-background-1.svg'
import Background2 from '../../assets/Images/expertise/modern-workplace/modern-workplace-background-2.svg'
import Background3 from '../../assets/Images/expertise/modern-workplace/modern-workplace-background-3.svg'


// expertiseFeatures
import ProductivityImage from '../../assets/Images/expertise/modern-workplace/productivity.svg';
import MobilityImage from '../../assets/Images/expertise/modern-workplace/mobility.svg';
import CollaborationImage from '../../assets/Images/expertise/modern-workplace/collaboration.svg';

// approaches
// import GreenMiniImage from '../../assets/Shapes/drawings/green-mini.svg';
import BlueMiniImage from '../../assets/Shapes/drawings/blue-mini.svg';
// import OrangeMiniImage from '../../assets/Shapes/drawings/orange-mini.svg';
import OrangeCircleImage from '../../assets/Shapes/others/orange-circle.svg'
// import BlueCircleImage from '../../assets/Shapes/others/blue-circle.svg'

// TechChoices
import MicrosoftImage from '../../assets/Images/expertise/modern-workplace/microsoft@3x.png';
import MicrosoftTeamsImage from '../../assets/Images/expertise/modern-workplace/microsoft-teams@3x.png';
import CXImage from '../../assets/Images/expertise/modern-workplace/3-cx-logo-svg@3x.png';
import ColtImage from '../../assets/Images/expertise/modern-workplace/colt-logo-svg@3x.png';
import DellImage from '../../assets/Images/expertise/modern-workplace/dell-logo@3x.png';
import HpImage from '../../assets/Images/expertise/modern-workplace/hp-logo@3x.png';
import OrangeImage from '../../assets/Images/expertise/modern-workplace/orange-logo@3x.png';
import PolyImage from '../../assets/Images/expertise/modern-workplace/poly-logo@3x.png';
import SfrImage from '../../assets/Images/expertise/modern-workplace/sfr-logo@3x.png';

// OurExpertise
import Cloud from '../../assets/Images/home/cloud.svg'
// import Workspace from '../../assets/Images/home/modern-workplace.svg'
import Security from '../../assets/Images/home/security.svg'
import ServiceManager from '../../assets/Images/home/managed-service.svg'

import ArticleImage from "../../assets/Images/demo.jpg"
import WorkplaceForm from '../Components/Expertise/Forms/WorkplaceForm';



// const color = "#001A5C"
const color = "darkblue"


const cloudBannerData = {
    color: "#001A5C",
    // bannerLogo: {
    //     image: BannerLogoImage,
    //     mobileImage: BannerLogoMobileImage,
    //     width: 967,
    //     mobileWidth: 182,
    // },
    bannerTitleImage: TitleImage,
    bannerBackgroundImage1: Background1,
    bannerBackgroundImage2: Background2,
    bannerBackgroundImage3: Background3,

    bannerTitle: 'Modern Workplace',
    bannerSubtitle: `Boostez l’engagement de vos collaborateurs pour une meilleure performance avec nos solutions Modern Workplace !`,
    bannerDescription: `Favorisez la cohésion et la collaboration d’équipe
    Evolution des postes de travail, mobilité, adoption des nouvelles technologies, flex-office, télétravail…. Activer les leviers technologiques qui vous permettront de réussir votre transformation digitale. `,

    formBackground: 'orange-rounded-background',
    formTitle: `Intéressé par notre solution Modern Worplace ?`,
    formSubtitle: `Remplissez ce formulaire et notre équipe commerciale reviendra rapidement vers vous.`,
    formDescription: ` Ces informations font l’objet d’un traitement informatisé par EFISENS, destiné à répondre et assurer le suivi de votre demande, et seront conservées durant le temps nécessaire pour y répondre. Conformément à la réglementation informatique et libertés, vous bénéficiez d’un droit d’accès et de rectification, de portabilité, d’effacement des informations vous concernant ou une limitation du traitement. Contactez-nous à l’adresse : conformite-RGPD@efisens.fr pour toutes demandes concernant vos données.`,
}

const expertiseFeature = [
    {
        id: 1,
        img: ProductivityImage,
        title: 'Productivité',
        subtitle: 'Optimiser l\'expérience de vos collaborateurs au quotidien tout en protégeant vos données personnelles ',
        details: [
            "Téléphonie - voix IP Cloud",
            "On-Premise ou hybride",
            "Applications de productivité",
            "Sécurisation des environnements utilisateurs"
        ]
    },
    {
        id: 2,
        img: MobilityImage,
        title: 'Mobilité',
        subtitle: 'Vous permettre d’avoir le même espace de travail quelque que soit le lieu ou le device que vous utilisez.',
        details: [
            "Fourniture d’équipements & logiciels",
            "Gestion du cycle de vie (sauvegarde, sécurisation, mises à jours..)",
            "Virtualisation d’espace de travail",
            "Management multi devices"
        ]
    },
    {
        id: 3,
        img: CollaborationImage,
        title: 'Collaboration',
        subtitle: 'Faciliter les synergies et la collaboration entre les équipes',
        details: [
            "Applications de collaboration",
            "Messagerie instantanée",
            "Visioconférence",
            "Collaboration documentaire "
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
            title: "Conception  & architecture ",
            text: "Analyse et audit de l'existant (usages, matériels, nouveaux besoins). Préconisations de nouvelles solutions."
        },
        {
            step: 2,
            color: '#00D2B5',
            title: "Implémentation & configuration",
            text: "Design et implémentation des solutions choisies et définition du cursus d'adoption des usages et des technologies."
        },
        {
            step: 3,
            color: '#001A5C',
            title: "Gestion du cycle de vie",
            text: "Supervision, management et accompagnement en continu à l'utilisation des nouvelles solutions."
        },
    ],
    bottomCircleImage: OrangeCircleImage,
    bottomMiniImage: BlueMiniImage,
}

const techChoicesLogos = [
    {
        src: MicrosoftImage,
        alt: "Microsoft",
        maxWidth: 200,
    },
    {
        src: MicrosoftTeamsImage,
        alt: "MicrosoftTeamsImage",
        maxWidth: 110,
    },
    {
        src: CXImage,
        alt: "CXImage",
        maxWidth: 170,
    },
    {
        src: PolyImage,
        alt: "PolyImage",
        maxWidth: 150,
    },
    {
        src: DellImage,
        alt: "DellImage",
        maxWidth: 95,
    },
    {
        src: HpImage,
        alt: "HpImage",
        maxWidth: 90,
    },
    {
        src: SfrImage,
        alt: "SfrImage",
        maxWidth: 110,
    },
    {
        src: OrangeImage,
        alt: "OrangeImage",
        maxWidth: 110,
    },
    {
        src: ColtImage,
        alt: "ColtImage",
        maxWidth: 110,
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
        // {
        //     id: '2',
        //     img: Workspace,
        //     title: 'Modern Workplace',
        //     text: 'Mettre en place et interconnecter des solutions collaboratives pour vos équipes.',
        //     active: false,
        // },
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

const footerBannerTitle = "Parlez à un expert Sécurité."


export default function ExpertiseWorkplace() {
    return (
        <>
            <ExpertiseBanner {...cloudBannerData}>
                <WorkplaceForm color={color} />
            </ExpertiseBanner >
            <ExpertiseFeatures color={color} items={expertiseFeature} />
            <OurApproach color={color} {...approachData} />
            <TechChoices color={color} logos={techChoicesLogos} />
            <Resources color={color} articles={articleData} />
            <OurExpertise color={color} col={4} data={expertiseData} />
            <FooterBanner color={color} title={footerBannerTitle} />
        </>
    )
}
