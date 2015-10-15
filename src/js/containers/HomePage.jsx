import React from "react";
import QuestionForm from "../components/QuestionForm";
import QuestionList from "../components/QuestionList";

class HomePage extends React.Component {
    static propTypes = {
        children: React.PropTypes.oneOfType([
                React.PropTypes.arrayOf(React.PropTypes.node),
                React.PropTypes.node
            ])
    };

    render() {
        return (
            <div className="page page-home">
                <section className="container question-form-container">
                    <QuestionForm />
                </section>
                <section className="container question-list-container">
                    <QuestionList />
                </section>
            </div>
        );
    }
}

export default HomePage;
