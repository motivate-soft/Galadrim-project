import React from 'react'
import HomeGroup from '../../../assets/Images/group-3@3x.png'
import BackGroup from '../../../assets/Images/group-2@3x.png'
import { OrangeButton } from "../Elements/Buttons";
import styled from 'styled-components';

const ShopButton = styled(OrangeButton)`

    padding: 4px 45px;
    margin-left: auto;
    margin-right: auto;
`

export default function EfisensShop() {
    return (
        <div className="section home-efisens-shop-block">
            <div className="container text-center text-darkblue">
                <h1 className="block-title">Efisens Clic & Shop</h1>
                <p className="text-primary">Vos achats informatiques d'entreprise en toute simplicité.</p>
                <img src={HomeGroup} alt="HomeGroup" className="main-img" />
                <div className="shop-background">
                    <img src={BackGroup} alt="BackGroup" className="w-100 mx-auto my-auto bg-img" />
                    <img src={HomeGroup} alt="HomeGroup" className="fg-img" />
                </div>
                <ShopButton className="d-block mx-auto" bottom={75}>Découvrir notre boutique</ShopButton>
            </div>
        </div>
    )
}
