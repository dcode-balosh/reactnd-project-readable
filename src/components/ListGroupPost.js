import React, {Component} from "react";
class ListGroupPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }
    componentWillReceiveProps(nextProps){
        let posts = Object.values(nextProps.items);
        // filter active category if needed
        if(nextProps.category){
            posts = posts.filter(post => post.category === nextProps.category);
        }
        // sort
        posts = nextProps.sort(posts);
        if(this.state.posts !== posts){
            this.setState({posts});
        }
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

