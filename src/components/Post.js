import React, {Component} from "react";
import BodyPost from "./post/BodyPost";
import CommentsSectionComponent from "./post/CommentsSection";
import * as Api from '../Api';
class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sort: (arr) => arr,
            dispatch: props.dispatch
        };
    }

    onDeleteClick(id) {
        Api.deletePost(this.state.dispatch,id);
    }

    onUpvoteClick(id) {
        Api.votePost(this.state.dispatch,id,'upVote');
    }

    onDownvoteClick(id) {
        Api.votePost(this.state.dispatch,id,'downVote');
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
                          onDeleteClick={this.onDeleteClick.bind(this)}
                          onUpvoteClick={this.onUpvoteClick.bind(this)}
                          onDownvoteClick={this.onDownvoteClick.bind(this)}
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
