
import React, { useState } from 'react';


import "./Button.css";

const ButtonUI = ({onClickEvent, text, style={}}) => {

    console.log(style)

    return (
       <button onClick={onClickEvent}  className='ui-button-component' style={style} >
            <span>{text}</span>
       </button>
    )
}

export default ButtonUI;