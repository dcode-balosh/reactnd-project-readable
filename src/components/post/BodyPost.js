import React, {Component} from "react";
import PostControls from "./PostControls";
import PostHeader from "./PostHeader";

class BodyPost extends Component {
    render() {
        let {post,
            commentsLength,
            location,
            dispatch
        } = this.props;
        return (
            <div className="bodyPostClass">
                <div className="py-5">
                    <PostHeader
                        commentsLength={commentsLength}
                        post={post}
                    />
                </div>


                <div className="container">
                    <div className="row py-5">
                        <div className="col-md-12">
                            <p style={{whiteSpace: "pre-wrap"}}>{post.body}</p>
                        </div>
                    </div>


                </div>

                <PostControls location={location}
                              dispatch={dispatch}
                              post={post}
                />


                <div className="py-5">
                    <hr/>
                </div>
            </div>
        )
    }
}

export default BodyPost;
