import React, {Component} from "react";
class ListGroupPost extends Component {
    render() {
        let sorted_posts = this.props.sort(Object.values(this.props.items));
        return (
            <ul className="list-group">
                {sorted_posts.map((c, i) =>
                    <a href={`/${this.props.prefix}/${c.id}`}
                       className="list-group-item list-group-item-action"
                    key={c.id}>
                        {`${c.title}`}
                    </a>
                )}
            </ul>
        )
    }
}
export default ListGroupPost;
