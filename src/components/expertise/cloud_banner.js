import React from 'react';
import TitleImage from '../../assets/expertise/cloud/cloud-white.png';
import BannerLogoImage from '../../assets/expertise/cloud/banner_logo.png'
import FormCard from "./form_card";
import '../../styles/component.scss';


export default function ExpertiseCloudBanner() {
    return (
      <>
        <div className="expertise_banner bg-green">
            <div className="container">
                <div className="text-center">
                    <img src={BannerLogoImage} alt="Cloud Banner" width="290"/>
                </div>
               <div className="row">
                   <div className="col-lg-6">
                       <h1 className="image_title">
                           <img src={TitleImage} alt="" width="76"/>
                           <span>Cloud Hybride</span>
                       </h1>
                       <div className="description">
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
                       </div>
                   </div>
                   <div className="col-lg-6">
                       <FormCard/>
                   </div>
               </div>
            </div>
        </div>
      </>
    );
}