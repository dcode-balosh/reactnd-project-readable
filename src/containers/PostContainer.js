import {connect} from "react-redux";
import Post from "../components/Post";

function mapStateToProps(state,ownProps) {
    return {
        post: state.posts[ownProps.postId],
        comments: Object.values(state.comments).filter((comment) => comment.parentId === ownProps.postId),
        location: ownProps.location,
        category: ownProps.category
    }
}

let PostContainer = connect(mapStateToProps)(Post);

export default PostContainer;
