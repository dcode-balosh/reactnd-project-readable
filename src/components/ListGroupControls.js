import React, {Component} from "react";

class ListGroupControls extends Component {
    sortByVoteScore = (arr) => {
        return arr.length === 0
            ? arr
            : arr.sort(
                (a, b) =>
                    (a.voteScore === b.voteScore
                        ? 0
                        : (a.voteScore > b.voteScore ? -1 : 1) )
            )
    };

    sortByTimeStamp = (arr) => {
        return arr.length === 0
            ? arr
            : arr.sort(
                (a, b) =>
                    (a.timestamp === b.timestamp
                        ? 0
                        : (a.timestamp > b.timestamp ? -1 : 1) )
            )

    };

    componentDidMount(){
        this.props.sortBy(this.sortByVoteScore);
    }


    render() {
        return (
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
        )
    }
}
export default ListGroupControls;
