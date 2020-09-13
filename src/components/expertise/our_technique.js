import React from 'react';

export default function OurTechnique(props) {
    return (
      <div className={'our_technique'}>
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col-lg-12 text-center'}>
                    <h1 style={{color: props.theme.mainColor}}>{props.theme.ourTechnique.title}</h1>
                </div>
                <div className={'col-lg-12 brand-area'}>
                    <div className={'row'}>
                        {
                            props.theme.ourTechnique.brands.map((item, index)=>(
                                <div key={index} className={'col-lg-4 col-6 text-center logo-item'}>
                                    <img src={item.image} alt={item.name}/>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
}