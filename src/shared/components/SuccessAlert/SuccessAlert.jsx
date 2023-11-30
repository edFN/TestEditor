import React, {useState} from 'react'

import "./SuccessAlert.css"

const SuccessAlert = ({message}) => {

    return (
        <div className="success-alert-block">
            <div className="success-alert-block__header">
                <span>Успешно</span>
            </div>
            <div className="success-alert-block__description">
                <p>{message}</p>
            </div>
        </div>
    )
}

export default SuccessAlert

