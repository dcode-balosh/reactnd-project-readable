import React from "react";
import ListGroupCategory from './Categories/ListGroupCategory'

function Categories(props){
    let categories = props.categories;
    return (
        <div className="categories-component">
            <h1 className="categories-header">Categories</h1>
            <ListGroupCategory items={categories}
                               home={true}
                               keys={["name"]}
                               prefix="categories"
                               location={props.location}
            />
        </div>
    )
}
export default Categories;
