import React from 'react'
import { BlockTitle, GradientText } from '../Elements/Typography'

import AvatarImage from '../../../assets/Images/who-we-are/ceo.jpg';
import QuoteImage from '../../../assets/Images/who-we-are/quote.svg';
import DiscussionImage from '../../../assets/Images/who-we-are/discuss.jpg';
import SecurityImage from '../../../assets/Images/who-we-are/security.svg';
import { OrangeButton } from '../Elements/Buttons';



export default function OurGroup() {
    return (
        <div className="section who-group-block">
            <div className="container text-darkblue">
                <h1 className="block-title">Notre groupe</h1>
                <div className="hero-card">
                    <div className="row">
                        <div className="col-lg-2 col-sm-12">
                            <div className="hero-avatar-container">
                                <div className="hero-avatar position-relative mx-auto">
                                    <img src={AvatarImage} alt="CEO" className="w-100 rounded" />
                                    <img src={QuoteImage} alt="Quote" className="top-right" />
                                </div>
                                <h6>Édouard Soudée</h6>
                                <span>CEO</span>
                            </div>
                        </div>
                        <div className="col-lg-10 col-sm-12 d-flex align-items-center">
                            <p>C’est une histoire d’entrepreneuriat, une histoire d’Hommes et de femmes, une histoire d’ambition, une histoire de grandir ensemble.</p>
                        </div>
                    </div>
                </div>
                <h2 className="gradient-text">Nous sommes un managed service provider (MSP) ce qui selon notre définition consiste à être un agrégateur de technologies et de talents. </h2>

            </div>
            <div className="container-fluid">
                <div className="row who-definition-container">
                    <div className="col-lg-6 col-sm-12 who-definition-image">
                        <img src={DiscussionImage} alt="discussion" className="foreground-img" />
                        <img src={SecurityImage} alt="security background" className="background-img bottom-right" />
                    </div>
                    <div className="col-lg-6 col-sm-12 who-definition-text d-flex align-items-center">
                        <div>
                            <p>Notre ambition est très claire :  Décomplexer l'IT,  en proposant des solutions standardisées ou sur mesure et en co-construisant les futurs projets (cloud, infrastructure, sécurité et modern workplace) avec nos clients. Nous combinons notre capacité d'innovation et nos expertises avec celles des plus gros  partenaires de notre écosystème, comme Microsoft et Nutanix, pour aller plus loin que la simple conception d'architectures et de services.</p>
                            <OrangeButton className="w-100">Voir nos partenaires technologiques</OrangeButton>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
