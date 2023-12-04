import React from 'react'

import './ButtonIcon.css'

const ButtonIcon = ({icon, type, handleClick, name=null}) => {
    return(
    <div className={`button-icon-ui ${type}`} onClick={handleClick} id={name}>
        <img src={icon} className="button-icon-image"/>
    </div>
    )
}

export default ButtonIcon