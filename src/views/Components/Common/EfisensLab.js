import React from 'react'

import GreenMiniImage from '../../../assets/Shapes/drawings//green-mini.svg'
import OrangeMiniImage from '../../../assets/Shapes/drawings//orange-mini.svg'
import ArticleImage from "../../../assets/Images/demo.jpg"

import ArticleCard from './ArticleCard';
import VGradientCard from './VGradientCard';
import { RightRoundedSemiCircle } from '../Elements/Drawings'


const articles = [
    {
        id: 1,
        title: "Enjeux et bénéfices de la dématérialisation informatique",
        text: "Si sine metu contineret, saluti prospexit civium, qua intellegebat contineri.",
        image: ArticleImage,
        tag: "Univers",
        time: 5
    },
    {
        id: 2,
        title: "Enjeux et bénéfices de la dématérialisation informatique",
        text: "Si sine metu contineret, saluti prospexit civium, qua intellegebat contineri.",
        image: ArticleImage,
        tag: "Univers",
        time: 5
    },
    {
        id: 3,
        title: "Enjeux et bénéfices de la dématérialisation informatique",
        text: "Si sine metu contineret, saluti prospexit civium, qua intellegebat contineri.",
        image: ArticleImage,
        tag: "Univers",
        time: 5
    },
    {
        id: 4,
        title: "Enjeux et bénéfices de la dématérialisation informatique",
        text: "Si sine metu contineret, saluti prospexit civium, qua intellegebat contineri.",
        image: ArticleImage,
        tag: "Univers",
        time: 5
    },
]


export default function EfisensLab(props) {
    return (
        <div className="section home-articles-block">
            <RightRoundedSemiCircle className="bottom-left transform-bottom-50" />
            <div className="container text-center text-darkblue">
                <h1 className="block-title">Efisens Lab</h1>
            </div>
            <div className="container">
                <div className="custom-container">
                    <img src={OrangeMiniImage} className='bottom-left' alt='orange mini' />
                    <img src={GreenMiniImage} className='top-right' alt='green mini' />
                    <div className="articles-container ">
                        <div className="row">
                            {
                                articles.map((article, index) => (
                                    <div key={index} className="col-12 col-md-6 col-lg-3 mb-4">
                                        <VGradientCard
                                            maxWidth={325}
                                        >
                                            <ArticleCard
                                                key={index}
                                                id={article.id}
                                                title={article.title}
                                                text={article.text}
                                                img={article.image}
                                                tag={article.tag}
                                                time={article.time} />
                                        </VGradientCard>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <button className="btn btn-custom btn-orange">Vois tous les articles</button>
            </div>
        </div>
    )

}
