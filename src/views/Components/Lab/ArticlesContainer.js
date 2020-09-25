import React from 'react'
import ArticleBox from './ArticleBox'
import EfisensTalk from './EfisensTalk'
import Demo from "../../../assets/Images/efilab/article.jpg"
import SearchInput from './SearchInput'

const news = {
    id: 1,
    category: 'Cloud',
    title: 'Enjeux et bénéfices de la dématérialisation informatique',
    content: 'Si sine metu contineret, saluti prospexit civium, qua intellegebat contineri suam atque corrupti. Hanc ego assentior, cum teneam sententiam, quid malum  ',
    image: Demo,
    date: '2020-8-10',
    time: 5,
}

export default function ArticlesContainer() {
    return (
        <div className="section articles-block">
            <div className="container">
                <SearchInput />
                <ArticleBox item={news} />
                <ArticleBox item={news} />
                <ArticleBox item={news} />
                <EfisensTalk />
                <ArticleBox item={news} />
                <ArticleBox item={news} />
                <ArticleBox item={news} />
            </div>
        </div>
    )
}
