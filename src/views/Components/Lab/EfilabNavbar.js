import React from 'react'
import Cloud from '../../../assets/Images/efilab/cloud.svg'
import Workplace from '../../../assets/Images/efilab/modern-workplace.svg'
import ManagedService from '../../../assets/Images/efilab/managed-service.svg'
import Security from '../../../assets/Images/efilab/security.svg'
import ProductGuide from '../../../assets/Images/efilab/product-guide.svg'
import { Link, useHistory } from 'react-router-dom';
import { FaLock } from 'react-icons/fa';
import { IconButton } from './../Elements/Buttons';

const categories = [
    {
        id: 1,
        title: 'Cloud',
        content: 'Adopter des solutions cloud hybrides',
        image: Cloud,
    },
    {
        id: 2,
        title: 'Modern Workplace',
        content: 'Moderniser vos environnements de travail',
        image: Workplace,
    },
    {
        id: 3,
        title: 'Sécurité',
        content: 'Protéger vos données, votre infrastructure et vos utilisateurs',
        image: Security,
    },
    {
        id: 1,
        title: 'Services Managés',
        content: 'Superviser et surveiller votre système IT',
        image: ManagedService,
    },
    {
        id: 1,
        title: 'Guide produits',
        content: 'Apprenez à utiliser les outils Efisens',
        image: ProductGuide,
    },
]

export default function EfilabNavbar() {
    const history = useHistory()
    return (
        <nav className="navbar efilab-nav">
            <div className="navbar-brand  mr-2"><Link className="efilab-logo" to="/">Efisens Lab</Link></div>
            <div className="navbar-collapse ">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/who-we-are">Tous les articles</Link>
                    </li>
                    {
                        categories.map((item, index) => (
                            <li key={index} className="nav-item">
                                <div className="efilab-category-link" onClick={() => history.push(`/efilab/${item.title}`)}>
                                    <div className="link-image-wrapper">
                                        <img src={item.image} alt="efilab-category" />
                                    </div>
                                    <div className="link-text-wrapper">
                                        <p className="text-sm text-darkblue text-left m-0 pb-1">{item.title}</p>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <IconButton backgroundColor="#ff5e4d" color="#ffffff"><FaLock />Efisens.fr</IconButton>
        </nav>
    )
}
