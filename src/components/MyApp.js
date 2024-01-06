import React from "react";
import './style.css';
import { Alert, Col, Container, Row } from "reactstrap";

class MyApp extends React.Component {
    render() {
        return (
            <>
                <h1 className="text__first">Hello React</h1>
                <p>Lorem ipsum dolor</p>

                <Container>
                    <Row>
                        <Col md="4">
                            <Alert color="danger">Hello user</Alert>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default MyApp;
