import QuestionActions from "./actions/QuestionActions";

export class Test {
    constructor() {
    }
    init() {
        QuestionActions.updateQuestion("testing1", "testing2");
        QuestionActions.updateQuestion("testing1", "testing2");
    }
}
