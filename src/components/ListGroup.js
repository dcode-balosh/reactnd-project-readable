import React, {Component} from "react";
class ListGroup extends Component {
    render() {
        return (
            <ul className="list-group">
                {this.props.home && (
                    <a href={`${this.props.prefix}/#`}
                       className="list-group-item list-group-item-action">
                        <i className="fa fa-home fa-fw"/>
                        All
                    </a>
                )}
                {this.props.items.map((c, i) =>
                    <a href={`${this.props.prefix}/${c}`}
                       className="list-group-item list-group-item-action"
                    key={i}>
                        {`${c}`}
                    </a>
                )}
            </ul>
        )
    }
}
export default ListGroup;
