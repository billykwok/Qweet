import alt from "../alt";

class QuestionActions {
    updateQuestion(title, content) {
        return { title, content };
    }
}

export default alt.createActions(QuestionActions);
