import React, {Component} from "react";
import BodyPost from "./post/BodyPost";
import CommentsSectionComponent from "./post/CommentsSection";

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
        let {post, comments} = this.props;
        const commentsAnchor = 'commentsHeaderId';
        {
            console.log(this.props)
        }

        if (undefined === post) {
            return (<div>Loading</div>)
        }

        return (
            <div className="post-component">
                <BodyPost post={post} commentsLength={comments.length} commentsAnchor={commentsAnchor}/>
                <CommentsSectionComponent comments={comments} commentsAnchor={commentsAnchor}/>
            </div>
        )
    }
}

export default Posts;
