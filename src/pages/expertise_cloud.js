import React from 'react';
import '../styles/expertise.scss'
import ExpertiseCloudBanner from "../components/expertise/cloud_banner";
import OurExpertise from "../components/expertise/our_expertise";
import OurApproach from "../components/expertise/our_approach";
import FullScreenNav from "../components/global/full_skin";
import Header from "../components/header";
import Footer from "../components/footer";

const theme = {
    mainColor: '#00d2b5',
    secondaryColor: '#ff5e4d',
};
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
                <Footer/>
            </>
        );
    }
}

export default ExpertiseCloud
