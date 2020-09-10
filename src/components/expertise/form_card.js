import React from 'react';
import './form_card.scss'

export default function FormCard() {
    return (
      <>
          <div className="card card-body form-card">
              <div className="title-bar text-center">
                  <h4 className="text-blue">
                      Intéressé par nos solutions Cloud ?
                  </h4>
                  <p className="text-blue">
                      Remplissez ce formulaire et notre équipe commerciale reviendra rapidement vers vous.
                  </p>
              </div>
              <div className="form-content">
                  <form>
                      <div className="form-row">
                          <div className="form-group col-md-6">
                              <label htmlFor="inputEmail4">Email</label>
                              <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
                          </div>
                          <div className="form-group col-md-6">
                              <label htmlFor="inputPassword4">Password</label>
                              <input type="password" className="form-control" id="inputPassword4"
                                     placeholder="Password"/>
                          </div>
                      </div>
                      <div className="form-group">
                          <label htmlFor="inputAddress">Address</label>
                          <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                      </div>
                      <div className="form-group">
                          <label htmlFor="inputAddress2">Address 2</label>
                          <input type="text" className="form-control" id="inputAddress2"
                                 placeholder="Apartment, studio, or floor"/>
                      </div>
                      <div className="form-group">
                          <label htmlFor="inputAddress2">Address 2</label>
                          <input type="text" className="form-control" id="inputAddress2"
                                 placeholder="Apartment, studio, or floor"/>
                      </div>
                      <div className="form-group text-center mt-4 mb-4">
                          <button type="submit" className="btn btn-custom btn-success">Envoyer le formulaire</button>
                      </div>
                      <p className="form-description-string">
                          Ces informations font l’objet d’un traitement informatisé par EFISENS,
                          destiné à répondre et assurer le suivi de votre demande,
                          et seront conservées durant le temps nécessaire pour y répondre.
                          Conformément à la réglementation informatique et libertés, vous bénéficiez
                          d’un droit d’accès et de rectification, de portabilité, d’effacement
                          des informations vous concernant ou une limitation du traitement.
                          Contactez-nous à l’adresse : conformite-RGPD@efisens.fr pour
                          toutes demandes concernant vos données.
                      </p>
                  </form>
              </div>
          </div>
      </>
    );
}