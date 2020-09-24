import React from 'react'
import RoundedOrangeImage from '../../../assets/Shapes/rounded-angle/orange-rounded.svg'

export default function BannerFormCard(props) {
    return (
        <div className="banner-form">
            {/* <img src={RoundedOrangeImage} alt="background" className="top-right" /> */}
            <div className="banner-form-header text-center">
                <h4 className="text-darkblue">{props.formTitle}</h4>
                <h5>{props.formSubtitle}</h5>
            </div>
            {props.children}
            <p>{props.formDescription}</p>
        </div>
    )
}
