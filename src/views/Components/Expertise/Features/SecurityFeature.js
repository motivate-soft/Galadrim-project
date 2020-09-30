import React from 'react'


export default function SecurityFeature(props) {
    const { color, items } = props
    return (
        <div className='section expertise-feature'>
            <div className="container">
                <div className="custom-container">
                    <div className="features-wrapper security-rgpd-background">
                        <h1 className={color ? `block-title text-${color}` : `block-title text-green`}>Notre Expertise</h1>
                        <div className="row">
                            {
                                items.map((item, index) => (
                                    <div key={index} className="col-12 col-sm-12 col-md-6 col-lg-4 mb-4">
                                        <div className="expertise-feature-card">
                                            <img className="mx-auto" src={item.img} alt={item.title} />
                                            <h4 className={`text-${color ? color : `green`} text-center`}>{item.title}</h4>
                                            <h5 className="text-darkblue text-center mx-auto">{item.subtitle}</h5>
                                            {
                                                item.details.map((text, idx) => (
                                                    <li key={idx}>{text}</li>
                                                ))
                                            }
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
