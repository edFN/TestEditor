import {BorderTextFieldUI} from "../../../../shared/components/TextFieldUI/TextField";
import React from "react";

import './AnswerSelectMultiple.css'

const AnswerSelectMultiple = ({answer_text, answer_id, answerChange, index,
    currentAnswers})=> {

    const checkBoxChange = (e)=>{

        console.log("Cura",currentAnswers)

        if(e.target.checked){
            answerChange([...currentAnswers.answer_id, answer_id], index);
        }
        else{
            const data = currentAnswers.answer_id.filter((item)=>item !== answer_id)
            answerChange(data,index)
        }
    }

    return(
        <div className="answer-select-mulitple">
            <div className={'radio-select-multiple'}><input type='checkbox' 
            onChange={checkBoxChange}/></div>
            <div className={'text-select-multiple-item'}><label className={'answer-label'}>{answer_text}</label></div>
        </div>
    )
}
export default AnswerSelectMultiple