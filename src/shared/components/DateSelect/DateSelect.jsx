import React, {useState} from 'react'
import "./DateSelect.css"

function isNumber(char) {
    return /^\d$/.test(char);
}

const DateSelect = () => {

    const [dateInput, setDateInput] = useState("");

    const handleChange = (event) => {

        const inputDate = event.target.value;
        let formattedDate = '';

        if (/^\d{0,2}$/.test(inputDate)) {
            formattedDate = inputDate;
        }
        if (/^\d{2}$/.test(inputDate)) {
            formattedDate = inputDate + '-';
        }
        if (/^\d{2}-\d{0,2}$/.test(inputDate)) {
            formattedDate = inputDate.replace(/^(\d{4})(\d{0,2})$/, '$1-$2');
        }
        if (/^\d{2}-\d{2}$/.test(inputDate)) {
            formattedDate = inputDate + '-';
        }
        if (/^\d{2}-\d{2}-\d{0,4}$/.test(inputDate)) {
            formattedDate = inputDate.replace(/^(\d{4})(\d{2})(\d{0,2})$/, '$1-$2-$3');
        }

        setDateInput(formattedDate)
    };

    return (
        <div className="date-select-wrapper">
            <div className="date-picker-form">
                <img src={process.env.PUBLIC_URL + "/icon/date.svg"} className="date_icon"/>
                <input type="text" className="date-picker-value" value={dateInput} placeholder="DD/MM/YYYY" onChange={handleChange}/>
            </div>
        </div>
    )
}

export default  DateSelect;