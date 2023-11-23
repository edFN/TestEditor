
import React, { useState } from 'react';


import "./TextField.css"

export const TextFieldUIBase = ({fieldName, onChangeAction ,type , placeHolder = ""}) => {
    return (
        <input type='text' className={`text-field-ui ${type}`} name={fieldName} placeHolder={placeHolder} onChange={onChangeAction}/>
    )
}

export const BorderTextFieldUI = ({borderType, props})=>{
    return (
        <div className={`border-text-field-wrapper ${borderType}`}>
            <TextFieldUIBase {...props}/>
        </div>
    )
}

