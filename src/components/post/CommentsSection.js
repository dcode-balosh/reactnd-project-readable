import React, {Component} from "react";
import ListComments from "./ListComments";

class CommentsSectionComponent extends Component {
    render() {
        let {comments, commentsAnchor} = this.props;

        if(0 === comments.length){
            return(
                <div className="CommentsSectionComponent">
                    <div className="py-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <h2 className="page-header text-center text-capitalize"><a name={commentsAnchor}>No Comments</a></h2>
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
                            {comments.map((comment) => (
                                <ListComments comment={comment}/>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default CommentsSectionComponent;
