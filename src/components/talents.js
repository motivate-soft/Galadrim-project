import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function Talents() {
    return (
        <div className="talents-block">
            <Container>
                <Row>
                    <Col xs={12} lg={6}>
                        <div className="top-left-circle"/>
                        <div className="talents-form text-blue p-5 pb-4 shadow-lg ml-4 mt-4 rounded-lg">
                            <h2>Nous recherchons en permanence de nouveaux talents</h2>
                            <p>Nous recherchons en permanence de nouveaux talents,Nous recherchons en permanence de nouveaux talents</p>
                            <button className="btn rounded text-blue px-4 py-2">Access talents</button>
                        </div>
                    </Col>
                    <Col xs={12} lg={6}>
                        <Row>
                            <Col sm={6} className="rounded-circle">
                                sdfs
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
