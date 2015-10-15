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
            <form onSubmit={ this.handleSubmit }>
                <label className="sr-only">Headline</label>
                <input ref=""
                    type="text"
                    className="form-control form-control-bundle-first"
                    placeholder="Headline" />
                <label className="sr-only">Message</label>
                <textarea ref=""
                    className="form-control form-control-bundle-last"
                    placeholder="Message"
                    rows={4} />
                <button type="submit" className="btn btn-primary">Post</button>
            </form>
        );
    }
    handleSubmit(e) {
        e.preventDefault();
        const author = this.refs.author.value.trim();
        const text = this.refs.text.value.trim();
        if (!text || !author) { return; }
        this.refs.author.value = "";
        this.refs.text.value = "";
        return;
    }
}

export default QuestionForm;
