import React from 'react'
import { Image } from './../Elements/CustomImages';
import { BlockTitle } from './../Elements/Typography';



export default function TechChoices(props) {
    const { color, logos } = props
    return (
        <div className="section" color={color}>
            <div className="container">
                <BlockTitle color={color} top={135} bottom={102}>Nos choix technologiques</BlockTitle>
                <div className="row justify-content-center">
                    {
                        logos.map((logo, index) => (
                            <div key={index} className="col-6 col-lg-4 d-flex justify-content-center align-items-center px-3 py-4">
                                <Image src={logo.src} alt={logo.alt} maxWidth={logo.maxWidth} className="w-100 mx-auto" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
