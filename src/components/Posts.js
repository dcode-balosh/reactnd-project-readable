import React, {Component} from "react";
import ListGroup from './ListGroup'
import ListGroupControls from './ListGroupControls'
class Posts extends Component {
    render() {
        let posts = ['post-one', 'post-two', 'post-three'];
        return (
            <div className="posts-component">
                <h1 className="posts-header">Posts</h1>
                <ListGroupControls/>
                <ListGroup items={posts} prefix="posts"/>
            </div>
        )
    }
}
export default Posts;
