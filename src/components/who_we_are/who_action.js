import React from 'react';
import LeftImage from '../../assets/home/images/left_bg.png';
import RightImage from '../../assets/home/images/right_bg.png'

export default function WhoAction() {
    return(
        <div className="who_action">
            <img src={LeftImage} className="right_img" alt=""/>
            <img src={RightImage} className="left_img" alt=""/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center center-content" style={{'height': '441px'}}>
                        <div>
                            <h2 className="text-danger" style={{fontSize:'41px', fontWeight:'700'}}>Votre partenaire technologique ...<br/>
                                avec vous et pour longtemps </h2>
                            <button className="btn btn-custom btn-danger mt-4" style={{'padding': '5px 50px'}}>
                                Contactez-nous
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}