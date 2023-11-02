import React, {useState} from 'react'
import "./DateSelect.css"

function isNumber(char) {
    return /^\d$/.test(char);
}

const DateSelect = () => {

    const [dateInput, setDateInput] = useState("");

    const handleClick = (e)=>{

    }

    const maskDateInput = (e)=>{
        if(!isNumber(e.eventPhase)){

        }
    }

    return (
        <div className="date-select-wrapper">
            <div className="date-picker-form">
                <img src={process.env.PUBLIC_URL + "/icon/date.svg"} className="date_icon"/>
                <input type="text" className="date-picker-value" onChange={maskDateInput}/>
            </div>
        </div>
    )
}

export default  DateSelect;