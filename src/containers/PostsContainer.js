import {connect} from "react-redux";
import Posts from "../components/Posts";

function mapStateToProps(state, ownProps) {
    return {
        posts: state.posts,
        commentsLengths: Object.values(state.comments).reduce((acu, cur) => {
            acu[cur.parentId]
                ? acu[cur.parentId] = acu[cur.parentId] + 1
                : acu[cur.parentId] = 0;
            return acu;
        }, {}),
        location: ownProps.location,
        category: ownProps.category
    }
}

let PostsContainer = connect(mapStateToProps)(Posts);

export default PostsContainer;
