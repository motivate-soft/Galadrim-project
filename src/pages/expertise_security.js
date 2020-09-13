    import React from 'react';
    import FullScreenNav from "../components/global/full_screen_nav";
    import Header from "../components/header";
    import Footer from "../components/footer";
    import ExpertiseCloudBanner from "../components/expertise/cloud_banner";
    import OurExpertise from "../components/expertise/our_expertise";
    import OurApproach from "../components/expertise/our_approach";
    import OurTechnique from "../components/expertise/our_technique";
    import Resource from "../components/expertise/resource";
    import OtherExpertise from "../components/expertise/other_expertise";
    import CloudContactUs from "../components/expertise/cloud_contact_us";
    import BannerLogoImage from "../assets/expertise/security/s-curit_4.svg";
    import BannerLogoMobileImage from "../assets/expertise/security/s-curit_4.svg";
    import BannerTitleImage from "../assets/expertise/security/s-curit-white.svg";
    import BannerImage0 from "../assets/expertise/security/s-curit_3.svg";
    import BannerImage1 from "../assets/expertise/security/s-curit_2.svg";
    import BannerImage2 from "../assets/expertise/security/s-curit.svg";
    import OptimizationImage from "../assets/expertise/security/cadenat.svg";
    import AdaptableImage from "../assets/expertise/security/chiffrement.svg";
    import ScalabilityImage from "../assets/expertise/security/surveillance.svg";
    import ourApproachImage1 from "../assets/home/images/article.jpg";
    import ourApproachImage2 from '../assets/home/images/article.jpg';
    import ourApproachBottomImage from "../assets/expertise/cloud1/vert-mini.svg";

    const theme = {
        mainColor: '#00d2b5',
        secondaryColor: '#ff5e4d',
        banner: {
            logo: BannerLogoImage,
            logoMobile: BannerLogoMobileImage,
            titleImage: BannerTitleImage,
            titleFirst: "Sécurité",
            titleSecond: "",
            titleFontSize: '64px',
            bannerContent: bannerContent(),
            bannerImage0: BannerImage0,
            bannerImage1: BannerImage1,
            bannerImage2: BannerImage2,
            formCard: {
                title: "Intéressé par notre service de Sécurité ?",
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
                    title: 'Protection',
                    titleWidth: '348px',
                    subtitle : 'Vous permettre d’être serein en protégeant votre cœur informatique ainsi que vos données tout en garantissant la protection des données utilisateurs (RGPD ready).',
                    content : Content1()
                },
                {
                    id : '2',
                    img: {
                        url : AdaptableImage,
                        alt : 'AdaptableImage'
                    },
                    titleWidth: '348px',
                    title: 'Chiffrement',
                    subtitle : 'Protéger vos ressources critiques : données, identité et infrastructure quelque soit l\'environnement grâce à des technologies et outils innovants.',
                    content : Content2()
                },
                {
                    id : '3',
                    img: {
                        url : ScalabilityImage,
                        alt : 'ScalabilityImage'
                    },
                    title: 'Surveillance',
                    titleWidth: '348px',
                    subtitle : 'Assurer la disponibilité et la performance de vos applications, en permanence et sans concession sur la sécurité.',
                    content : Content3()
                }
            ]
        },
        ourApproach: {
            title: "Notre démarche",
            subtitle: "Nous sécurisons de manière active et proactive toutes les briques de votre IT, de l'utilisateur jusqu’à l'infrastructure, grâce à une méthodologie et des outils approuvés sur le marché. ",
            cards: {
                card1: {
                    title: "Conseil & accompagnement ",
                    titleMaxWidth: "230px",
                    description: "Audit sécurité de l'existant, test d’intrusion, préconisation de méthodologies à appliquer et de solutions de sécurité à implémenter."
                },
                card2: {
                    title: "Intégration de solutions de sécurité",
                    titleMaxWidth: "500px",
                    description: "Assurer le choix, le déploiement et le bon fonctionnement des solutions de sécurité mises en place en partenariat  avec des spécialistes de la cybersécurité comme AISI. ",
                },
                card3: {
                    title: "Management de sécurité en continu",
                    titleMaxWidth: "400px",
                    description: "Mettre en place des outils de surveillance proactifs de l'activité de votre IT. Mise en place de méthodologie et deprocessus d'évolution de votre organisation.",
                },
            },
            image1: ourApproachImage1,
            image2: ourApproachImage2,
            bottomImage: ourApproachBottomImage,
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

    export default function ExpertiseSecurity() {
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