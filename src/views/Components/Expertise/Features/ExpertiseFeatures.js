import React from 'react'
import styled from 'styled-components';


const FeatureCard = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 376px;
    min-height: 397px;
    width: 100%;
    padding: 19px 14px 20px;   
    background-color: #ffffff;
    border-radius: 13px;
    img {
        width: 90px;
        height: 90px;
        margin: 0 auto;
    }
    h4{
        margin: 10px auto 16px;
        font-family: Gilroy-Bold;
        font-size: 24px;
        line-height: 1;
    }
    h5{
        margin: 0 auto 8px !important;
        font-family: Gilroy-Bold;
        font-size: 16px;
        line-height: 1;
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
