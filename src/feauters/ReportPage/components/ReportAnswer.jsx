
import './ReportAnswer.css'

const ReportAnswer = ({item}) => {
    return (
        <div className="report-answer-block">
            <div className="question-report-answer">
                <span>{item.question}</span>
            </div>
            <div className="user-answer-block">
                {item.type === "CHOICE" && (
                    <div className="answer-entry-user">
                        <span>Полученный ответ: {item.answers.toString()}</span>
                        <span>Правильный ответ: {item.right_answer.toString()}</span>
                    </div>
                )}
                {item.type === "TEXT" && (
                    <div className="answer-entry-user">
                        <span>Полученный ответ: {item.answer_text}</span>
                        <span>Правильный ответ: {item.right_answer}</span>
                    </div>
                )}

            </div>
        </div>
    )
}

export default ReportAnswer;