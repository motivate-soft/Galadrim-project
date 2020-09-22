import React from 'react';


import BlueDotsGrid from "../../../assets/Shapes/drawings/blue-mini.svg"
import GreenDotsGrid from "../../../assets/Shapes/drawings/green-mini.svg"
import OrangeRounded from "../../../assets/Shapes/rounded-angle/orange-rounded@3x.png"
import ExpertiseCard from '../Common/ExpertiseCard';
import DGradientCard from '../Common/DGradientCard';
import styled from 'styled-components';
import { BlockTitle, Subtitle } from './../Elements/Typography';


const CustomContainer = styled.div`
    max-width: max-content;
    margin: auto;
    
    img.top-left{
        z-index: -1;
        height: 135px;
        width: 111px;
    }
    img.bottom-right{
        z-index: -1;
        height: 135px;
        width: 111px;
    }
    img.top-right{
        z-index: -1;
        height: 60px;
        width: 60px;
    }
`

export default function OurExpertise(props) {
    const { color, data } = props;
    const { title, subtitle, items } = data;
    return (
        <div className="section">
            <div className="container">
                <BlockTitle color={color} top={70} bottom={30}>{title}</BlockTitle>
                <Subtitle color={color} maxWidth={570} top={0} bottom={70}>{subtitle}</Subtitle>
                <CustomContainer>
                    <div className="row position-relative p-4">
                        <img src={BlueDotsGrid} alt="blue grid dots" className="top-left" />
                        <img src={GreenDotsGrid} alt="green grid dots" className="bottom-right" />
                        <img src={OrangeRounded} alt="orange rounded" className="top-right" />
                        {
                            items.map((item, index) => (
                                <div key={index} className="col-12 col-sm-6 col-lg-4 mb-4">
                                    <DGradientCard
                                        maxWidth={276}
                                        minHeight={386}
                                    >
                                        <ExpertiseCard
                                            id={item.id}
                                            img={item.img}
                                            title={item.title}
                                            text={item.text} />
                                    </DGradientCard>
                                </div>
                            ))
                        }
                    </div>
                </CustomContainer>
            </div>

        </div >
    );
}

