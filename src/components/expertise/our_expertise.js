import React from 'react';
import ExpertiseCard from "../global/expertise_card";
import OptimizationImage from '../../assets/expertise/cloud/maximisation.svg';
import AdaptableImage from '../../assets/expertise/cloud/adaptabilit.svg';
import ScalabilityImage from '../../assets/expertise/cloud/volution.svg';

const items = [
    {
        id : '1',
        img: {
            url : OptimizationImage,
            alt : 'OptimizationImage'
        },
        title: 'Optimisation',
        titleWidth: '180px',
        subtitle : 'Rendre efficace l\'utilisation de votre IT au quotidient',
        content : Content1()
    },
    {
        id : '2',
        img: {
            url : AdaptableImage,
            alt : 'AdaptableImage'
        },
        titleWidth: '180px',
        title: 'Adaptabilité',
        subtitle : 'Rendre flexible vos technologies IT',
        content : Content2()
    },
    {
        id : '3',
        img: {
            url : ScalabilityImage,
            alt : 'ScalabilityImage'
        },
        title: 'Évolutivité',
        titleWidth: '348px',
        subtitle : 'Améliorer votre écosystème IT en fonction de vos usages et des nouvelles technologies',
        content : Content3()
    }
];

class OurExpertise extends React.Component{
    state = {
        items:items,
    }

    handleMouseEnter = (id) => {
        const { items } = this.state;
        items.map((item, index) => {
            if (item.active === id) {
                item.active = true
            } else {
                item.active = false
            }
        })

        this.setState({items: items})
    }

    handleMouseLeave = (id) => {
        const { items } = this.state;
        items.map((item, index) => {
            if (item.id === id) {
                item.active = false
            }
        })

        this.setState({items: items})
    }

    render()
    {
        return (
            <div className="our_expertise">
                <div className="container">
                    <div className="our_expertise">
                        <h1 className="text-center" style={{color: this.props.theme.mainColor}}>Notre Expertise</h1>
                    </div>
                    <div className="card-content">
                        <div className="row">
                            {
                                items.map((item, index) => (
                                    <div key={index} className="col-lg-4">
                                        <ExpertiseCard
                                            id={item.id}
                                            active={item.active}
                                            img={item.img}
                                            title={item.title}
                                            titleWidth={item.titleWidth}
                                            subtitle={item.subtitle}
                                            content={item.content}
                                            onMouseEnter={this.handleMouseEnter}
                                            onMouseLeave={this.handleMouseLeave}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function Content1() {
    return (
        <>
            <li>Supervision et optimisation des coût d'exploitation d'une infrastructure</li>
            <li>Audit de performance Infrastructure</li>
            <li>Supervision proactive de vos infrastructures</li>
            <li>Préconisations de transition vers le cloud</li>
        </>
    );
}

function Content2() {
    return (
        <>
            <li>Refonte d'une cartographie applicative cloud ready</li>
            <li>Modernisation des couches OS et Firmware</li>
            <li>Audit et optimisation du réseau</li>
        </>
    );
}

function Content3() {
    return (
        <>
            <li>Transformer une infrastructure vers des solutions PaaS (Platform as a Service)</li>
            <li>Conteneurisation</li>
            <li>Modernisation complète du système d'information</li>
            <li>Console de management et administration mutli-cloud</li>
        </>
    );
}

export default OurExpertise