import React, {Component} from 'react'

export default class CommentComponent extends React.Component {
    render(){
        return (
            <div className="comment">
                {this.props.commentText}
            </div>
        )
    }


}