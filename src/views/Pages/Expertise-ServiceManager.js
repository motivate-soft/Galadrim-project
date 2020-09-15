import React from 'react'

import ExpertiseBanner from '../Components/Expertise/ExpertiseBanner'
import OurApproach from '../Components/Expertise/OurApproach';
import Resources from './../Components/Expertise/Resources';
import TechChoices from './../Components/Expertise/TechChoices';
import ExpertiseFeatures from '../Components/Expertise/ExpertiseFeatures';
import OurExpertise from '../Components/Expertise/OurExpertise';
import FooterBanner from '../Components/Common/FooterBanner';

// banner 
import BannerLogoImage from '../../assets/Images/expertise/service-manager/service-manager-banner-logo.svg'
import TitleImage from '../../assets/Images/expertise/service-manager/service-manager-white.svg';
import Background1 from '../../assets/Images/expertise/service-manager/service-manager-background-1.svg'
import Background2 from '../../assets/Images/expertise/service-manager/service-manager-background-2.svg'
import Background3 from '../../assets/Images/expertise/service-manager/service-manager-background-3.svg'


// expertiseFeatures
import ManagementImage from '../../assets/Images/expertise/service-manager/management.svg';
import MaintenanceImage from '../../assets/Images/expertise/service-manager/maintenance.svg';
import OutilsImage from '../../assets/Images/expertise/service-manager/outils.svg';

// TechChoices
import MicrosoftImage from '../../assets/Images/expertise/service-manager/microsoft@3x.png';
import ItglueImage from '../../assets/Images/expertise/service-manager/itglue-white-logo@3x.png';
import DattormmImage from '../../assets/Images/expertise/service-manager/dattormm@3x.png';
import DattoAtPsaImage from '../../assets/Images/expertise/service-manager/datto-at-psa-logo@3x.png';
import ManageengineImage from '../../assets/Images/expertise/service-manager/manageengine-logo@3x.png';


// OurExpertise
import Cloud from '../../assets/Images/cloud.png'
import Workspace from '../../assets/Images/modern-workplace.png'
import Security from '../../assets/Images/security.png'
import ServiceManager from '../../assets/Images/service-manage.png'

import ArticleImage from "../../assets/Images/demo.jpg"
import ServiceForm from './../Components/Expertise/Forms/ServiceForm';



const color = "#FF5E4D"

const cloudBannerData = {
    color: "#FF5E4D",
    bannerLogo: {
        image: BannerLogoImage,
        width: 960,
    },
    bannerTitleImage: TitleImage,
    bannerBackgroundImage1: Background1,
    bannerBackgroundImage2: Background2,
    bannerBackgroundImage3: Background3,

    bannerTitle: 'Modern Workplace',
    bannerSubtitle: `Boostez l’engagement de vos collaborateurs pour une meilleure performance avec nos solutions Modern Workplace !`,
    bannerDescription: `Favorisez la cohésion et la collaboration d’équipe
    Evolution des postes de travail, mobilité, adoption des nouvelles technologies, flex-office, télétravail…. Activer les leviers technologiques qui vous permettront de réussir votre transformation digitale. `,
    formTitle: `Intéressé par notre solution Modern Worplace ?`,
    formSubtitle: `Remplissez ce formulaire et notre équipe commerciale reviendra rapidement vers vous.`,
    formDescription: ` Ces informations font l’objet d’un traitement informatisé par EFISENS, destiné à répondre et assurer le suivi de votre demande, et seront conservées durant le temps nécessaire pour y répondre. Conformément à la réglementation informatique et libertés, vous bénéficiez d’un droit d’accès et de rectification, de portabilité, d’effacement des informations vous concernant ou une limitation du traitement. Contactez-nous à l’adresse : conformite-RGPD@efisens.fr pour toutes demandes concernant vos données.`,
}

const expertiseFeature = [
    {
        id: 1,
        img: ManagementImage,
        title: 'Management',
        subtitle: 'Administrer et effectuer de la surveillance de remédiation pour être proactif au quotidien.',
        details: [
            "Superviser les performances et les menaces",
            "Supervision multicloud et multiplateforme ",
            "Optimisation des coûts d'exploitations",
        ]
    },
    {
        id: 2,
        img: MaintenanceImage,
        title: 'Maintenance',
        subtitle: 'Vous accompagner sur les problématiques du quotidien de vos infrastructures  et de vos users.',
        details: [
            "Administration quotidienne des infrastructures confiées",
            "Supervision proactive des performances",
            "Seuil d'alertes en mode workflow",
            "Contrat de services managés adapté et évolutif"
        ]
    },
    {
        id: 3,
        img: OutilsImage,
        title: 'Outils',
        subtitle: 'Faciliter les synergies et la collaboration entre les équipes',
        details: [
            "Traitement de tickets de maintenance / SLA’s",
            "Maintenance infrastructures et postes de travail",
            "Respect du cycle de vie du matériels déployés",
        ]
    }
];

const approachData = {
    title: "Notre démarche",
    subtitle: "Créer des méthodologies sur mesure afin d'automatiser la surveillance de votre IT et ainsi vous permettre de vous concentrer sur votre métier.",
    approaches: [
        {
            step: 1,
            color: '#FF5E4D',
            title: "Identifier le niveau de services managés",
            text: "Définir le périmètre d'intervention, les technologies à maintenir et le niveau de service (SLA) à respecter "
        },
        {
            step: 2,
            color: '#00D2B5',
            title: "Déroulement du contrat ",
            text: "Assurer la supervision proactive des infrastructures et proposer une évolution des technologies afin d'en optimiser les performances "
        },
        {
            step: 3,
            color: '#001A5C',
            title: "Gestion du cycle de vie",
            text: "Proposer des évolutions techniques et contractuels au périmètre engagé."
        },
    ]
}

const techChoicesLogos = [
    {
        src: MicrosoftImage,
        alt: "Microsoft",
        maxWidth: 240,
    },
    {
        src: ItglueImage,
        alt: "ItglueImage",
        maxWidth: 180,
    },
    {
        src: DattormmImage,
        alt: "DattormmImage",
        maxWidth: 230,
    },
    {
        src: DattoAtPsaImage,
        alt: "DattoAtPsaImage",
        maxWidth: 380,
    },
    {
        src: ManageengineImage,
        alt: "ManageengineImage",
        maxWidth: 260,
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

const expertieseData = {
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
        {
            id: '3',
            img: Security,
            title: 'Sécurité',
            text: 'Vous permettre d’être serein en protégeant votre cœur informatique ainsi que vos données  tout en garantissant la protection des données utilisateurs (RGPD friendly).',
            active: false,
        },
        // {
        //     id: '4',
        //     img: ServiceManager,
        //     title: 'Services Managés',
        //     text: 'Superviser votre système IT. Équiper des meilleurs outils pour superviser de façon complète votre S',
        //     active: false,
        // },
    ]
}

const footerBannerTitle = "Parlez à un expert Services Managés"


export default function ExpertiseServiceManager() {
    return (
        <>
            <ExpertiseBanner {...cloudBannerData}>
                <ServiceForm color={color} />
            </ExpertiseBanner >
            <ExpertiseFeatures color={color} items={expertiseFeature} />
            <OurApproach color={color} {...approachData} />
            <TechChoices color={color} logos={techChoicesLogos} />
            <Resources color={color} articles={articleData} />
            <OurExpertise color={color} col={4} data={expertieseData} />
            <FooterBanner color={color} title={footerBannerTitle} />
        </>
    )
}
