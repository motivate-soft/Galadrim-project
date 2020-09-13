import React from 'react';
import ExpertiseCard from "../global/expertise_card";

const items = [];

class OurExpertise extends React.Component{
    state = {
        items: items,
    };

    handleMouseEnter = (id) => {
        const { items } = this.state;
        items.forEach((item) => {
            if (item.active === id) {
                item.active = true
            } else {
                item.active = false
            }
        });

        this.setState({items: items})
    }

    handleMouseLeave = (id) => {
        const { items } = this.state;
        items.forEach((item) => {
            if (item.id === id) {
                item.active = false
            }
        })

        this.setState({items: items})
    }

    render()
    {
        return (
            <div className="our_expertise">
                <div className="container">
                    <div className="our_expertise">
                        <h1 className="text-center" style={{color: this.props.theme.mainColor}}>{this.props.theme.ourExpertise.title}</h1>
                    </div>
                    <div className="card-content">
                        <div className="row">
                            {
                                this.props.theme.ourExpertise.cards.map((item, index) => (
                                    <div key={index} className="col-lg-4">
                                        <ExpertiseCard
                                            id={item.id}
                                            active={item.active}
                                            img={item.img}
                                            title={item.title}
                                            titleWidth={item.titleWidth}
                                            subtitle={item.subtitle}
                                            content={item.content}
                                            onMouseEnter={this.handleMouseEnter}
                                            onMouseLeave={this.handleMouseLeave}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OurExpertise