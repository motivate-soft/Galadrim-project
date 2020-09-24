import React from 'react'
import DGradientCard from '../Common/DGradientCard';
import styled from 'styled-components';



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
    }
    h5{
        max-width: 300px;
        margin: 0 auto 30px !important;
    }
    li {
        font-family: 'RobotoMono-Regular';
        font-size: 12px;
        line-height: 1.57;
        text-align: center;
        color: #001a5c;
    }
    
`

export default function ExpertiseFeatures(props) {
    const { color, items, featureBackground } = props
    return (
        <div className='section expertise-features'>
            <div className="container">
                <div className={`${featureBackground ? "features-wrapper security-rgpd-background" : "features-wrapper"}`}>
                    <h1 className={color ? `block-title text-${color}` : `block-title text-green`}>Notre Expertise</h1>
                    <div className="row">
                        {
                            items.map((item, index) => (
                                <div key={index} className="col-12 col-sm-12 col-md-6 col-lg-4 mb-4">
                                    <FeatureCard>
                                        <img className="mx-auto" src={item.img} alt={item.title} />
                                        <h4 className={`text-${color ? color : `green`} text-center`}>{item.title}</h4>
                                        <h5 className="text-darkblue text-center mx-auto">{item.subtitle}</h5>
                                        {
                                            item.details.map((text, idx) => (
                                                <li key={idx}>{text}</li>
                                            ))
                                        }
                                    </FeatureCard>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
