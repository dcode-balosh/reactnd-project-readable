import React, {Component} from "react";
import ListGroupPost from './ListGroupPost'
import ListGroupControls from './ListGroupControls'
class Posts extends Component {
    render() {
        let posts = this.props.posts;
        return (
            <div className="posts-component">
                <h1 className="posts-header">Posts</h1>
                <ListGroupControls/>
                <ListGroupPost items={posts} keys={["id","parent"]} prefix="posts"/>
            </div>
        )
    }
}
export default Posts;
