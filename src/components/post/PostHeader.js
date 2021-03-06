import React from "react";
// https://gist.githubusercontent.com/jlabresh1-code/4179576/raw/b86379b3d590422647e3d62e0b83e5090ec8f4e4/timestamp.js
function timeStamp(timestamp) {
    let now = new Date(timestamp);
    let date = [now.getMonth() + 1, now.getDate(), now.getFullYear()];
    let time = [now.getHours(), now.getMinutes(), now.getSeconds()];
    let suffix = ( time[0] < 12 ) ? "AM" : "PM";
    time[0] = ( time[0] < 12 ) ? time[0] : time[0] - 12;
    time[0] = time[0] || 12;
    for (let i = 1; i < 3; i++) {
        if (time[i] < 10) {
            time[i] = "0" + time[i];
        }
    }
    return date.join("/") + " " + time.join(":") + " " + suffix;
}

function PostHeader(props) {
    let {commentsLength,post} = props;
    return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="page-header text-center text-capitalize">
                            <h1>{post.title}</h1>
                        </div>
                    </div>
                </div>
                <div className="row text-center text-capitalize">
                    <div className="col-md-3">{post.author}</div>
                    <div className="col-md-3">{timeStamp(post.timestamp)}</div>
                    <div className="col-md-3"><i className="fa fa-thumbs-up"
                                                 aria-hidden="true">  {post.voteScore}  </i></div>
                    <div className="col-md-3"><i className="fa fa-comments" aria-hidden="true">  {commentsLength}  </i>
                    </div>
                </div>
            </div>

    )
}
export default PostHeader;
