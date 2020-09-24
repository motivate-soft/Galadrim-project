import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { IconButton } from './../Elements/Buttons';
import { Link } from 'react-router-dom';


const CustomIconButton = styled(IconButton)`
    padding: 4px 40px;
    background-color: #ff5e4d;
    color: #ffffff;
`

export default function EfilabStickyNav(props) {
    const { title } = props
    const [sticky, setSticky] = useState(false)

    useEffect(() => {
        const header = document.getElementById("efilab-sticky-nav");
        // const headerOffset = header.offsetTop;
        const scrollCallBack = window.addEventListener("scroll", () => {
            if (window.pageYOffset > 20) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        });
        return () => {
            window.removeEventListener("scroll", scrollCallBack);
        };
    }, []);

    return (
        <nav id="efilab-sticky-nav" className={sticky === true ? "efilab-sticky-nav sticky-nav" : "efilab-sticky-nav"}>
            <Link className="efilab-logo" to="/">Efisens Lab</Link>
            <h4>{title}</h4>
            <CustomIconButton>Efisens.fr</CustomIconButton>
        </nav>
    )
}
