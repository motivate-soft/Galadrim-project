import React, { useState } from 'react'
import styled from 'styled-components'
import VGradientCard from '../Common/VGradientCard';
import ArticleCard from '../Common/ArticleCard';
import OrangeDotsGrid from "../../../assets/Shapes/drawings/orange-mini.png"
import GreenDotsGrid from "../../../assets/Shapes/drawings/green-mini.svg"
import { BlockTitle, Subtitle } from './../Elements/Typography';
import { CustomButton } from '../Elements/Buttons';

const ResourceButton = styled(CustomButton)`
    margin-top: 59px;
    padding: 5px 45px;
    margin-bottom: 75px;
`

const SemiCircle = styled.div`
    position: absolute;
    width: 55px;
    height: 110px;
    border-radius: 0 55px 55px 0;
    left: 0;
    bottom: 0;
    transform: translate(0, 50%);
    background-color: ${props => props.color};
`

export default function Resources(props) {
    const { color, articles } = props

    return (
        <div className="section resources-block position-relative d-flex">
            <SemiCircle color={color} />
            <div className="container">
                <BlockTitle color={color} top={135} bottom={68}>Ressources associées</BlockTitle>
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

                <ResourceButton backgroundColor={color} className="text-white d-block mx-auto">Voir tous les articles</ResourceButton>
            </div>
        </div>
    )
}
