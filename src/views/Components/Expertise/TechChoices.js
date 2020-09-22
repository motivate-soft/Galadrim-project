import React from 'react'
import { Image } from './../Elements/CustomImages';
import { BlockTitle } from './../Elements/Typography';



export default function TechChoices(props) {
    const { color, logos } = props
    return (
        <div className="section expertise-tech-block">
            <div className="container">
                <h1 className={color ? `block-title text-${color}` : `block-title text-green`}>Nos choix technologiques</h1>
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
