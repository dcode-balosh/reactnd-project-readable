import * as Api from '../../Api'
export function onDeleteClick(modal,id) {
    switch(modal){
        case "post":
            Api.deletePost(this.props.dispatch,id);
            break;
        case "comment":
            Api.deleteComment(this.props.dispatch,id);
            break;
        default:
            console.log(`Error no such modal ${modal}`)
    }
}

export function onUpvoteClick(modal,id) {
    switch(modal){
        case "post":
            Api.votePost(this.props.dispatch,id,'upVote');
            break;
        case "comment":
            Api.voteComment(this.props.dispatch,id,'upVote');
            break;
        default:
            console.log(`Error no such modal ${modal}`)
    }

}

export function onDownvoteClick(modal,id) {
    switch(modal){
        case "post":
            Api.votePost(this.props.dispatch,id,'downVote');
            break;
        case "comment":
            Api.voteComment(this.props.dispatch,id,'downVote');
            break;
        default:
            console.log(`Error no such modal ${modal}`)
    }

}
