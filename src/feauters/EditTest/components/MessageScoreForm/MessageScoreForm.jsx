import React from "react";
import {ToggleSelect} from "../../../../shared/components/ChoiceSelect/ChoiceSelect";


import "./MessageScoreForm.css"

const MessageScoreForm = ({onChange})=>{


    const value = [
        {
            score: 120,
            message: "Flower bloom"
        },
        {
            score:50,
            message:"Blooming adsad"
        },
        {
            score: 120,
            message: "Flower bloom"
        },
        {
            score:50,
            message:"Blooming adsad"
        },
        {
            score: 120,
            message: "Flower bloom"
        },
        {
            score:50,
            message:"Blooming adsad"
        },
    ]


    const entryTable = value.map((item)=>(
        <div className="table-entry-item">
            <input type="number" value={item.score} className="score-field"/>
            <textarea value={item.message}></textarea>
        </div>
    ))

    return (
        <div className="message-score-wrapper">
            <ToggleSelect onChange={onChange} fields={{value:true, display_name: "Разное сообщение"}}/>

            <div className="window-score-wrapper">
                <div className="table-header-score">
                    <span>Количество очков</span>
                    <span>Сообщение</span>
                </div>
                <div className="table-entry-header">
                    {entryTable}
                </div>
            </div>


        </div>
    )
}

export default MessageScoreForm