import React from 'react'
import Slider from "react-slick";
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';



function PrevArrow(props) {
    const { onClick } = props;
    console.log('PrevArrow', props)
    return (
        <IconContext.Provider value={{ className: 'prev-arrow' }}><FaChevronLeft onClick={onClick} /></IconContext.Provider >
    );
}

function NextArrow(props) {
    const { onClick } = props;
    console.log('nextArrow', props)
    return (
        <IconContext.Provider value={{ className: 'next-arrow' }}><FaChevronRight onClick={onClick} /></IconContext.Provider >
    );
}

export default function HomeNews() {
    const settings = {
        dots: false,
        // arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    return (
        <div className="section home-news-block">
            <div className="container">
                <div className="slider-container">
                    <div>
                        <h2 className="block-title-sm text-darkblue">Efisens Actu</h2>
                        <Slider {...settings}>
                            <div>
                                <h4>Impact Covid-19 – une nouvelle normalité à construire</h4>
                            </div>
                            <div>
                                <h4>Enjeux et bénéfices de la dématérialisation informatique</h4>
                            </div>
                            <div>
                                <h4>Impact Covid-19 – une nouvelle normalité à construire</h4>
                            </div>
                            <div>
                                <h4>Enjeux et bénéfices de la dématérialisation informatique</h4>
                            </div>
                        </Slider>
                        <Link to="/efilab/1"><button className="btn btn-custom">En savoir plus</button></Link>
                    </div>
                </div>

            </div>

        </div>
    )
}
