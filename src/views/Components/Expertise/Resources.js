import React from 'react'
import styled from 'styled-components'
import VGradientCard from '../Common/VGradientCard';
import ArticleCard from '../Common/ArticleCard';
import { BlockTitle } from './../Elements/Typography';
import { CustomButton } from '../Elements/Buttons';
import { RightRoundedSemiCircle } from '../Elements/Drawings';

const ResourceButton = styled(CustomButton)`
    display: block;
    color: #ffffff;
    margin: 37px auto 75px;
    padding: 5px 45px;
    @media (max-width: 768px){
        margin: 0 auto 54px;
    }
`

export default function Resources(props) {
    const { color, articles } = props

    return (
        <div className="section expertise-resources-block">
            <RightRoundedSemiCircle width={55} height={110} className={color ? `bottom-left transform-bottom-50 bg-${color}` : `bottom-left transform-bottom-50 bg-green`} />
            <div className="container">
                <h1 className={color ? `block-title text-${color}` : `block-title text-green`}>Ressources associées</h1>
                <div className="articles-container">
                    <div className="row">
                        {
                            articles.map((article, index) => (
                                <div key={index} className="col-12 col-sm-12 col-md-6 col-lg-3 mb-4">
                                    <VGradientCard maxWidth={276}>
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
            <ResourceButton className={color ? `bg-${color}` : 'bg-green'}>Voir tous les articles</ResourceButton>
        </div>
    )
}
