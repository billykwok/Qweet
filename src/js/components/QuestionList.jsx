import connectToStores from "alt/utils/connectToStores";
import React from "react";
import QuestionStore from "../stores/QuestionStore";

@connectToStores
class QuestionList extends React.Component {
    static propTypes = {
        className: React.PropTypes.string,
        children: React.PropTypes.oneOfType([
            React.PropTypes.arrayOf(React.PropTypes.node),
            React.PropTypes.node
        ]),
        questions: React.PropTypes.object
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
                    <div>
                        <p>{ question.title }</p>
                        <p>{ question.content }</p>
                    </div>)
                }
            </div>
        );
    }
}

export default QuestionList;
