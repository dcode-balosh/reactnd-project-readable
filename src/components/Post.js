import React, {Component} from "react";
import BodyPost from "./post/BodyPost";
import CommentsSectionComponent from "./post/CommentsSection";
import * as Api from '../Api';
class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sort: (arr) => arr
        };
    }

    onDeleteClick(modal,id) {
        switch(modal){
            case "post":
                Api.deletePost(this.props.dispatch,id);
                break;
            case "comment":
                Api.deleteComment(this.props.dispatch,id);
                break;
            default:
                console.log(`Error no such modal ${modal}`)
        }
    }

    onUpvoteClick(modal,id) {
        switch(modal){
            case "post":
                Api.votePost(this.props.dispatch,id,'upVote');
                break;
            case "comment":
                Api.voteComment(this.props.dispatch,id,'upVote');
                break;
            default:
                console.log(`Error no such modal ${modal}`)
        }

    }

    onDownvoteClick(modal,id) {
        switch(modal){
            case "post":
                Api.votePost(this.props.dispatch,id,'downVote');
                break;
            case "comment":
                Api.voteComment(this.props.dispatch,id,'downVote');
                break;
            default:
                console.log(`Error no such modal ${modal}`)
        }

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
                          onDeleteClick={this.onDeleteClick.bind(this,'post')}
                          onUpvoteClick={this.onUpvoteClick.bind(this,'post')}
                          onDownvoteClick={this.onDownvoteClick.bind(this,'post')}
                />
                <CommentsSectionComponent
                    comments={comments}
                    commentsAnchor={commentsAnchor}
                    location={location}
                    onDeleteClick={this.onDeleteClick.bind(this,'comment')}
                    onUpvoteClick={this.onUpvoteClick.bind(this,'comment')}
                    onDownvoteClick={this.onDownvoteClick.bind(this,'comment')}
                />
            </div>
        )
    }
}

export default Posts;
