import {connect} from "react-redux";
import Posts from "../components/Posts";

function mapStateToProps(state) {
    return {posts: state.posts}
}

let PostsContainer = connect(mapStateToProps)(Posts);

export default PostsContainer;
