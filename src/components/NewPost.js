import React, {Component} from "react";
import schema from "../schemas/post.js"

function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'my_data.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}


class NewPost extends Component {

    form_render() {
        window.$("#form").alpaca({
            "schema": schema(),
            "data": {
                "name": "6ni6ok3ym7mf1p33lnez",
                "ranking": "Learn Redux in 10 minutes!",
                "feedback": " Moving on, I at last came to a dim sort of light not far from the docks, and heard a forlorn creaking in the air; and looking up, saw a swinging sign over the door with a white painting upon it, faintly representing a tall straight jet of misty spray, and these words underneath—“The Spouter Inn:—Peter Coffin.\r\n”\r\n\r\nCoffin?—Spouter?—Rather ominous in that particular connexion, thought I.\r\n But it is a common name in Nantucket, they say, and I suppose this Peter here is an emigrant from there.\r\n ..."
            },
            "options": {
                "fields": {
                    "voteScore": {
                        "type": "integer",
                    }
                },
                "form": {
                    "buttons": {
                        "submit": {
                            "title": "Send Form Data",
                            "click": function () {
                                let val = this.getValue();
                                if (this.isValid(true)) {
                                    alert("Valid value: " + JSON.stringify(val, null, "  "));
                                } else {
                                    alert("Invalid value: " + JSON.stringify(val, null, "  "));
                                }
                            }
                        }
                    }
                }
            }
        });
    }

    componentDidMount() {
        this.form_render();
    }

    componentDidUpdate() {
        this.form_render();
    }

    render() {
        let post = this.props.post;
        return (
            <div className="posts-component">
                <h1>Jeff Buck</h1>
                <div id="form">Body</div>
            </div>
        )
    }
}

export default NewPost;
