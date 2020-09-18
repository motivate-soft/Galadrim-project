import React from 'react';

import CardImage1 from '../../assets/who_we_are/panel-techno.svg';
import CardImage2 from '../../assets/who_we_are/2.svg';
import CardImage3 from '../../assets/who_we_are/3.svg';
import LeftBottomImage from '../../assets/who_we_are/2_2.svg';

export default function WhoApproach() {
    return (
        <div className={'who_approach'}>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-lg-12'}>
                        <h5>Comment procédons-nous ?</h5>
                        <h1>Nous basons notre approche technologique sur 3 Piliers </h1>
                    </div>
                </div>
                <div className={'row card-area'}>
                    <div className={'col-lg-4'}>
                        <div className={'card card-body'}>
                            <img src={CardImage1} alt=""/>
                            <h2 className={'text-danger'}>Panel technologique</h2>
                            <p>Nous veillons à proposer des technologies de pointe que nous mettons à disposition de nos clients de façon simple et efficace en nous appuyant sur des partenariats privilégiés comme Microsoft, Dell, HP et Nutanix...</p>
                        </div>
                    </div>
                    <div className={'col-lg-4'}>
                        <div className={'card card-body'}>
                            <img src={CardImage2} alt=""/>
                            <h2 className={'text-success'}>Équipe dédiée</h2>
                            <p>Nous mettons un point d"honneur à faire monter en compétences en continu nos équipes, ce qui nous permet de designer des équipes dédiées pour chaque projet. </p>
                        </div>
                    </div>
                    <div className={'col-lg-4'}>
                        <div className={'card card-body'}>
                            <img src={CardImage3} alt=""/>
                            <h2 className={'text-primary'}>Performance des outils</h2>
                            <p>Nous nous équipons des outils de management les plus performants du marché afin de gérer de façon proactive les environnements cloud privée, cloud public et les environnements utilisateurs de nos clients.</p>
                        </div>
                    </div>
                </div>
            </div>
            <img src={LeftBottomImage} className={'left-bottom-image'} alt=""/>
        </div>
    );
}