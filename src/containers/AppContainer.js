import {connect} from "react-redux";
import App from "../App";

function mapStateToProps(state,ownProps) {
    return {
        posts: state.posts,
        categories: state.categories
    }
}

let AppContainer = connect(mapStateToProps)(App);

export default AppContainer
