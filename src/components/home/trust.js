import React from 'react';

import TrustImage1 from '../../assets/home/images/bpi.png'
import TrustImage2 from '../../assets/home/images/emil-frey-france.png'
import TrustImage3 from '../../assets/home/images/0.png'
import TrustImage4 from '../../assets/home/images/astorg.png'
import TrustImage5 from '../../assets/home/images/logo-echosens-gradient.png'

export default function Trust() {
    return(
        <div style={{'position': 'relative'}}>
            <div className= 'position-absolute green-right-top-semi-circle' style={{'bottom': '-60px'}}/>
            <div className="container mt-5 p-5">
                <h4 className="text-blue text-center">Ils nous font confiance</h4>
                <div className="row justify-space-between mt-3 align-center">
                    <div className="col-lg-2">
                        <img src={TrustImage1} alt=""/>
                    </div>
                    <div className="col-lg-2">
                        <img src={TrustImage2} alt=""/>
                    </div>
                    <div className="col-lg-2">
                        <img src={TrustImage3} alt=""/>
                    </div>
                    <div className="col-lg-2">
                        <img src={TrustImage4} alt=""/>
                    </div>
                    <div className="col-lg-2">
                        <img src={TrustImage5} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
}