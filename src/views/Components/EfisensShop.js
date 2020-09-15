import React from 'react'
import { Container } from 'react-bootstrap'
import HomeGroup from '../../assets/Images/group-3@3x.png'
import BackGroup from '../../assets/Images/group-2@3x.png'


export default function EfisensShop() {
    return (
        <div className="efisens-shop">
            <Container className="text-center text-blue">
                <h1 className="font-weight-bold">Efisens Clic & Shop</h1>
                <p>Vos achats informatiques d'entreprise en toute simplicité.</p>
                <img src={HomeGroup} alt="HomeGroup" className="w-75 mx-auto" />
                <button className="btn d-block mx-auto text-white bg-orange">Découvrir notre boutique</button>
            </Container>
        </div>
    )
}
