import React, {Component} from "react";
import BodyPost from "./post/BodyPost";
import CommentsSectionComponent from "./post/CommentsSection";
import * as PostClickHelper from "./post/PostClickHelper"

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
        let {post, comments, location} = this.props;
        const commentsAnchor = 'commentsHeaderId';

        if (undefined === post) {
            return (<div>Loading</div>)
        }

        return (
            <div className="post-component">
                <BodyPost post={post}
                          commentsLength={comments.length}
                          commentsAnchor={commentsAnchor}
                          location={location}
                          onDeleteClick={PostClickHelper.onDeleteClick.bind(this,'post')}
                          onUpvoteClick={PostClickHelper.onUpvoteClick.bind(this,'post')}
                          onDownvoteClick={PostClickHelper.onDownvoteClick.bind(this,'post')}
                />
                <CommentsSectionComponent
                    comments={comments}
                    commentsAnchor={commentsAnchor}
                    location={location}
                    onDeleteClick={PostClickHelper.onDeleteClick.bind(this,'comment')}
                    onUpvoteClick={PostClickHelper.onUpvoteClick.bind(this,'comment')}
                    onDownvoteClick={PostClickHelper.onDownvoteClick.bind(this,'comment')}
                />
            </div>
        )
    }
}

export default Posts;
