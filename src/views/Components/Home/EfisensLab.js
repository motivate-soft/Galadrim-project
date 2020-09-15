import React from 'react'
import { Container, Col, Row, InputGroup, FormGroup } from 'react-bootstrap'

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUser } from '@fortawesome/free-solid-svg-icons'

// library.add(faUser);
import ArticleImage from "../../../assets/Images/demo.jpg"
import OrangeDotsGrid from "../../../assets/Shapes/drawings/orange-mini.png"
import GreenDotsGrid from "../../../assets/Shapes/drawings/vert-mini.png"
import ArticleCard from '../Common/ArticleCard';
import VGradientCard from '../Common/VGradientCard';
import { RightRoundedSemiCircle } from '../Elements/Drawings'


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
]

export default function EfisensLab(props) {
    return (
        <div className="articles-block">
            <RightRoundedSemiCircle className="position-absolute bottom-left transform-bottom-50" />
            <Container className="text-center text-blue">
                <h1>Efisens Lab</h1>
                <p className="w-75 mx-auto">Restez à l'écoute du marché IT à l'aide de nos articles les plus récents en matière d'expérience digitale, de nos études de cas et de nos conseils pratiques.</p>
            </Container>
            <Container className="p-4 mt-5">
                <img src={OrangeDotsGrid} className='position-absolute bottom-left grid-dots' alt='orange grid dots' />
                <img src={GreenDotsGrid} className='position-absolute top-right grid-dots' alt='green grid dots' />
                <div className="row">
                    {
                        articles.map((article, index) => (
                            <Col key={index} sm={12} md={6} xl={3} className="mb-4">
                                <VGradientCard
                                    // maxWidth={300}
                                >
                                    <ArticleCard
                                        key={index}
                                        id={article.id}
                                        title={article.title}
                                        text={article.text}
                                        img={article.image}
                                        tag={article.tag}
                                        time={article.time} />
                                </VGradientCard>
                            </Col>
                        ))
                    }
                </div>
            </Container>
            <div className="d-flex justify-content-center">
                <button className="bg-orange text-white rounded border-0 my-5 px-5 py-2">Vois tous les articles</button>
            </div>
        </div>
    )

}
