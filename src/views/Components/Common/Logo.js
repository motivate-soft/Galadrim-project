import React from 'react'
import LogoImage from "../../../assets/Logo/logo@3x.png"
import styled from 'styled-components'

const Img = styled.img`
    width: 100%;
    max-width: 110px !important;
`;


export default function Logo() {
    return (
        <>
            <Img src={LogoImage} className="logo" alt="Efisens Logo" />
        </>
    )
}
