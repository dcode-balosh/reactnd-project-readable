import React, {Component} from "react";
class ListGroupPost extends Component {
    constructor(props) {
        super(props);
        let posts = this.handle_props(props);

        this.state = {
            posts
        };
    }

    componentWillReceiveProps(nextProps){
        let posts = this.handle_props(nextProps);
        if(this.state.posts !== posts){
            this.setState({posts});
        }
    }

    handle_props(props) {
        let posts = props.items ? Object.values(props.items) : [];
        // filter active category if needed
        if (props.category) {
            posts = posts.filter(post => post.category === props.category);
        }
        // sort
        posts = props.sort(posts);
        return posts;
    }

    render() {
        return (
            <ul className="list-group">
                {this.state.posts.map((c, i) =>
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

