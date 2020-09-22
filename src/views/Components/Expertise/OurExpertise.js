import React from 'react';

import BlueDotsGrid from "../../../assets/Shapes/drawings/blue-mini.svg"
import GreenDotsGrid from "../../../assets/Shapes/drawings/green-mini.svg"
import OrangeRounded from "../../../assets/Shapes/rounded-angle/orange-rounded@3x.png"
import ExpertiseCard from '../Common/ExpertiseCard';
import DGradientCard from '../Common/DGradientCard';


export default function OurExpertise(props) {
    const { color, data } = props;
    const { title, subtitle, items } = data;
    return (
        <div className="section expertise-ourexpertise-block">
            <div className="container">
                <h1 className={color ? `block-title text-${color}`: `block-title text-green`}>{title}</h1>
                <p className={color ? `block-subtitle text-${color}`: `block-subtitle text-green`}>{subtitle}</p>
                <div className="expertise-containter">
                    <div className="row position-relative p-4">
                        <img src={BlueDotsGrid} alt="blue grid dots" className="top-left" />
                        <img src={GreenDotsGrid} alt="green grid dots" className="bottom-right" />
                        <img src={OrangeRounded} alt="orange rounded" className="top-right" />
                        {
                            items.map((item, index) => (
                                <div key={index} className="col-12 col-sm-12 col-md-6 col-lg-4 mb-4">
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
                </div>
            </div>
        </div >
    );
}

