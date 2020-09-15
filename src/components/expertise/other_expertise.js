import React from 'react';
import Cloud from "../../assets/home/images/cloud.png";
import Workspace from "../../assets/home/images/modern-workplace.png";
import Service from "../../assets/home/images/s-curit.png";
import IconButtonCard from "../global/Icon_button_card";

import  FormesImageGreen from '../../assets/expertise/cloud/vert-mini.svg';
import  FormesImageBlue from '../../assets/expertise/cloud/bleu-mini.svg';

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

];

class OtherExpertise extends React.Component{

    state = {
        items: items
    }

    handleMouseEnter = (id) => {
        const { items } = this.state;
        items.forEach((item) => {
            if (item.id === id) {
                item.active = true
            } else {
                item.active = false
            }
        })

        this.setState({ items: items })
    }

    handleMoustLeave = (id) => {
        const { items } = this.state;
        items.forEach((item) => {
            if (item.id === id) {
                item.active = false
            }
        })

        this.setState({ items: items })
    }

    render()
    {
        return (
          <div className={'other-expertise'}>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-lg-12 text-center'}>
                        <div className={'title-area'}>
                            <h1 style={{color: this.props.theme.mainColor}}>
                                Nos autres expertises
                            </h1>
                            <p style={{color: this.props.theme.mainColor}}>
                                Nous agrégeons les meilleures technologies IT pour qu’elles puissent vous être bénéfiques au quotidien.s
                            </p>
                        </div>
                    </div>
                    <div className={'col-lg-12'}>
                        <div className={'row card-area'}>
                            <div className={'top-right-img'}/>
                            <img src={FormesImageGreen} alt="" className={'bottom-right-img'}/>
                            <img src={FormesImageBlue} alt="" className={'top-left-img'}/>
                            {
                                items.map((item, index) => (
                                    <div key={index} className="col-md-6 col-lg-3">
                                        <IconButtonCard
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
            </div>
          </div>
        );
    }
}

export default OtherExpertise