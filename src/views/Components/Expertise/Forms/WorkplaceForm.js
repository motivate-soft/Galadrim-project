import React from 'react'
import CustomLabel from '../../Elements/CustomLabel'
import CustomInput from '../../Elements/CustomInput'
import styled from 'styled-components'
import { CustomButton } from '../../Elements/Buttons'

const defaultColor = '#FF5E4D'

const SubmitButton = styled(CustomButton)`
    display: block;
    width: 229px;
    margin: 28px auto;
    padding-top: 5px;
    padding-bottom: 5px;
    color: #ffffff;
    background-color: ${props => props.color !== undefined ? props.color : defaultColor};
`

export default function WorkplaceForm(props) {
    const { color } = props
    return (
        <>
            <div className="row">
                <div className="col-lg-6  col-sm-12 mb-3">
                    <CustomLabel htmlFor="lastName">Nom</CustomLabel>
                    <CustomInput name="lastName" type="text" placeholder="Jean" />
                </div>
                <div className="col-lg-6  col-sm-12 mb-3">
                    <CustomLabel htmlFor="firtName">Prénom</CustomLabel>
                    <CustomInput name="firtName" type="text" placeholder="Dupont" />
                </div>
                <div className="col-lg-12 mb-3">
                    <CustomLabel htmlFor="email">Email professionnel</CustomLabel>
                    <CustomInput name="email" type="email" placeholder="jean.dupont@mail.com" />
                </div>
                <div className="col-lg-12 mb-3">
                    <CustomLabel htmlFor="phoneNumber">Numéro de téléphone</CustomLabel>
                    <CustomInput name="phoneNumber" type="text" placeholder="06 25 22 22 22" />
                </div>
                <div className="col-lg-12 mb-3">
                    <CustomLabel htmlFor="companyName">Nom de l'entreprise</CustomLabel>
                    <CustomInput name="companyName" type="text" placeholder="Entreprise" />
                </div>
            </div>
            <SubmitButton type="submit" className={color ? `bg-${color}` : 'bg-green'}>Envoyer le formulaire</SubmitButton>
        </>
    )
}
