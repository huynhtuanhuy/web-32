import React, { Component } from 'react';
import { Container } from 'reactstrap';
import axios from 'axios';

export default class PostDetail extends Component {
    state = {
        post: null
    }

    componentDidMount() {
        const { postId } = this.props.match.params;

        axios({
            url: `http://localhost:6969/api/posts/${postId}`,
            method: 'GET',
        }).then(response => {
            const post = response.data.data;

            if (post.active && post.active._id) {
                post.active.views += 1;

                axios({
                    url: `http://localhost:6969/api/actives/${post.active._id}`,
                    method: 'PUT',
                    data: post.active
                }).then(() => {
                    this.setState({ post: post });
                }).catch(error => {
                    console.log(error);
                });
            }
        }).catch(error => {
            console.log(error);
        });
    }

    render() {
        const { post } = this.state;

        if (!post) {
            return "Loading...";
        }

        return (
            <Container>
                <img style={{ width: '100%' }} src={post.image} />
                <p>
                    <span>{post.active.likes} <a href="#">like</a></span> - <span>{post.active.views} view</span>
                </p>
                <h3>{post.title}</h3>
                <p>{post.author.name} - {post.createdAt}</p>
                <p>{post.content}</p>
                <p>Comment...</p>
            </Container>
        )
    }
}
