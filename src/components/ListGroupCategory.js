import React, {Component} from "react";
import { NavLink } from 'react-router-dom'

class ListGroupCategory extends Component {
    render() {
        return (
            <ul className="list-group">
                <NavLink exact to={`/`}
                   className="list-group-item list-group-item-action">
                    <i className="fa fa-home fa-fw"/>
                    All
                </NavLink>
                {this.props.items.map((c, i) =>
                    <NavLink exact to={`/${this.props.prefix}/${c.name}/`}
                       className="list-group-item list-group-item-action"
                       key={i}>
                        {`${c.name}`}
                    </NavLink>
                )}
            </ul>
        )
    }
}
export default ListGroupCategory;
