import connectToStores from "alt/utils/connectToStores";
import React from "react";
import QuestionStore from "../stores/QuestionStore";

@connectToStores
class QuestionForm extends React.Component {
    static propTypes = {
        className: React.PropTypes.string,
        children: React.PropTypes.oneOfType([
            React.PropTypes.arrayOf(React.PropTypes.node),
            React.PropTypes.node
        ]),
        questions: React.PropTypes.object
    };
    static getStores() { return [ QuestionStore ]; }
    static getPropsFromStores() { return QuestionStore.getState(); }
    render() {
        return (
            <form>
                <fieldset className="form-group">
                    <label htmlFor="exampleInputEmail1">Message</label>
                    <input type="text" className="form-control" placeholder="Enter question here..." />
                </fieldset>
                <button type="submit" className="btn btn-primary">Post</button>
            </form>
        );
    }
}

export default QuestionForm;
