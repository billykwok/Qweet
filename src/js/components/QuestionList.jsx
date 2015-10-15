import connectToStores from "alt/utils/connectToStores";
import React from "react";
import QuestionStore from "../stores/QuestionStore";

class QuestionListItem extends React.Component {
    static propTypes = {
        className: React.PropTypes.string,
        children: React.PropTypes.oneOfType([
            React.PropTypes.arrayOf(React.PropTypes.node),
            React.PropTypes.node
        ]),
        question: React.PropTypes.object
    };
    render() {
        return (
            <div className="card card-block">
                <p className="card-text">{ this.props.question.headline }</p>
                <p className="card-text">{ this.props.question.message }</p>
                <a href="#" className="card-link">Upvote</a>
                <a href="#" className="card-link">Downvote</a>
            </div>
        );
    }
}

@connectToStores
class QuestionList extends React.Component {
    static propTypes = {
        className: React.PropTypes.string,
        children: React.PropTypes.oneOfType([
            React.PropTypes.arrayOf(React.PropTypes.node),
            React.PropTypes.node
        ]),
        questions: React.PropTypes.arrayOf(React.PropTypes.object)
    };
    static getStores() {
        return [ QuestionStore ];
    }
    static getPropsFromStores() {
        return QuestionStore.getState();
    }
    render() {
        return (
            <div>
                {
                    this.props.questions.map((question) =>
                        <QuestionListItem question={ question } />
                    )
                }
            </div>
        );
    }
}

export default QuestionList;
