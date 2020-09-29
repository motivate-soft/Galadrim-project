import React from 'react'
import styled from "styled-components"

import CardImage1 from '../../../assets/Images/who-we-are/panel-techno.svg';
import CardImage2 from '../../../assets/Images/who-we-are/team.svg';
import CardImage3 from '../../../assets/Images/who-we-are/tool.svg';
import { RightRoundedSemiCircle } from '../Elements/Drawings';
import DGradientCard from '../Common/DGradientCard';


const items = [
    {
        id: 1,
        image: CardImage1,
        color: '#ff5e4d',
        title: 'Panel technologique',
        text: 'Nous veillons à proposer des technologies de pointe que nous mettons à disposition de nos clients de façon simple et efficace en nous appuyant sur des partenariats privilégiés comme Microsoft, Dell, HP et Nutanix...'
    },
    {
        id: 2,
        color: '#00d2b5',
        image: CardImage2,
        title: 'Équipe dédiée',
        text: 'Nous mettons un point d"honneur à faire monter en compétences en continu nos équipes, ce qui nous permet de designer des équipes dédiées pour chaque projet. '
    },
    {
        id: 3,
        color: '#001a5c',
        image: CardImage3,
        title: 'Performance des outils',
        text: 'Nous nous équipons des outils de management les plus performants du marché afin de gérer de façon proactive les environnements cloud privée, cloud public et les environnements utilisateurs de nos clients.'
    },
]

const CardTitle = styled.h4`
    margin: 0 auto 34px;
    text-align: center;
    color: ${props => props ? props.color : ''};
`

export default function Approach() {
    return (
        <div id="approach" className="section who-approach-block">
            <RightRoundedSemiCircle color="#001a5c" className="bottom-left transform-bottom-50" />
            <div className="container">
                <h5>Comment procédons-nous ?</h5>
                <h1 className="block-title">Nous basons notre approche technologique sur 3 Piliers </h1>
                <div className="row">
                    {
                        items.map((item, index) => (
                            <div key={index} className="col-12 col-md-12 col-lg-4 mb-4">
                                <div className="who-approach-card">
                                    <img src={item.image} alt={item.title} />
                                    <CardTitle color={item.color} top={0} bottom={34}>{item.title}</CardTitle>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
