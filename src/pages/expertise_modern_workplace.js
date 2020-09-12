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
import BannerLogoImage from "../assets/expertise/modern-workplace/modern-workplace_4.svg";
import BannerLogoMobileImage from "../assets/expertise/modern-workplace/modern-workplace_4.svg";
import BannerTitleImage from "../assets/expertise/modern-workplace/modern-workplace-white.svg";
import BannerImage0 from "../assets/expertise/modern-workplace/modern-workplace_3.svg";
import BannerImage1 from "../assets/expertise/modern-workplace/modern-workplace_2.svg";
import BannerImage2 from "../assets/expertise/modern-workplace/modern-workplace.svg";

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