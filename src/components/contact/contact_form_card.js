import React from 'react';
import './contact_form_card.scss'

const formFields = [
    {
        labelText: "Nom",
        name: "Name",
        classes: "form-group col-md-6",
        id: "name",
        type: "text",
        placeholder: "Nom",
    },
    {
        labelText: "Prénom",
        name: "password",
        classes: "form-group col-md-6",
        id: "password",
        type: "password",
        placeholder: "Dupont",
    },
    {
        labelText: "Email professionnel",
        name: "email",
        classes: "form-group col-md-12",
        id: "email",
        type: "email",
        placeholder: "jean.dupont@mail.com",
    },
    {
        labelText: "Numéro de téléphone",
        name: "phone",
        classes: "form-group col-md-12",
        id: "phone",
        type: "text",
        placeholder: "06 25 22 22 22"
    },
    {
        labelText: "Nom de l'entreprise",
        name: "company",
        classes: "form-group col-md-12",
        id: "company",
        type: "text",
        placeholder: "Entreprise"
    },
];

export default function ContactFormCard() {
    return (
        <>
            <div className="card card-body contact_form_card">
                <div className={'tab-bar'}>
                    <div className={'tab-control active'}>
                        <span>Se faire rappeler</span>
                    </div>
                    <div className={'tab-control'}>
                        <span>Appeler maintenant</span>
                    </div>
                </div>
                <div className="title-bar text-center">
                    <h4 className="text-blue">
                        Intéressé par une ou plusieurs solutions ?
                    </h4>
                </div>
                <div className={'subtitle-bar'}>
                    <p className="text-blue text-center">
                        Remplissez ce formulaire et notre équipe commerciale reviendra rapidement vers vous.
                    </p>
                </div>
                <div className="form-content">
                    <form>
                        <div className="form-row">
                            {
                                formFields.map((item, index) => (
                                    <div className={item.classes} key={index}>
                                        <label htmlFor={item.id}>{item.labelText}</label>
                                        <input type={item.type} name={item.name} className="form-control" id={item.id} placeholder={item.placeholder}/>
                                    </div>
                                ))
                            }


                        </div>
                        <div className="form-group text-center mt-4 mb-4">
                            <button type="submit" className="btn btn-custom">Envoyer le formulaire</button>
                        </div>
                        <p className="form-description-string">
                            Ces informations font l’objet d’un traitement informatisé par EFISENS, destiné à répondre et assurer le suivi de votre demande, et seront conservées durant le temps nécessaire pour y répondre. Conformément à la réglementation informatique et libertés, vous bénéficiez d’un droit d’accès et de rectification, de portabilité, d’effacement des informations vous concernant ou une limitation du traitement. Contactez-nous à l’adresse : conformite-RGPD@efisens.fr pour toutes demandes concernant vos données.
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
}