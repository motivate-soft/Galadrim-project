import React from 'react'

import Cloud from '../../../assets/Images/efilab/cloud.svg'
import Workplace from '../../../assets/Images/efilab/modern-workplace.svg'
import ManagedService from '../../../assets/Images/efilab/managed-service.svg'
import Security from '../../../assets/Images/efilab/security.svg'
import ProductGuide from '../../../assets/Images/efilab/product-guide.svg'
import ArticleImage from "../../../assets/Images/demo.jpg"


import CategoryLink from './CategoryLink';
import ArticleCard from './../Common/ArticleCard';
import DGradientCard from './../Common/DGradientCard';
import { RightRoundedSemiCircle } from './../Elements/Drawings';
import SearchInput from './SearchInput';

const categories = [
    {
        id: 1,
        title: 'Cloud',
        subLink: 'cloud',
        content: 'Adopter des solutions cloud hybrides',
        image: Cloud,
    },
    {
        id: 2,
        title: 'Modern Workplace',
        subLink: 'workplace',
        content: 'Moderniser vos environnements de travail',
        image: Workplace,
    },
    {
        id: 3,
        title: 'Sécurité',
        subLink: 'security',
        content: 'Protéger vos données, votre infrastructure et vos utilisateurs',
        image: Security,
    },
    {
        id: 4,
        title: 'Services Managés',
        subLink: 'service',
        content: 'Superviser et surveiller votre système IT',
        image: ManagedService,
    },
    {
        id: 5,
        title: 'Guide produits',
        subLink: 'products',
        content: 'Apprenez à utiliser les outils Efisens',
        image: ProductGuide,
    },
]

const articles = [
    {
        id: 1,
        title: "Enjeux et bénéfices de la dématérialisation informatique",
        text: "Si sine metu contineret, saluti prospexit civium, qua intellegebat contineri.",
        image: ArticleImage,
        tag: "Univers",
        time: 5
    },
    {
        id: 2,
        title: "Enjeux et bénéfices de la dématérialisation informatique",
        text: "Si sine metu contineret, saluti prospexit civium, qua intellegebat contineri.",
        image: ArticleImage,
        tag: "Univers",
        time: 5
    },
    {
        id: 3,
        title: "Enjeux et bénéfices de la dématérialisation informatique",
        text: "Si sine metu contineret, saluti prospexit civium, qua intellegebat contineri.",
        image: ArticleImage,
        tag: "Univers",
        time: 5
    },
    {
        id: 4,
        title: "Enjeux et bénéfices de la dématérialisation informatique",
        text: "Si sine metu contineret, saluti prospexit civium, qua intellegebat contineri.",
        image: ArticleImage,
        tag: "Univers",
        time: 5
    },
    {
        id: 5,
        title: "Enjeux et bénéfices de la dématérialisation informatique",
        text: "Si sine metu contineret, saluti prospexit civium, qua intellegebat contineri.",
        image: ArticleImage,
        tag: "Univers",
        time: 5
    },
    {
        id: 6,
        title: "Enjeux et bénéfices de la dématérialisation informatique",
        text: "Si sine metu contineret, saluti prospexit civium, qua intellegebat contineri.",
        image: ArticleImage,
        tag: "Univers",
        time: 5
    },
]

export default function SearchArticle() {
    return (
        <div className="section efilab-search-block">
            <RightRoundedSemiCircle className="bottom-left" />
            <div className="container">
                <h1 className="block-title-md text-darkblue">Derniers articles</h1>
                <SearchInput type="text" placeholder="     Rechercher un article" className="article-search-form" />
                <h5>Filtrer par expertises</h5>
                <div className="article-category-container">
                    <div className="row d-flex justify-content-center">
                        {
                            categories.map((item, index) => (
                                <div key={index} className="col-12 col-sm-12 col-md-4 mb-4">
                                    <CategoryLink id={item.id} title={item.title} content={item.content} subLink={item.subLink} image={item.image} />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="custom-container">
                    <div className="article-container">
                        <div className="row">
                            {
                                articles.map((article, index) => (
                                    <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
                                        <DGradientCard
                                            maxWidth={376}
                                        >
                                            <ArticleCard
                                                key={index}
                                                id={article.id}
                                                title={article.title}
                                                text={article.text}
                                                img={article.image}
                                                tag={article.tag}
                                                time={article.time} />
                                        </DGradientCard>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <button className="btn btn-custom btn-gray">Charger plus d'articles</button>
                </div>
            </div>

        </div>
    )
}
