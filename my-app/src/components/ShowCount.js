// import React from 'react'

// export default function ShowCount(props) {
//     return (
//         <div>
//             Count: {props.count}
//         </div>
//     )
// }

import React, { Component } from 'react'

export default class ShowCount extends Component {
    // state = {
    //     count: 0
    // }

    // increaseCount() {
    //     this.setState({
    //         count: this.state.count + 1
    //     });
    // }

    render() {
        return (
            <div>
                Count: {this.props.count}
            </div>
        )
    }
}

