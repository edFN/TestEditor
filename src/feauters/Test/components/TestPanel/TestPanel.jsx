import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import './TestPanel.css'
import SearchPanelList from "../../../MyListTest/components/SearchPanelList/SearchPanelList";
import ButtonUI from "../../../../shared/components/Button/Button";
import AnswerSelectOne from "../AnswerSelectOne/AnswerSelectOne";
import AnswerSelectMultiple from "../AnswerSelectMultiple/AnswerSelectMultiple";

const TestPanel = ({item})=>{

    return (
        <div className={'test-panel-block'}>
            <div className='test-window-wrapper'>
                <div className="question-block-text">
                    <span>{item.question}</span>
                </div>

                <div className={'test-window-test-block'}>
                    <AnswerSelectMultiple answer_text={"в 1982 году д122231232131223о н1231231232132131232132131212312312ашей эры"}/>
                    <AnswerSelectMultiple answer_text={"в 1982 году до нашей эры"}/>
                    <AnswerSelectMultiple answer_text={"в 1982 году до нашей эры"}/>
                    <AnswerSelectMultiple answer_text={"в 1982 году до нашей эры"}/>
                    <AnswerSelectMultiple answer_text={"в 1982 году до нашей эры"}/>
                    <AnswerSelectMultiple answer_text={"в 1982 году до нашей эры"}/>
                </div>
            </div>
        </div>
    )

}

export default TestPanel