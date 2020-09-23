import React from 'react'
import Demo from "../../../assets/Images/efilab/article.jpg"
import NewsBox from './NewsBox';

const news = {
    id: 1,
    category: 'Cloud',
    title: 'Enjeux et bénéfices de la dématérialisation informatique',
    content: 'Si sine metu contineret, saluti prospexit civium, qua intellegebat contineri suam atque corrupti. Hanc ego assentior, cum teneam sententiam, quid malum  ',
    image: Demo,
    date: '2020-8-10',
    time: 5,
}

export default function InNews() {
    return (
        <div className="section efilab-innews">
            <div className="container">
                <h1 className="block-title-secondary text-darkblue">À la une</h1>
                <NewsBox news={news} />
            </div>
        </div>
    )
}
