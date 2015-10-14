import alt from "../alt";
import QuestionActions from "../actions/QuestionActions";

class QuestionStore {
    constructor() {
        this.bindListeners({
            updateQuestion: QuestionActions.updateQuestion
        });

        this.state = {
            questions: []
        };
    }

    updateQuestion(question) {
        this.setState({ questions: this.state.questions.concat(question) });
    }
}

export default alt.createStore(QuestionStore, "QuestionStore");
