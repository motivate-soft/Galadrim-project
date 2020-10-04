import React from 'react'
import HomeGroup from '../../../assets/Images/home/group-3@3x.png'


export default function EfisensShop() {
    return (
        <div className="section home-efisens-shop-block">
            <div className="container">
                <h1 className="block-title">Efisens Clic & Shop</h1>
                <p className="text-primary">Vos achats informatiques d'entreprise en toute simplicité.</p>
                <button className="btn btn-custom btn-orange">Découvrir notre boutique</button>
                <div className="shop-background">
                    <img src={HomeGroup} alt="HomeGroup" className="fg-img" />
                </div>
            </div>
        </div>
    )
}
