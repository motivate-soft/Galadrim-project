import React from 'react'

import ArticleImage from "../../../assets/Images/demo.jpg"
import ArticleCard from './ArticleCard';
import VGradientCard from './VGradientCard';
import { RightRoundedSemiCircle } from '../Elements/Drawings'
import { OrangeButton } from '../Elements/Buttons';
import styled from 'styled-components';


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

const ArticleButton = styled(OrangeButton)`
    padding: 4px 45px;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: 768px){
        margin-top: 0 !important;
    }
`

export default function EfisensLab(props) {
    return (
        <div className="section home-articles-block">
            <RightRoundedSemiCircle className="position-absolute bottom-left transform-bottom-50" />
            <div className="container text-center text-darkblue">
                <h1 className="block-title">Efisens Lab</h1>
                <p className="text-primary mx-auto">Restez à l'écoute du marché IT à l'aide de nos articles les plus récents en matière d'expérience digitale, de nos études de cas et de nos conseils pratiques.</p>
            </div>
            <div className="container">
                {/* <img src={OrangeDotsGrid} className='position-absolute bottom-left' alt='orange grid dots' />
                <img src={GreenDotsGrid} className='position-absolute top-right' alt='green grid dots' /> */}
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
            <ArticleButton top={32} bottom={84}>Vois tous les articles</ArticleButton>
        </div>
    )

}
