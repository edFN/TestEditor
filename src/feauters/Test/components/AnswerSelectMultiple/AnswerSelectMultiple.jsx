import {BorderTextFieldUI} from "../../../../shared/components/TextFieldUI/TextField";
import React from "react";

import './AnswerSelectMultiple.css'

const AnswerSelectMultiple = ({answer_text})=> {
    return(
        <div className="answer-select-mulitple">
            <div className={'radio-select-multiple'}><input type='checkbox'/></div>
            <div className={'text-select-multiple-item'}><label className={'answer-label'}>{answer_text}</label></div>
        </div>
    )
}
export default AnswerSelectMultiple