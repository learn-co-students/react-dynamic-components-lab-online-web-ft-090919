//your code here
import React, { Component } from 'react'
import { render } from 'enzyme'

class Comment extends Component {
    render() {
        return (
            <div className="comment">
                {this.props.commentText}
            </div>
        )
    }
}   
export default Comment