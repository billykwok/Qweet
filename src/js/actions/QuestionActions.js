import alt from "../alt";

class QuestionActions {
    updateQuestion(headline, message) {
        return { headline, message };
    }
}

export default alt.createActions(QuestionActions);
