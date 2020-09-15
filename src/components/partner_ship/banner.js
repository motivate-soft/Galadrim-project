import React from 'react';
import RightBottomImage from '../../assets/formes/charts/cloud.svg';
import LeftBottomImage from '../../assets/formes/charts/modern-workplace.svg';

export default function PartnerBanner() {
    return(
        <div className={'partner_banner'}>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-lg-8 ml-auto mr-auto'}>
                        <div className={'title-area'}>
                            <h1>
                                Notre écosystème Efisens
                            </h1>
                        </div>
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'col-lg-6 ml-auto mr-auto'}>
                        <div className={'content-area'}>
                            <p>
                                Accélérer l'innovation grâce à un écosystème de partenaires riche par sa diversité. Nous croyons en la puissance de partenariats technologiques solides. C'est pourquoi nous engageons, contribuons et soutenons si fortement notre communauté de partenaires !
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <img src={RightBottomImage} className={'right_bottom_image'} alt=""/>
            <img src={LeftBottomImage} className={'left_bottom_image'} alt=""/>
        </div>
    );
}