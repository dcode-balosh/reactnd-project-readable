import React, {Component} from "react";
import ListGroupCategory from './ListGroupCategory'
class Categories extends Component {
    render() {
        let categories = this.props.categories;
        return (
            <div className="categories-component">
                <h1 className="categories-header">Categories</h1>
                <ListGroupCategory items={categories} home={true} keys={["name"]} prefix="categories"/>
            </div>
        )
    }
}
export default Categories;
