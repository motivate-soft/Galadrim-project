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
import BannerLogoImage from '../assets/expertise/service-manager/services-manag-s.svg';
import BannerLogoMobileImage from '../assets/expertise/service-manager/services-manag-s.svg';
import BannerTitleImage from '../assets/expertise/service-manager/service-manag-white.svg'
import BannerImage0 from "../assets/expertise/service-manager/service-manag_3.svg";
import BannerImage1 from "../assets/expertise/service-manager/service-manag_2.svg";
import BannerImage2 from "../assets/expertise/service-manager/service-manag.svg";

const theme = {
    mainColor: '#ff5e4d',
    secondaryColor: '#001a5c',
    banner: {
        logo: BannerLogoImage,
        logoMobile: BannerLogoMobileImage,
        titleImage: BannerTitleImage,
        titleFirst: "Services",
        titleSecond: "Managés",
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
                Vous accompagner au quotidien et et veiller au bon fonctionnement et évolutivité de votre IT
                Manager votre SI de manière totalement différente et gagner en efficacité comme jamais auparavant.
            </p>
            <p>
                Vous accompagner au quotidien et et veiller au bon fonctionnement et évolutivité de votre IT
                Manager votre SI de manière totalement différente et gagner en efficacité comme jamais auparavant.
            </p>
            <h5>
                Vous accompagner au quotidien et et veiller au bon fonctionnement et évolutivité de votre IT
            </h5>
        </>
    );
}

export default function ExpertiseServiceManager() {
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