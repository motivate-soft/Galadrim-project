import React from 'react';

import Card from './card';
import Cloud from '../../assets/home/images/cloud.png'
import Workspace from '../../assets/home/images/modern-workplace.png'
import Service from '../../assets/home/images/s-curit.png'
import ServiceManage from '../../assets/home/images/service-manag.png'
import BlueIllustration from '../../assets/Formes/illustration/bleu-mini.png'
import GreenIllustration from '../../assets/Formes/illustration/vert-mini.png'
import TopRightRound from '../../assets/Formes/angle-arrondi/saumon/4.png'


const items = [
    {
        id: '1',
        img: Cloud,
        title: 'Cloud',
        text: 'Optimiser l’utilisation de votre IT au quotidien avec des technologies agiles, sécurisées et innovantes.',
        buttonText: 'En savoir plus',
        active: false,
    },
    {
        id: '2',
        img: Workspace,
        title: 'Modern Workplace',
        text: 'Mettre en place et interconnecter des solutions collaboratives pour vos équipes.',
        buttonText: 'En savoir plus',
        active: false,
    },
    {
        id: '3',
        img: Service,
        title: 'Sécurité',
        text: 'Vous permettre d’être serein en protégeant votre cœur informatique ainsi que vos données  tout en garantissant la protection des données utilisateurs (RGPD friendly).',
        buttonText: 'En savoir plus',
        active: false,
    },
    {
        id: '4',
        img: ServiceManage,
        title: 'Services Managés',
        text: 'Superviser votre système IT. Équiper des meilleurs outils pour superviser de façon complète votre S',
        buttonText: 'En savoir plus',
        active: false,
    },
]

class Jobs extends React.Component {
    state = {
        items: items
    }

    handleMouseEnter = (id) => {
        const { items } = this.state
        items.map((item, index) => {
            if (item.id === id) {
                item.active = true
            } else {
                item.active = false
            }
        })

        this.setState({ items: items })
    }

    handleMoustLeave = (id) => {
        const { items } = this.state
        items.map((item, index) => {
            if (item.id === id) {
                item.active = false
            }
        })

        this.setState({ items: items })
    }

    render() {
        return (
            <div className="jobs-block">
                <div className='position-absolute blue-left-bottom-semi-circle'/>
                <div className='position-absolute green-right-top-semi-circle'/>
                <div className="container">
                    <div className="text-blue text-center w-75 mx-auto">
                        <h1 className="font-weight-bold mx-auto mt-5 title">Nos expertises</h1>
                        <div className="subtitle-container">
                            <h5 className="roboto-font">Nous agrégeons les meilleures technologies IT pour qu’elles<br/> puissent vous être bénéfiques au quotidien.</h5>
                        </div>
                    </div>
                    <div className="features-block mt-5">
                        <div className="position-absolute orange-top-right-semi-circle"/>
                        <div className="row">
                            {
                                items.map((item, index) => (
                                    <div key={index} className="col-md-6 col-lg-3">
                                        <Card
                                            id={item.id}
                                            active={item.active}
                                            img={item.img}
                                            title={item.title}
                                            text={item.text}
                                            buttonText={item.buttonText}
                                            onMouseEnter={this.handleMouseEnter}
                                            onMouseLeave={this.handleMoustLeave}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Jobs;
