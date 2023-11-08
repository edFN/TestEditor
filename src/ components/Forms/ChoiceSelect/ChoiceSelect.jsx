import React from 'react'

import "./ChoiceSelect.css"

const ChoiceSelect = ({fields, className}) => {

    console.log(fields)

    const formCheckBox = fields.map( (field) => (
        <label className="checkBox-label">
            <input className="checkBox-input" type="checkbox" name={field.variable}/>
            {field.name}
            </label>
    ));

    console.log(className)

    return <div className={className}>{formCheckBox}</div>

}




export default  ChoiceSelect;