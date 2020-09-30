import React from 'react';

import Cloud from '../../../assets/Images/home/cloud.svg'
import Workspace from '../../../assets/Images/home/modern-workplace.svg'
import Security from '../../../assets/Images/home/security.svg'
import ServiceManage from '../../../assets/Images/home/managed-service.svg'
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
            <RightRoundedSemiCircle className="bottom-left transform-bottom-50" color={"#001b5d"} />
            <div className="container">
                <h1 className="block-title">Nos expertises</h1>
                <p className="block-subtitle">Nous agrégeons les meilleures technologies IT pour qu’elles puissent vous être bénéfiques au quotidien. </p>

                <div className="custom-container">
                    <img src={BlueDotsGrid} alt="blue mini" className="top-left" />
                    <img src={GreenDotsGrid} alt="green mini" className="bottom-right" />
                    <img src={OrangeRounded} alt="orange rounded" className="top-right" />
                    <div className="row">
                        {
                            items.map((item, index) => (
                                <div key={index} className="col-12 col-md-6 col-lg-3 mb-4">
                                    <DGradientCard maxWidth={276} >
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


