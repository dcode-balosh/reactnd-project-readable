import * as Api from '../../Api'
export function onDeleteClick(dispatch,modal,id) {
    switch(modal){
        case "post":
            Api.deletePost(dispatch,id);
            break;
        case "comment":
            Api.deleteComment(dispatch,id);
            break;
        default:
            console.log(`Error no such modal ${modal}`)
    }
}

export function onUpvoteClick(dispatch,modal,id) {
    switch(modal){
        case "post":
            Api.votePost(dispatch,id,'upVote');
            break;
        case "comment":
            Api.voteComment(dispatch,id,'upVote');
            break;
        default:
            console.log(`Error no such modal ${modal}`)
    }

}

export function onDownvoteClick(dispatch,modal,id) {
    switch(modal){
        case "post":
            Api.votePost(dispatch,id,'downVote');
            break;
        case "comment":
            Api.voteComment(dispatch,id,'downVote');
            break;
        default:
            console.log(`Error no such modal ${modal}`)
    }

}
