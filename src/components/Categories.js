import React, {Component} from "react";
import ListGroup from './ListGroup'
class Categories extends Component {
    render() {
        let categories = ['one', 'two', 'three'];
        return (
            <div className="categories-component">
                <h1 className="categories-header">Categories</h1>
                <ListGroup items={categories} home={true} prefix="categories"/>
            </div>
        )
    }
}
export default Categories;
