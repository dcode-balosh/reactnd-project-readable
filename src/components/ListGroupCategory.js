import React, {Component} from "react";
import { NavLink } from 'react-router-dom'

class ListGroupCategory extends Component {
    render() {
        return (
            <ul className="list-group">
                <NavLink exact to={
                    {
                        pathname: `/`,
                        search: `${this.props.location.search}`
                    }
                }
                         className="list-group-item list-group-item-action">
                    <i className="fa fa-home fa-fw"/>
                    All
                </NavLink>
                {this.props.items.map((c, i) =>
                    <NavLink exact to={
                        {
                            pathname: `/${this.props.prefix}/${c.name}`,
                            search: `${this.props.location.search}`
                        }
                    }
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
