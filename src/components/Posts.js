import React, {Component} from "react";
class Posts extends Component {
    render() {
        return (
            <div className="posts-component">
                <h1 className="posts-header">Posts</h1>
                <div className="text-right">
                    <div className="btn-group">
                        <a href="#" className="btn btn-outline-primary">Score <i
                            className="fa fa-sort-numeric-desc" aria-hidden="true"/></a>
                        <a href="#" className="btn btn-outline-primary">Time <i
                            className="fa fa-sort-numeric-desc" aria-hidden="true"/></a>
                        <a href="#" className="btn btn-outline-primary">New <i className="fa fa-plus"
                                                                               aria-hidden="true"/></a>
                    </div>
                </div>
                <ul className="list-group">
                    <a href="#" className="list-group-item list-group-item-action">Post-1</a>
                    <a href="#" className="list-group-item list-group-item-action">Post-2</a>
                    <a href="#" className="list-group-item list-group-item-action">Post-n</a>
                </ul>
            </div>
        )
    }
}
export default Posts;
