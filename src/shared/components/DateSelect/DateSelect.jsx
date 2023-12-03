import React, {useState} from 'react'
import "./DateSelect.css"

function isNumber(char) {
    return /^\d$/.test(char);
}

const DateSelect = ({name, onChange, initialState=""}) => {

    const [dateInput, setDateInput] = useState(initialState);


    const handleChange = (event) => {

        const inputDate = event.target.value;
        let formattedDate = '';

        if (/^\d{0,2}$/.test(inputDate)) {
            formattedDate = inputDate;
        }
        if (/^\d{2}$/.test(inputDate)) {
            formattedDate = inputDate + '/';
        }
        if (/^\d{2}\/\d{0,2}$/.test(inputDate)) {
            formattedDate = inputDate.replace(/^(\d{4})(\d{0,2})$/, '$1/$2');
        }
        if (/^\d{2}\/\d{2}$/.test(inputDate)) {
            formattedDate = inputDate + '/';
        }
        if (/^\d{2}\/\d{2}\/\d{0,4}$/.test(inputDate)) {
            formattedDate = inputDate.replace(/^(\d{4})(\d{2})(\d{0,2})$/, '$1/$2/$3');
        }

        setDateInput(formattedDate)
        onChange(event.target.name, formattedDate)
    };

    const handleCustomDatePicker = (e)=>{

        let date = e.target.value

        let newDate = new Date(date)

        let formattedDate = newDate.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });



        setDateInput(formattedDate)

        onChange(e.target.name, formattedDate)
    }

    return (
        <div className="date-select-wrapper">
            <div className="date-picker-form">
                <img src={process.env.PUBLIC_URL + "/icon/date.svg"} className="date_icon"/>
                <input type="date" className="date-picker-datepicker" name={name} onChange={handleCustomDatePicker}/>
                <input type="text" className="date-picker-value" value={dateInput} placeholder="DD/MM/YYYY" name={name} onChange={handleChange}/>
            </div>
        </div>
    )
}

export default  DateSelect;