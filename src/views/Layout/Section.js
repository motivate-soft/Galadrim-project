import React from 'react'
import styled from 'styled-components'

const CustomSection = styled.div`
    background-color: ${props => props.color};
    margin: 0 20px;
`

export default function Section(props) {
    return (
        <CustomSection>
            {props.children}
        </CustomSection>
    )
}
