import React from 'react'

import "./ChoiceSelect.css"

const ChoiceSelect = ({fields, className, onChange, initialState=[]}) => {

    const formCheckBox = fields.map( (field) => (
        <label className="checkBox-label">
            <input className="checkBox-input" type="checkbox" name={field.value} checked={initialState.includes(field.value) ? true: false}
                   onChange={(e)=>onChange(e)}/>
            {field.display_name}
        </label>
    ));

    console.log(className)

    return <div className={className}>{formCheckBox}</div>

}

export default  ChoiceSelect;