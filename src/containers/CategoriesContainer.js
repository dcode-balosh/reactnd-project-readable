import {connect} from "react-redux";
import Categories from "../components/Categories";

function mapStateToProps(state,ownProps) {
    return {
        categories: state.categories,
        location: ownProps.location
    }
}

let CategoriesContainer = connect(mapStateToProps)(Categories);

export default CategoriesContainer
