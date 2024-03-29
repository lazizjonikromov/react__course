import React from 'react';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
import axios from 'axios';

class Backend extends React.Component {
    
    state = {
        // user: [],
        post: []
    }

    // API GET using Fetch

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then((response) => response.json())
    //     .then(data => {
    //         console.log(data);
    //         this.setState({user: data});
    //     })
    // }


    // API GET using Axios

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            const post = res.data;
            console.log(res);
            this.setState({post});
        })
    }


    render() {
        return (
            <>

                {/* Users */}

                {/* <Container>
                    <Row>
                        {this.state.user.map((users) => (
                            <Col md="4">
                                <Card key={users.id}>
                                    <CardHeader>
                                        <h2>
                                            {users.name}
                                        </h2>
                                    </CardHeader>
                                    <CardBody>
                                        <h3>
                                            {users.phone}
                                        </h3>
                                        <p>
                                            {users.username}
                                        </p>
                                        <h4>
                                            {users.email}
                                        </h4>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container> */}

                {/* Posts */}

                <Container>
                    <Row>
                        {this.state.post.map((posts) => (
                            <Col md="4">
                                <Card key={posts.id}>
                                    <CardHeader>
                                        {posts.title}
                                    </CardHeader>
                                    <CardBody>
                                        {posts.body}
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>


            </>
        );
    }
}

export default Backend;
