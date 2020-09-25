import React from 'react'

import ArticleImage from "../../assets/Images/efilab/article1.jpg"
import UserAvatar from "../../assets/Images/efilab/user.jpg"
import ArticleSummaryBox from './../Components/Lab/ArticleSummaryBox';
import ArticleDetailBox from '../Components/Lab/ArticleDetailBox';
import EfisensTalk from "../Components/Lab/EfisensTalk";
import Follow from '../Components/Lab/Follow';

import FooterBanner from '../Components/Common/FooterBanner';
import EfilabStickyNav from '../Components/Lab/EfilabStickyNav';
import EfilabTopNavbar from './../Components/Lab/EfilabTopNavbar';

const article = {
    id: 1,
    category: 'cloud',
    title: 'Enjeux et bénéfices de la dématérialisation informatique',
    content: 'Si sine metu contineret, saluti prospexit civium, qua intellegebat contineri suam atque corrupti. Hanc ego assentior, cum teneam sententiam, quid malum  ',
    image: ArticleImage,
    date: '2020-8-10',
    time: 5,
    user: {
        id: 1,
        avatar: UserAvatar,
        name: 'Par Annabelle Lad'
    }
}

const item = {
    id: 1,
    category: 'cloud',
    title: 'Votre stratégie de sécurité est elle performante ?',
    content: `Des menaces comme le phishing, les ransomwares ou encore les arnaques au président sont plus qu’omniprésentes dans le quotidien des entreprises, créant ainsi des facteurs de risques critiques voire mortels pour notamment les ETI et PME françaises.
    La cellule sécurité d’Efisens a crée pour vous et vos utilisateurs une solution permettant de sécuriser vos applications et votre infrastructure tout en garantissant la pérennité de votre politique cybersécurité dans le temps.
    Cette offre, c’est The Trust Center Efisens.
     Notre objectif ? Fournir les meilleurs outils de sécurité et les « BEST PRACTICES » associées afin de lutter efficacement contre les menaces émergentes.
    `,
    image: ArticleImage,
    date: '2020-8-10',
    time: 5,
    user: {
        id: 1,
        avatar: UserAvatar,
        name: 'Par Annabelle Lad'
    }
}

const footerBannerText = "Votre partenaire technologique ... avec vous et pour longtemps "
const navText = "Enjeux et bénéfices de la dématérialisation informatiqu"

export default function EfilabDetail() {
    return (
        <>
            <EfilabTopNavbar />
            <EfilabStickyNav title={navText} />
            <ArticleSummaryBox article={article} />
            <ArticleDetailBox article={item} />
            <EfisensTalk />
            <Follow />
            <FooterBanner color="orange" title={footerBannerText} />
        </>
    )
}
