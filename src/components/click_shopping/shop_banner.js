import React from 'react';
import RightTopImage from '../../assets/formes/charts/service-manag.svg';

export default function ShopBanner() {
    return (
        <div className={'shop_banner'}>
            <img src={RightTopImage} className={'right_top_image'} alt=""/>
            <img src={RightTopImage} className={'left_top_image'} alt=""/>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-lg-10 ml-auto mr-auto'}>
                        <h1>Efisens Clic & Shop</h1>
                    </div>
                    <div className={'col-lg-8 ml-auto mr-auto'}>
                        <p>Votre boutique en ligne pour tout votre matériel informatique</p>
                    </div>
                </div>
            </div>
        </div>
    );
}