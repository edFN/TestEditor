
import React, { useState } from 'react';


import "./Button.css";



const ButtonUI = ({onClickEvent, text, type}) => {
    return (
       <div onClick={onClickEvent} className={`ui-button-component ${type}`}>
            <span>{text}</span>
       </div>
    )
}

export default ButtonUI;