import React from 'react'
import Demo from "../../../assets/Images/efilab/article.jpg"

export default function HomeNews() {
    return (
        <div className="section home-news-block">
            <div className="container">
                <h1 className="block-title text-darkblue">Actu #Efisens</h1>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 d-flex">
                        <div className="article-image-card">
                            <img src={Demo} alt="News" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6">
                        <div className="article-summary-card">
                            <h3>Enjeux et bénéfices de la dématérialisation informatique</h3>
                            <p>Si sine metu contineret, saluti prospexit civium, qua intellegebat contineri.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
