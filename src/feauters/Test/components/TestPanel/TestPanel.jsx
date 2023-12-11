import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import './TestPanel.css'
import SearchPanelList from "../../../MyListTest/components/SearchPanelList/SearchPanelList";
import ButtonUI from "../../../../shared/components/Button/Button";
import AnswerSelectOne from "../AnswerSelectOne/AnswerSelectOne";
import AnswerSelectMultiple from "../AnswerSelectMultiple/AnswerSelectMultiple";
import { BorderTextFieldUI } from "../../../../shared/components/TextFieldUI/TextField";




const TestPanel = ({item, index, handleClickAnswer, handleClickPass,
    handleAnswerChoiceChange, handleAnswerTextChange,
    currentAnswer})=>{

    console.log("Item", item)
    
    let listChoice = []

    if(item.type === 1){
        console.log("LIST CHOICE TYPE=1")
        listChoice = item.answers.map((itemField)=>(
            <AnswerSelectOne answer_id={itemField.id} 
            answer_text={itemField.answer_text}
            index={index}
            answerChange={handleAnswerChoiceChange}
            currentAnswers={currentAnswer} />
        ))
        console.log("After", listChoice)
    }

    else if(item.type === 2){
        listChoice = item.answers.map((itemField)=>(
            <AnswerSelectMultiple 
            answer_id={itemField.id} 
            index={index} 
            answer_text={itemField.answer_text}
            answerChange={handleAnswerChoiceChange}
            currentAnswers={currentAnswer}/>
        ))
    }

    else{
        listChoice =  <BorderTextFieldUI 
        borderType='tf-border-black tf-allow-shadow tf-30rem' 
        name='answer_text' label="Ответ"
        onChangeAction={(e)=>handleAnswerTextChange(index,e)}/>
    }

    const handleAnswerClicked = (e)=>{
        handleClickAnswer(e,index)
    }

    
    


    return (
        <div className={'test-panel-block'}>
            <div className='test-window-wrapper'>
                <div className="question-block-text">
                    <span>{item.question}</span>
                </div>

                <div className={'test-window-test-block'}>
                       {listChoice}
                </div>

                <div className="test-buttons">
                    <ButtonUI type='green small' onClickEvent={handleAnswerClicked} text={"Ответить"}/>
                    <ButtonUI type='blue small' onClickEvent={handleClickPass} text={'Пропустить'}/>
                </div>
            </div>

        </div>
     
    )

}

export default TestPanel