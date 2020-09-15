import React from 'react'
import styled from 'styled-components'

const MenuContainer= styled.div`
    margin-bottom: 8px;
    padding: 0 12px;
    display: flex;
    min-width: 250px;
`

const Img = styled.img`
    width: 35px;
    height: 35px;
    margin-right: 10px;
    padding: 3px;
    background: #e9ecef;
    border-radius: 50%;
`

const P = styled.p`
    white-space: break-spaces !important;
    font-size: 10px;
    font-family: Gilroy-SemiBold;
`

export default function NavDropdownMenu({ img, title, text }) {
    return (
        <MenuContainer>
            <Img src={img} alt={title} />
            <div>
                <h6>{title}</h6>
                <P>{text}</P>
            </div>
        </MenuContainer >
    )
}
