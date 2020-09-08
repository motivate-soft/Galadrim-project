import React from 'react';

const item = {
    title: 'Nos expertises',
    description: 'Nous agrégeons les meilleures technologies IT pour qu’elles puissent vous être bénéfiques au quotidien.'
};

class TitleBar extends React.Component{
    state = {
        item: item
    };

    render(){
        return(
            <div className="container text-center title-bar">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
            </div>
        );
    }
}

export default TitleBar