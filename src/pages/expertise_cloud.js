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
