import React from "react";
import * as PostClickHelper from './PostClickHelper'
import {NavLink} from "react-router-dom";

function PostControls(props) {
    let {location,dispatch,post} = props;
    let modal = 'post';
    return (
        <div className="row text-center">

            <div className="col-md-3">
                <NavLink exact to={`/${post.category}/${post.id}/edit`}>
                    <i className="fa fa-pencil" aria-hidden="true"/>
                </NavLink>
            </div>
            <div className="col-md-3">
                <NavLink exact to='/' onClick={() => PostClickHelper.onDeleteClick(dispatch,modal,post.id)}>
                    <i className="fa fa-eraser" aria-hidden="true"/>
                </NavLink>
            </div>
            <div className="col-md-3">
                <NavLink exact to={{search: `?upvotedPost=${post.id}`}} onClick={() => PostClickHelper.onUpvoteClick(dispatch,modal,post.id)}>
                    <i className="fa fa-thumbs-o-up" aria-hidden="true"> +1</i>
                </NavLink>
            </div>
            <div className="col-md-3">
                <NavLink exact to={{search: `?downvotedPost=${post.id}`}} onClick={() => PostClickHelper.onDownvoteClick(dispatch,modal,post.id)}>
                    <i className="fa fa-thumbs-o-down" aria-hidden="true"> -1</i>
                </NavLink>
            </div>
        </div>

    )
}
export default PostControls;
