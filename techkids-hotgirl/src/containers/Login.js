import React, { Component } from 'react';
import {
    Form,
    FormGroup,
    Container,
    Input,
    Label,
    Col,
    Row,
    Button,
} from 'reactstrap';
import axios from 'axios';

export default class Login extends Component {
    state = {
        username: '',
        password: '',
        errorMessage: '',
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { username, password } = this.state;

        this.setState({ errorMessage: '' });

        axios({
            url: 'http://localhost:6969/api/auth/signin',
            method: 'POST',
            data: {
                username,
                password,
            },
            withCredentials: true,
        }).then(data => {
            if (data.data.success) {
                console.log("Login success");
                window.location.href = "/";
            } else {
                this.setState({ errorMessage: data.data.error });
            }
        }).catch(error => {
            console.log(error)
        });
    }

    handleInputChange = (e) => {
        const { value, name } = e.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col md={{ size: 8, offset: 2 }}>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label>Username</Label>
                                <Input onChange={this.handleInputChange} type="text" name="username" required />
                            </FormGroup>
                            <FormGroup>
                                <Label>Password</Label>
                                <Input onChange={this.handleInputChange} type="password" name="password" required />
                            </FormGroup>
                            {this.state.errorMessage
                                ? <p className="text-danger">{this.state.errorMessage}</p>
                                : ''
                            }
                            <Button>Login</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}
