import React from 'react'
import styled from 'styled-components'

const Form = styled.div`
    position: relative;
    z-index: 99;
    padding: 32px;
    border-radius: 8px;
    background-color: #ffffff;
    box-shadow: 0 20px 40px 0 rgba(41, 41, 43, 0.05), 0 2px 4px 0 rgba(41, 41, 43, 0.05);
    margin-bottom: -300px;
`
const TitleWrapper = styled.div`
    max-width: 422px;
    margin: 0 auto 24px;
`

const P = styled.p`
    color: #A4ABB8;
`

export default function BannerFormCard(props) {
    return (
        <Form>
            <TitleWrapper>
                <h4 className="text-blue text-center">{props.formTitle}</h4>
                <p className="text-blue text-sm text-center">{props.formSubtitle}</p>
            </TitleWrapper>
            {props.children}
            <P className="text-xs">{props.formDescription}</P>
        </Form>
    )
}
