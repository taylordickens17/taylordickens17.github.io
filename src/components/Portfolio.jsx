import React from 'react';
import {
    Card, Container, Button, CardHeader, CardBody,
    CardTitle, CardText, Row, Col
} from 'reactstrap';

const Portfolio = () => {
    return (
        <Container>
            <h1>Projects</h1>
            <Row>
                <Col md="4">
                    <Card>
                        <CardHeader>PetPals</CardHeader>
                        <CardBody>
                            <CardTitle>Special Title Treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button>Go See</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="4">
                    <Card>
                        <CardHeader>The Book Review</CardHeader>
                        <CardBody>
                            <CardTitle>Special Title Treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button>Go See</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="4">
                    <Card>
                        <CardHeader>Studio Ghibli API</CardHeader>
                        <CardBody>
                            <CardTitle>Special Title Treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button>Go See</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <hr style={{ width: '80%' }} />
                </Col>
            </Row>
        </Container>
    )
}

export default Portfolio;