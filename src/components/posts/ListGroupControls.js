import React, {Component} from "react";
import {NavLink} from "react-router-dom";

class ListGroupControls extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postSortBy: 'voteScore'
        };
    }

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

    componentWillReceiveProps(nextProps) {
        const params = new URLSearchParams(nextProps.location.search);
        const postSortBy = params.get('postSortBy') || 'voteScore'; // default voteScore

        if (this.state.postSortBy !== postSortBy) {
            this.setState({
                postSortBy
            })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.postSortBy !== this.state.postSortBy) {
            switch (this.state.postSortBy) {
                case 'voteScore':
                    this.props.sortBy(this.sortByVoteScore);
                    break;
                case 'timeStamp':
                    this.props.sortBy(this.sortByTimeStamp);
                    break;
                default:
                    this.props.sortBy(this.sortByVoteScore);
            }
        }
    }

    render() {
        return (
            <div className="text-right">
                <div className="btn-group">
                    <NavLink
                        className="btn btn-outline-primary"
                        to={{search: "?postSortBy=voteScore"}}
                        isActive={() => this.state.postSortBy === 'voteScore'}
                    >
                        Score
                        <i className="fa fa-sort-numeric-desc" aria-hidden="true"/></NavLink>
                    <NavLink
                        className="btn btn-outline-primary"
                        to={{search: "?postSortBy=timeStamp"}}
                        isActive={() => this.state.postSortBy === 'timeStamp'}
                    >
                        Time
                        <i className="fa fa-sort-numeric-desc" aria-hidden="true"/></NavLink>
                    <a href="/posts/new" className="btn btn-outline-primary">New <i className="fa fa-plus"
                                                                                    aria-hidden="true"/></a>
                </div>
            </div>
        )
    }
}
export default ListGroupControls;
