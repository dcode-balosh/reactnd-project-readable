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

    onDeleteClick(id) {
        alert(`deleting ${id}`)
    }

    onUpvoteClick(id) {
        alert(`upvoting ${id}`)
    }

    onDownvoteClick(id) {
        alert(`downvoting ${id}`)
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
                          onDeleteClick={this.onDeleteClick}
                          onUpvoteClick={this.onUpvoteClick}
                          onDownvoteClick={this.onDownvoteClick}
                />
                <CommentsSectionComponent
                    comments={comments}
                    commentsAnchor={commentsAnchor}
                    location={location}
                    onDeleteClick={this.onDeleteClick}
                    onUpvoteClick={this.onUpvoteClick}
                    onDownvoteClick={this.onDownvoteClick}
                />
            </div>
        )
    }
}

export default Posts;
