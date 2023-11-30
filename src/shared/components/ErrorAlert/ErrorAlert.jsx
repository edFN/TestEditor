import React, {useState} from 'react'

import "./ErrorAlert.css"

const ErrorAlert = ({message}) => {

    return (
        <div className="error-alert-block">
            <div className="error-alert-block__header">
                <span>Ошибка</span>
            </div>
            <div className="error-alert-block__description">
                <p>{message}</p>
            </div>
        </div>
    )
}

export default ErrorAlert

