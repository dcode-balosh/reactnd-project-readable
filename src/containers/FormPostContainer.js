import {connect} from "react-redux";
import FormPost from "../components/FormPost";


function mapStateToProps(state,ownProps) {

    return {
        post: state.posts[ownProps.postId],
        location: ownProps.location
    }
}

let FormPostContainer = connect(mapStateToProps)(FormPost);

export default FormPostContainer;
