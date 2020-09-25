import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import LogoWhite from '../Common/LogoWhite';
import AppNavbar from '../../Layout/Navbar/AppNavbar';



export default function ExpertiseStickyNavbar({ color, navItem }) {
    const { title, image, actionText } = navItem
    const [sticky, setSticky] = useState(false)
    const [hovered, setHovered] = useState(false)

    const renderClassName = () => {
        let className = ''
        if (color !== undefined) {
            className += `bg-${color} `
        }
        if (sticky === true) {
            className += 'expertise-sticky-class '
        }
        // if (hovered === true) {
        //     className += 'expertise-sticky-hover-class '
        // }
        className += 'section expertise-sticky-nav'

        return className
    }

    const scrollTop = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }

    useEffect(() => {
        const header = document.getElementById("expertise-sticky-nav");
        // const headerOffsetTop = header.offsetTop;
        const scrollCallBack = window.addEventListener("scroll", () => {
            if (window.pageYOffset > 706) {
                setSticky(true);
            } else {
                setSticky(false)
            }
        });
        return () => {
            window.removeEventListener("scroll", scrollCallBack);
        };
    }, []);

    return (
        <>
            <div
                id="expertise-sticky-nav"
                className={renderClassName()}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}>
                <LogoWhite />
                <div className="expertise-nav-link">
                    <img src={image} alt="expertise logo" />
                    <span>{title}</span>
                </div>
                <div className="expertise-nav-button" onClick={() => scrollTop()}>{actionText}</div>
                <div className="mobile-expertise-nav-button" onClick={() => scrollTop()}>Intéressé ?</div>
            </div>
        </>
    )

}
