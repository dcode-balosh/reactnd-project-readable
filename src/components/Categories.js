import React, {Component} from "react";
class Categories extends Component {
    render(){
        return(
            <div className="categories-component">
                <h1 className="categories-header">Categories</h1>
                <ul className="list-group">
                    <a href="#" className="list-group-item list-group-item-action"><i className="fa fa-home fa-fw"/>All</a>
                    <a href="#" className="list-group-item list-group-item-action">Categorie-1</a>
                    <a href="#" className="list-group-item list-group-item-action">Categorie-2</a>
                    <a href="#" className="list-group-item list-group-item-action">Categorie-3</a>
                </ul>
            </div>
        )
    }
}
export default Categories;
