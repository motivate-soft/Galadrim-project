import React from 'react';

import Cloud from '../../../assets/Images/cloud.png'
import Workspace from '../../../assets/Images/modern-workplace.png'
import Security from '../../../assets/Images/security.png'
import ServiceManage from '../../../assets/Images/managed-service.svg'
import BlueDotsGrid from "../../../assets/Shapes/drawings/blue-mini.svg"
import GreenDotsGrid from "../../../assets/Shapes/drawings/green-mini.svg"
import OrangeRounded from "../../../assets/Shapes/rounded-angle/orange-rounded@3x.png"
import ExpertiseCard from '../Common/ExpertiseCard';
import DGradientCard from '../Common/DGradientCard';
import { RightRoundedSemiCircle } from '../Elements/Drawings';


const items = [
    {
        id: '1',
        img: Cloud,
        title: 'Cloud',
        text: 'Optimiser l’utilisation de votre IT au quotidien avec des technologies agiles, sécurisées et innovantes.',
        active: false,
    },
    {
        id: '2',
        img: Workspace,
        title: 'Modern Workplace',
        text: 'Mettre en place et interconnecter des solutions collaboratives pour vos équipes.',
        active: false,
    },
    {
        id: '3',
        img: Security,
        title: 'Sécurité',
        text: 'Vous permettre d’être serein en protégeant votre cœur informatique ainsi que vos données  tout en garantissant la protection des données utilisateurs (RGPD friendly).',
        active: false,
    },
    {
        id: '4',
        img: ServiceManage,
        title: 'Services Managés',
        text: 'Superviser votre système IT. Équiper des meilleurs outils pour superviser de façon complète votre S',
        active: false,
    },
]

export default function Expertise() {
    return (
        <div className="section home-expertise-block">
            <RightRoundedSemiCircle className="position-absolute bottom-left transform-bottom-50" color={"#001b5d"} />
            <div className="container">
                <div className="text-darkblue text-center w-75 mx-auto d-flex flex-column">
                    <h1 className="block-title">Nos expertises</h1>
                    <p className="block-subtitle">Nous agrégeons les meilleures technologies IT pour qu’elles puissent vous être bénéfiques au quotidien. </p>
                </div>
                <div className="features-block">
                    <img src={BlueDotsGrid} alt="blue grid dots" className="position-absolute top-left" />
                    <img src={GreenDotsGrid} alt="green grid dots" className="position-absolute bottom-right" />
                    <img src={OrangeRounded} alt="orange rounded" className="position-absolute top-right" />
                    <div className="row">
                        {
                            items.map((item, index) => (
                                <div key={index} className="col-12 col-md-6 col-lg-3 mb-4">
                                    <DGradientCard
                                    // maxWidth={300}
                                    >
                                        <ExpertiseCard
                                            id={item.id}
                                            active={item.active}
                                            img={item.img}
                                            title={item.title}
                                            text={item.text} />
                                    </DGradientCard>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div >
    );
}


