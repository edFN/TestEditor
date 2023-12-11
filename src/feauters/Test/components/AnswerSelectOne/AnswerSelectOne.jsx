import {BorderTextFieldUI} from "../../../../shared/components/TextFieldUI/TextField";
import React from "react";

import './AnswerSelectOne.css'

const AnswerSelectOne = ({answer_text, answer_id, answerChange, index,
    currentAnswers })=> {
    

    console.log("YA TOXIC")
    const checkBoxChange = (e)=>{

        console.log("Cura",currentAnswers)

        if(e.target.checked){
            const data = [answer_id]
            answerChange(data, index);
        }
        else{
            const data = currentAnswers.answer_id.filter((item)=>item !== answer_id)
            answerChange(data,index)
        }
    }

    console.log(currentAnswers)
   

    return(
        <div className="answer-select-one">
            <div className={'radio-select-one'}><input type='radio' 
            checked={currentAnswers.answer_id.length > 0 && 
            currentAnswers.answer_id[0] === answer_id} onChange={checkBoxChange}/></div>
            <div className={'text-select-one-item'}><label className={'answer-label'}>{answer_text}</label></div>
        </div>
    )
}
export default AnswerSelectOne