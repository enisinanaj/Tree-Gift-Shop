import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export class Impressum extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md={8}> </Col>
                    <Col md={4}>
                        <p>Impressum for the Footer</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Impressum