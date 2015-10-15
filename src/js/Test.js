import QuestionActions from "./actions/QuestionActions";

export class Test {
    constructor() {
    }
    init() {
        QuestionActions.updateQuestion("Why this course teaches so much outdated knowledge?", "Does anyone agree with me?");
        QuestionActions.updateQuestion("testing1", "testing2");
    }
}
