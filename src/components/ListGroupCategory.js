import React, {Component} from "react";
class ListGroupCategory extends Component {
    render() {
        return (
            <ul className="list-group">
                <a href={`${this.props.prefix}/#`}
                   className="list-group-item list-group-item-action">
                    <i className="fa fa-home fa-fw"/>
                    All
                </a>
                {this.props.items.map((c, i) =>
                    <a href={`/${this.props.prefix}/${c.name}`}
                       className="list-group-item list-group-item-action"
                       key={i}>
                        {`${c.name}`}
                    </a>
                )}
            </ul>
        )
    }
}
export default ListGroupCategory;
