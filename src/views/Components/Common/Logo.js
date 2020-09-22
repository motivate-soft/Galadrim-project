import React from 'react'
import LogoImage from "../../../assets/Logo/logo.svg"
import styled from 'styled-components'

const Img = styled.img`
    width: 100%;
    width: 109px;
    height: 26px;
`;


export default function Logo() {
    return (
        <>
            <Img src={LogoImage} className="logo" alt="Efisens Logo" />
        </>
    )
}
