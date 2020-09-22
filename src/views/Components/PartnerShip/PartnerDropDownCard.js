import React, { Component } from 'react'
import { FaAngleDoubleDown, FaAngleDoubleUp } from 'react-icons/fa'
import { GrayButton } from './../Elements/Buttons';



export default class PartnerDropDownCard extends Component {
    render() {
        const { item, onClick } = this.props
        const { id, active, title, features, image, name } = item
        return (
            <div className="partner-card">
                <div className="partner-logo">
                    <img src={image} alt={name} className="mx-auto" />
                </div>
                <div className="arrow-control" onClick={() => onClick(id)}>
                    {
                        active === true ? <FaAngleDoubleUp /> : <FaAngleDoubleDown />
                    }
                </div>
                <div className={active === true ? 'd-block partner-features' : 'd-none'}>
                    <h4>{title}</h4>
                    <ul>
                        {
                            features.map((item, index) => (<li key={index}>{item}</li>))
                        }
                    </ul>
                    <GrayButton className="py-1 px-3 mx-auto">En savoir plus</GrayButton>
                </div>
            </div>
        )
    }
}
