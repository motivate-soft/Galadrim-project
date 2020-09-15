import React from 'react'
import { Row, Col } from 'react-bootstrap'
import CustomLabel from '../../Elements/CustomLabel'
import CustomInput from '../../Elements/CustomInput'
import styled from 'styled-components'

const defaultColor = '#FF5E4D'

const SubmitButton = styled.button`
    display: block;
    margin: 28px auto;
    padding: 5px 30px;
    color: #ffffff;
    background-color: ${props => props.color !== undefined ? props.color : defaultColor};
    border-radius: 0.25rem;
    border: 1px solid transparent;
    white-space: nowrap;
    vertical-align: middle;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    line-height: 1.5;
`

export default function ServiceForm(props) {
    return (
        <>
            <Row>
                <Col lg={6} sm={12} className="mb-3">
                    <CustomLabel for="lastName">Nom</CustomLabel>
                    <CustomInput name="lastName" type="text" placeholder="Jean" />
                </Col>
                <Col lg={6} sm={12} className="mb-3">
                    <CustomLabel for="firtName">Prénom</CustomLabel>
                    <CustomInput name="firtName" type="text" placeholder="Dupont" />
                </Col>
                <Col lg={12} className="mb-3">
                    <CustomLabel for="email">Email professionnel</CustomLabel>
                    <CustomInput name="email" type="email" placeholder="jean.dupont@mail.com" />
                </Col>
                <Col lg={12} className="mb-3">
                    <CustomLabel for="phoneNumber">Numéro de téléphone</CustomLabel>
                    <CustomInput name="phoneNumber" type="text" placeholder="06 25 22 22 22" />
                </Col>
                <Col lg={12} className="mb-3">
                    <CustomLabel for="companyName">Nom de l'entreprise</CustomLabel>
                    <CustomInput name="companyName" type="text" placeholder="Entreprise" />
                </Col>
            </Row>
            <SubmitButton type="submit" color={props.color}>Envoyer le formulaire</SubmitButton>
        </>
    )
}
