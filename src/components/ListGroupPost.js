import React, {Component} from "react";
class ListGroupPost extends Component {
    render() {
        return (
            <ul className="list-group">
                {Object.keys(this.props.items).map((c, i) =>
                    <a href={`/${this.props.prefix}/${c}`}
                       className="list-group-item list-group-item-action"
                    key={i}>
                        {`${c}`}
                    </a>
                )}
            </ul>
        )
    }
}
export default ListGroupPost;
