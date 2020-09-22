import React from 'react'
import { FaSearch } from 'react-icons/fa'

export default function LastArticles() {
    return (
        <div className="section last-articles-block">
            <div className="container">
                <h1>Derniers articles</h1>
                <div className="article-search-form">
                    <FaSearch />
                    <input type="text" placeholder="       Rechercher un article" className="" />
                </div>
            </div>
        </div>
    )
}
