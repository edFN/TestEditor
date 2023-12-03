
import React, { useState } from 'react';


import "./TextField.css"

export const TextFieldUIBase = ({fieldName, onChangeAction ,type , placeHolder = "", name="", typeForm="text"}) => {
    return (
        <input type={typeForm} className={`text-field-ui ${type}`} name={fieldName} placeHolder={placeHolder} onChange={(e)=>onChangeAction(e)} name={name}/>
    )
}

export const BorderTextFieldUI = (props)=>{

    return (
        <div className={`border-text-field-wrapper ${props.borderType}`}>
            <TextFieldUIBase {...props}/>
        </div>
    )
}

