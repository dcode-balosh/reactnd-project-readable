import React, {Component} from "react";
import PostHeader from "../post/PostHeader";
import PostControls from "../post/PostControls";
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
            let category = props.category.toLowerCase();
            posts = posts.filter((post) => (0 === post.category.toLowerCase().localeCompare(category)) );
        }
        // sort
        posts = props.sort(posts);
        return posts;
    }

    render() {
        if(!this.props.commentsLengths){
            return <div>Loading...</div>
        }
        let {
            commentsLengths,
            location,
            dispatch
        } = this.props;
        return (
            <ul className="list-group">
                {this.state.posts.map((post, i) =>
                    <div className="list-group-item text-center"
                         key={post.id}>
                        <a href={`/${post.category}/${post.id}`}>
                            Go to post
                        </a>
                        <PostHeader post={post}
                                    commentLength={commentsLengths[post.id]}
                        />
                        <PostControls location={location}
                                      dispatch={dispatch}
                                      post={post}/>
                    </div>
                )}
            </ul>
        )
    }
}
export default ListGroupPost;

