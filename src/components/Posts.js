import React, {Component} from "react";
import ListGroupPost from "./ListGroupPost";
import ListGroupControls from "./ListGroupControls";
class Posts extends Component {
    render() {
        let posts = this.props.posts;
        return (
            <div className="posts-component">
                <h1 className="posts-header">Posts</h1>
                <ListGroupControls/>
                <ListGroupPost items={posts}
                               keys={["id", "parent"]}
                               prefix="posts"
                               sort={ (arr) => arr.sort((a, b) =>
                                   (a.voteScore === b.voteScore
                                       ? 0
                                       : (a.voteScore > b.voteScore ? -1 : 1) )
                               )
                               }
                />
            </div>
        )
    }
}
export default Posts;
