import React from 'react';
import TitleImage from '../../assets/who_we_are/asset-1-2-x.png';
import RightBottomImage from '../../assets/who_we_are/vert.svg'

export default function TalentsTechnologies() {
    return (
       <div className={'talents_technologies'}>
           <div className={'container'}>
               <div className={'row'}>
                   <div className={'col-lg-12 text-center'}>
                       <h5>L’humain est au cœur de notre ADN</h5>
                       <h1>Talents<br/> & Technologies</h1>
                       <img src={TitleImage} className={'title-image'} alt=""/>
                   </div>
                   <div className={'col-lg-10'}>
                       <div className={'card card-green'}>
                           <div className={'right-top-square'}/>
                           <div className={'left-bottom-circle'}/>
                           <h5>
                               Deux visions pour un seul objectif
                           </h5>
                           <h3>
                               Réaliser des avancées tangibles et innovantes grâce à l’expertise de nos talents et la puissance de la technologie.
                           </h3>
                       </div>
                   </div>
                   <div className={'col-lg-10'}>
                       <div className={'card card-bg-image'}>
                           <h5>
                               #peoplematters
                           </h5>
                           <h3>
                               Rejoindre EFSENS c'est travailler en synergie pour répondre et imaginer les technologies de demain.  Chez Efisens, notre environnement de travail est collaboratif, moderne et dynamique…
                               au sein d’une communauté technophile qui crée le mouvement, plutôt que de le suivre !
                           </h3>
                           <button className={'btn'}>
                               Accéder à nos opportunités de carrières
                           </button>
                           <img src={RightBottomImage} className={'right-bottom-image'} alt=""/>
                       </div>
                   </div>
               </div>
           </div>
       </div>
    );
}