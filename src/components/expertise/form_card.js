import React from 'react';
import './form_card.scss'

export default function FormCard(props) {
    return (
      <>
          <div className="card card-body form-card">
              <div className="title-bar text-center">
                  <h4 className="text-blue">
                      {props.theme.banner.formCard.title}
                  </h4>
                  <p className="text-blue">
                      {props.theme.banner.formCard.subtitle}
                  </p>
              </div>
              <div className="form-content">
                  <form>
                      <div className="form-row">
                          {
                              props.theme.banner.formCard.formFields.map((item, index) => (
                                  <div className={item.classes} key={index}>
                                      <label htmlFor={item.id}>{item.labelText}</label>
                                      <input type={item.type} name={item.name} className="form-control" id={item.id} placeholder={item.placeholder}/>
                                  </div>
                              ))
                          }


                      </div>
                      <div className="form-group text-center mt-4 mb-4">
                          <button type="submit" className="btn btn-custom" style={{backgroundColor: props.theme.mainColor}}>{props.theme.banner.formCard.buttonText}</button>
                      </div>
                      <p className="form-description-string" style={{color: props.theme.mainColor}}>
                          {props.theme.banner.formCard.description}
                      </p>
                  </form>
              </div>
          </div>
      </>
    );
}