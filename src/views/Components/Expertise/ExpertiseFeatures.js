import React from 'react'
import DGradientCard from '../Common/DGradientCard';
import styled from 'styled-components';
import { BlockTitle } from './../Elements/Typography';

const ExpertiseBlockTitle = styled(BlockTitle)`
    margin-top: 78px;
    margin-bottom: 77px;
    @media (max-width: 768px){
        margin-top: 69px;
        margin-bottom: 36px;
    }
`

const FeatureCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 19px 15px 20px;   
    background-color: #ffffff;
    border-radius: 13px;
    img {
        width: 90px;
        height: 90px;
        margin: 0 auto;
    }
    h4{
        margin: 10px auto 19px ;
        color: ${props => props.color ? props.color : '#ffffff'};
    }
    h5{
        max-width: 300px;
        margin: 0 auto 30px !important;
    }
    li {
            font-family: 'RobotoMono-Medium';
            font-size: 12px;
            text-align: center;
        }
    
`

export default function ExpertiseFeatures(props) {
    const { color, items } = props
    return (
        <div className="section expertise-features">
            <div className="container">
                <ExpertiseBlockTitle color={color}>Notre Expertise</ExpertiseBlockTitle>
                <div className="row">
                    {
                        items.map((item, index) => (
                            <div key={index} className="col-12 col-sm-12 col-md-6 col-lg-4 mb-4">
                                <DGradientCard key={index} minHeight={397} className="w-100" notMove>
                                    <FeatureCard>
                                        <img className="mx-auto" src={item.img} alt={item.title} />
                                        <h4 className="text-darkblue text-center">{item.title}</h4>
                                        <h5 className="text-darkblue text-center mx-auto">{item.subtitle}</h5>
                                        {
                                            item.details.map((text, idx) => (
                                                <li key={idx}>{text}</li>
                                            ))
                                        }
                                    </FeatureCard>
                                </DGradientCard>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
