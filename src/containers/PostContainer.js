import {connect} from "react-redux";
import Post from "../components/Post";


function mapStateToProps(state,ownProps) {
    let sortByVoteScore = (arr) => {
        return arr.length === 0
            ? arr
            : arr.sort(
                (a, b) =>
                    (a.voteScore === b.voteScore
                        ? 0
                        : (a.voteScore > b.voteScore ? -1 : 1) )
            )
    };

    return {
        post: state.posts[ownProps.postId],
        comments: sortByVoteScore(Object.values(state.comments).filter((comment) => comment.parentId === ownProps.postId)),
        location: ownProps.location,
        category: ownProps.category
    }
}

let PostContainer = connect(mapStateToProps)(Post);

export default PostContainer;
