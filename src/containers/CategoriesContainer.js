import {connect} from "react-redux";
import Categories from "../components/Categories";

function mapStateToProps(state) {
    return {categories: state.categories}
}

let CategoriesContainer = connect(mapStateToProps)(Categories);

export default CategoriesContainer
