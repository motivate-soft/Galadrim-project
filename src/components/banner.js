import React from 'react'
import { Container, Row, Jumbotron, Button, Image } from 'react-bootstrap';
import BannerImage from '../assets/home/images/1.png';

export default function Banner() {
    return (
        <Jumbotron>
            <Container>
                <Row>
                    <div className="col-md-6 center-align">
                        <div>
                            <h1 className="banner-title">Décomplexer <br/>l’informatique</h1>
                            <p>Co-construire votre écosystème IT avec des solutions accessibles et sur mesure, en lien avec vos usages du quotidien.</p>
                            <Button className="btn">Contactez-nous</Button>
                        </div>
                    </div>
                    <div className="col-md-6 center-align">
                        <Image src={BannerImage} />
                    </div>
                </Row>
            </Container>
        </Jumbotron>
    )
}
