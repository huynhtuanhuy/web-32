import React, { Component, Fragment } from 'react';
import { Container } from 'reactstrap';

import Navbar from '../components/Navbar';
import ListPost from '../components/ListPost';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Container>
                    <ListPost />
                </Container>
            </div>
        )
    }
}
