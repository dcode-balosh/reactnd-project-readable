import React, {Component} from "react";
import ListComments from "./ListComments";
import {NavLink} from "react-router-dom";

class CommentsSectionComponent extends Component {
    render() {
        let {comments,
            commentsAnchor,
            location,
            onDeleteClick,
            onUpvoteClick,
            onDownvoteClick
        } = this.props;

        if(0 === comments.length){
            return(
                <div className="CommentsSectionComponent">
                    <div className="py-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <h2 className="page-header text-center text-capitalize"><a name={commentsAnchor}>No
                                        Comments</a></h2>
                                    <div className="row">
                                        <div className="col-md-12 text-right">
                                            <div className="btn-group">
                                                <NavLink to={`${location.pathname}/comments/new`}
                                                         className="btn btn-outline-primary">New <i className="fa fa-plus"
                                                                                                    aria-hidden="true"/></NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            )
        }

        return (
            <div className="CommentsSectionComponent">
                <div className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="page-header text-center text-capitalize"><a name={commentsAnchor}>Comments</a></h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-right">
                                <div className="btn-group">
                                    <NavLink to={`${location.pathname}/comments/new`}
                                             className="btn btn-outline-primary">New <i className="fa fa-plus"
                                                                                        aria-hidden="true"/></NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {comments.map((comment) => (
                                <ListComments key={comment.id}
                                              comment={comment}
                                              location={location}
                                              onDeleteClick={onDeleteClick}
                                              onUpvoteClick={onUpvoteClick}
                                              onDownvoteClick={onDownvoteClick}
                                />
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default CommentsSectionComponent;
