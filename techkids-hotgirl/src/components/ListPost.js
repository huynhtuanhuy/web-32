import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import axios from 'axios';

export default class ListPost extends Component {
    state = {
        listPost: [],
    }

    componentWillMount() {
        console.log("Will mount");
    }

    componentDidMount() {
        console.log("Did mount");

        axios(
            {
                url: "http://localhost:6969/api/posts",
                method: "GET"
            }
        ).then(data => {
            this.setState({ listPost: data.data.data });
        }).catch(error => {
            console.log("Error", error);
        });
    }

    renderListPost = () => {
        const { listPost } = this.state;

        return listPost.map(post => {
            return (
                <Col md="3">
                    <a href={"/post/" + post._id}>
                        <img style={{
                            maxWidth: '100%',
                        }} src={post.image} />
                        <ul>
                            <li>View: {post.active.views}</li>
                            <li>Date: {post.createdAt}</li>
                            <li>Like: {post.active.likes}</li>
                        </ul>
                        <h3>{post.title}</h3>
                        <span>{post.author.name}</span>
                        <p>{post.content}</p>
                    </a>
                </Col>
            );
        });
    }

    render() {
        console.log("Render");

        return (
            <Row>
                {this.renderListPost()}
            </Row>
        )
    }
}
