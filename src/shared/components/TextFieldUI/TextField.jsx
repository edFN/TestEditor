
import React, { useState } from 'react';


import "./TextField.css"

export const TextFieldUIBase = ({fieldName, onChangeAction ,type , placeHolder = "", name="", typeForm="text", backgroundColor='white',
                                initial=null}) => {

    if(initial !== null){
        return <input type={typeForm} className={`text-field-ui ${type} tf-background-${backgroundColor}`} placeHolder={placeHolder} onChange={(e)=>onChangeAction(e)}
                      value = {initial} name={name}/>
    }

    return (
        <input type={typeForm} className={`text-field-ui ${type} tf-background-${backgroundColor}`} placeHolder={placeHolder} onChange={(e)=>onChangeAction(e)} name={name}/>
    )
}

export const BorderTextFieldUI = (props)=>{

    const labelTextField = props.label

    return (
        
        <div className="tf-border-text-field">
            {labelTextField ? <label className='tf-label-field'>{labelTextField}</label>: null}
            <div className={`border-text-field-wrapper ${props.borderType} border-tf-background-${props.backgroundColor ? props.backgroundColor: 'white'}`}>
                <TextFieldUIBase {...props}/>
            </div>
        </div>
    )
}
