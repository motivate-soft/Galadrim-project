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

function tabHandler(id, controllerId) {
    var tab = document.getElementById(id);
    var controller = document.getElementById(controllerId);
    var tabs = document.getElementsByClassName('tab_content');
    var tabControls = document.getElementsByClassName('tab-control');
    for(var i=0;i<tabs.length; i++){
        tabs[i].classList.remove('show');
    }
    for(var j=0;j<tabControls.length; j++){
        tabControls[j].classList.remove('active');
    }
    tab.classList.add('show');
    controller.classList.add('active');

}

export default function ContactFormCard() {
    return (
        <>
            <div className="card card-body contact_form_card">
                <div className={'tab-bar'}>
                    <div className={'tab-control active'} id={'tab-control1'} onClick={()=>tabHandler('tab1', 'tab-control1')}>
                        <span>Se faire rappeler</span>
                    </div>
                    <div className={'tab-control'} id={'tab-control2'} onClick={()=>tabHandler('tab2', 'tab-control2')}>
                        <span>Appeler maintenant</span>
                    </div>
                </div>
               <div className={'tab_content show'} id={'tab1'}>
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
                <div className={'tab_content'} id={'tab2'}>
                    <div className="title-bar text-center">
                        <h4 className="text-blue">
                            Contactez-nous dès maintenant
                        </h4>
                    </div>
                    <div className={'subtitle-bar'}>
                        <p className="text-blue text-center">
                            Notre équipe est disponible du lundi au vendredi de 9h à 18h30
                        </p>
                    </div>
                    <div className={'action-bar text-center'}>
                        <button className={'btn btn-custom'} style={{padding: "5px 30px"}}>
                            01 44 37 07 07
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}