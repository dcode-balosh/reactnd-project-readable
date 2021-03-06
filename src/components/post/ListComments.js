import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import * as PostClickHelper from './PostClickHelper'
class ListComments extends Component {
    render() {
        let {
            comment,
            location,
            dispatch
        } = this.props;

        let modal = 'comment';
        return (
            <div className="col-md-12" key={comment.id}>
                <div className="py-2">
                    <div className="card">
                        <div className="card-header text-center">
                            <div className="row text-center text-capitalize">
                                <div className="col-md-4">
                                    {comment.author}
                                </div>
                                <div className="col-md-4">{comment.timeStamp}</div>
                                <div className="col-md-4"><i className="fa fa-thumbs-up"
                                                             aria-hidden="true">
                                    {comment.voteScore}</i></div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-12">
                                    <p>{comment.body}</p>
                                </div>
                            </div>
                            <div className="row text-center">
                                <div className="col-md-3">
                                    <NavLink exact to={`${location.pathname}/comments/${comment.id}/edit`}>
                                        <i className="fa fa-pencil" aria-hidden="true"/>
                                    </NavLink>
                                </div>
                                <div className="col-md-3">
                                    <NavLink exact to={{search: `?deletedComment=${comment.id}`}} onClick={() => PostClickHelper.onDeleteClick(dispatch,modal,comment.id)}>
                                        <i className="fa fa-eraser" aria-hidden="true"/>
                                    </NavLink>
                                </div>
                                <div className="col-md-3">
                                    <NavLink exact to={{search: `?upvotedComment=${comment.id}`}} onClick={() => PostClickHelper.onUpvoteClick(dispatch,modal,comment.id)}>
                                        <i className="fa fa-thumbs-o-up" aria-hidden="true"> +1</i>
                                    </NavLink>
                                </div>
                                <div className="col-md-3">
                                    <NavLink exact to={{search: `?downvotedComment=${comment.id}`}} onClick={() => PostClickHelper.onDownvoteClick(dispatch,modal,comment.id)}>
                                        <i className="fa fa-thumbs-o-down" aria-hidden="true"> -1</i>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListComments;
