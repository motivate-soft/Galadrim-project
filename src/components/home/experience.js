import React from 'react';

import ArticleImage from '../../assets/home/images/article.jpg'
import ArticleItem from "./article_item";



const items = [
    {
        id: '1',
        img: ArticleImage,
        title: 'Enjeux et bénéfices de la dématérialisation informatique',
        text: 'Si sine metu contineret, saluti prospexit civium, qua intellegebat contineri.',
        buttonText: 'Lire l’article',
        active: false,
        tagClass: 'badge badge-danger',
        tagText: 'Univers',
        timeText: '5 Minutes'
    },
    {
        id: '2',
        img: ArticleImage,
        title: 'Enjeux et bénéfices de la dématérialisation informatique',
        text: 'Si sine metu contineret, saluti prospexit civium, qua intellegebat contineri.',
        buttonText: 'Lire l’article',
        active: false,
        tagClass: 'badge badge-success',
        tagText: 'Univers',
        timeText: '5 Minutes'
    },
    {
        id: '3',
        img: ArticleImage,
        title: 'Enjeux et bénéfices de la dématérialisation informatique',
        text: 'Si sine metu contineret, saluti prospexit civium, qua intellegebat contineri.',
        buttonText: 'Lire l’article',
        active: false,
        tagClass: 'badge badge-danger',
        tagText: 'Univers',
        timeText: '5 Minutes'
    },
    {
        id: '4',
        img: ArticleImage,
        title: 'Enjeux et bénéfices de la dématérialisation informatique',
        text: 'Si sine metu contineret, saluti prospexit civium, qua intellegebat contineri.',
        buttonText: 'Lire l’article',
        active: false,
        tagClass: 'badge badge-success',
        tagText: 'Univers',
        timeText: '5 Minutes'
    },
]

class Experience extends React.Component {
    state = {
        items: items
    }

    handleMouseEnter = (id) => {
        const { items } = this.state;
        items.map((item, index) => {
            if (item.id === id) {
                item.active = true
            } else {
                item.active = false
            }
        })

        this.setState({ items: items })
    }

    handleMoustLeave = (id) => {
        const { items } = this.state;
        items.map((item, index) => {
            if (item.id === id) {
                item.active = false
            }
        })

        this.setState({ items: items })
    }

    render() {
        return (
            <div className="experience-block">
                <div className='position-absolute green-left-bottom-semi-circle'/>
                <div className="container">
                    <div className="text-blue text-center w-75 mx-auto">
                        <h1 className="font-weight-bold mx-auto title">Efisens Lab</h1>
                        <div className="subtitle-container">
                            <p className="roboto-font">
                                Restez à l'écoute du marché IT à l'aide de nos articles les plus récents en matière<br/>
                                d'expérience digitale, de nos études de cas et de nos conseils pratiques.
                            </p>
                        </div>
                    </div>
                    <div className="features-block mt-5">
                        <div className="row">
                            {
                                items.map((item, index) => (
                                    <div key={index} className="col-md-6 col-lg-3">
                                        <ArticleItem
                                            id={item.id}
                                            active={item.active}
                                            img={item.img}
                                            title={item.title}
                                            text={item.text}
                                            tagClass={item.tagClass}
                                            tagText={item.tagText}
                                            timeText={item.timeText}
                                            buttonText={item.buttonText}
                                            onMouseEnter={this.handleMouseEnter}
                                            onMouseLeave={this.handleMoustLeave}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 mt-5 text-center" style={{marginBottom:'76px'}}>
                            <button className="btn btn-danger btn-custom" style={{'padding': '5px 30px'}}>
                                Voir tous les articles
                            </button>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Experience;
