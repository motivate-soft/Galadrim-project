import React from 'react';
import { Container, Row } from 'react-bootstrap';

import Cloud from '../../../assets/Images/cloud.png'
import Workspace from '../../../assets/Images/modern-workplace.png'
import Security from '../../../assets/Images/security.png'
import ServiceManage from '../../../assets/Images/service-manage.png'
import BlueDotsGrid from "../../../assets/Shapes/drawings/bleu-mini.png"
import GreenDotsGrid from "../../../assets/Shapes/drawings/vert-mini.png"
import OrangeRounded from "../../../assets/Shapes/rounded-angle/orange-rounded@3x.png"
import BlueHalfRounded from "../../../assets/Shapes/half-rounded/blue-half-rounded@3x.png"
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
        <div className="expertises-block">
            <RightRoundedSemiCircle className="position-absolute bottom-left transform-bottom-50" color={"#001b5d"} />
            <Container>
                <div className="text-blue text-center w-75 mx-auto d-flex flex-column">
                    <h1 className="mb-3">Nos expertises</h1>
                    <p className="w-50 mx-auto">Nous agrégeons les meilleures technologies IT pour qu’elles puissent vous être bénéfiques au quotidien. </p>
                </div>
                <div className="features-block mt-5">
                    <img src={BlueDotsGrid} alt="blue grid dots" className="position-absolute top-left grid-dots" />
                    <img src={GreenDotsGrid} alt="green grid dots" className="position-absolute bottom-right grid-dots" />
                    <img src={OrangeRounded} alt="orange rounded" className="position-absolute top-right top-right-rounded" />
                    <div className="row">
                        {
                            items.map((item, index) => (
                                <div key={index} className="col-md-6 col-lg-3 mb-4">
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
            </Container>
        </div >
    );
}


