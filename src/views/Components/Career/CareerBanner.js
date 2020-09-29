import React from 'react'

import RightBottomImage from '../../../assets/Images/charts/cloud.svg';
import LeftBottomImage from '../../../assets/Images/charts/modern-workplace.svg';


export default function CareerBanner() {
    return (
        <div className="section career-banner">
            <img src={LeftBottomImage} alt="Left Banner Background" className="bottom-left" />
            <img src={RightBottomImage} alt="Right Banner Background" className="bottom-right" />
            <div className="container">
                <h3 className="block-title-sm text-white">Rejoignez l'aventure Efisens </h3>
                <h5 className="block-subtitle text-white">
                    Nous sommes une entreprise à taille humaine, chez nous, pas de parcours formaté !
                    Ce sont vos compétences, vos envies et vos aspirations qui feront la différence.

                    Rejoignez notre équipe de 95 collaborateurs, répartis entre Paris et Casablanca.

                    Etes-vous prêt à construire l'avenir avec nous ?

                    Consultez le détail de toutes nos offres ci-dessous et n’attendez plus, postulez !
                </h5>
            </div>
        </div>
    )
}
