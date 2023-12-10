import {BorderTextFieldUI} from "../../../../shared/components/TextFieldUI/TextField";
import React from "react";

import './AnswerSelectOne.css'

const AnswerSelectOne = ({answer_text})=> {
    return(
        <div className="answer-select-one">
            <div className={'radio-select-one'}><input type='radio'/></div>
            <div className={'text-select-one-item'}><label className={'answer-label'}>{answer_text}</label></div>
        </div>
    )
}
export default AnswerSelectOne