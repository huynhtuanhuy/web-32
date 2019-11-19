import React, { Component } from 'react';
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

    render() {
        console.log("Render");

        return (
            <div>
                List post length: {this.state.listPost.length}
            </div>
        )
    }
}
