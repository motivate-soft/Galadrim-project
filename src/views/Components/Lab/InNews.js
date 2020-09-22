import React from 'react'
import Demo from "../../../assets/Images/demo.jpg"
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom';


export default function InNews() {
    return (
        <div className="section lab-innews">
            <div className="container">
                <h1 className="text-darkblue">À la une</h1>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 d-flex">
                        <div className="innews-image-card">
                            <img src={Demo} alt="News Demo" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6">
                        <div className="innews-card">
                            <div className="news-info">
                                <p><span>Cloud</span>• 5 minutes</p>
                            </div>
                            <h3>Enjeux et bénéfices de la dématérialisation informatique</h3>
                            <p>Si sine metu contineret, saluti prospexit civium, qua intellegebat contineri suam atque corrupti. Hanc ego assentior, cum teneam sententiam, quid malum  </p>
                            <span className="pub-date">Publié le 20 août 2020</span>
                            <Link to="/" className="article-link">Lire l’article<FaArrowRight /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
