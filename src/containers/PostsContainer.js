import {connect} from "react-redux";
import Posts from "../components/Posts";

function mapStateToProps(state,ownProps) {
    return {
        posts: state.posts,
        location: ownProps.location,
        category: ownProps.category
    }
}

let PostsContainer = connect(mapStateToProps)(Posts);

export default PostsContainer;
