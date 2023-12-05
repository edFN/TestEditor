import React, {useState} from "react";
import {ToggleSelect} from "../../../../shared/components/ChoiceSelect/ChoiceSelect";


import "./MessageScoreForm.css"

const MessageScoreForm = ({onChange})=>{

    const [value, setValue] = useState([])


    const handleClickLabel = (e)=>{
        setValue([...value, {
            points: 0,
            text: ""
        }])
    }

    const handleChangeScore = (e, index) => {
            const updatedAnswer = [...value]
            updatedAnswer[index].points = e.target.value
            setValue(updatedAnswer)
    }

    const handleChangeText= (e, index)=> {
        const updatedAnswer = [...value]
        updatedAnswer[index].text = e.target.value
        setValue(updatedAnswer)
    }


    const entryTable = value.map((item,index)=>(
        <div className="table-entry-item">
            <input type="number" value={item.points} className="score-field" onChange={(e)=>handleChangeScore(e,index)}/>
            <textarea style={{borderStyle:`1 solid black`}} className='question-textarea' value={item.message} onChange={(e)=>handleChangeText(e,index)}></textarea>
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

                <label onClick={handleClickLabel}>Добавить</label>

            </div>
        </div>
    )
}

export default MessageScoreForm