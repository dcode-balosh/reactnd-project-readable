import React, {Component} from "react";
import ListGroupPost from "./posts/ListGroupPost";
import ListGroupControls from "./posts/ListGroupControls";

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sort: (arr) => arr
        };
    }

    sortBy = (foo) => {
        this.setState({sort: foo})
    };

    render() {
        let posts = this.props.posts;
        return (
            <div className="posts-component">
                <h1 className="posts-header">Posts</h1>
                <ListGroupControls sortBy={this.sortBy}
                location={this.props.location}/>
                <ListGroupPost items={posts}
                               keys={["id", "parent"]}
                               prefix="posts"
                               sort={this.state.sort}
                               category={this.props.category}
                />
            </div>
        )
    }
}
export default Posts;
