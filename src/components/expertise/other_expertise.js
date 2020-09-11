import React from 'react';

class OtherExpertise extends React.Component{
    render()
    {
        return (
          <div className={'other-expertise'}>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-lg-12 text-center'}>
                        <div className={'title-area'}>
                            <h1 style={{color: this.props.theme.mainColor}}>
                                Nos autres expertises
                            </h1>
                            <p style={{color: this.props.theme.mainColor}}>
                                Nous agrégeons les meilleures technologies IT pour qu’elles puissent vous être bénéfiques au quotidien.s
                            </p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        );
    }
}

export default OtherExpertise