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
import BannerLogoImage from '../assets/expertise/service-manager/services-manag-s.svg'

const theme = {
    mainColor: '#ff5e4d',
    secondaryColor: '#001a5c',
    banner: {
        logo: BannerLogoImage
    }
};

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