import React, { Component, Fragment } from 'react';
import { Container } from 'reactstrap';

import ListPost from '../components/ListPost';

export default class Home extends Component {
    render() {
        return (
            <Container>
                <ListPost />
            </Container>
        )
    }
}
