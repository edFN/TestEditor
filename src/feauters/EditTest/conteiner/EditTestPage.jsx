import React from "react";

import BaseTestForm from "../components/BaseTestForm/BaseTest";

import './EditorTestPage.css'

const EditTestPage = ()=> {
    return (
        <div className="editpage-wrapper">
            <div className="editor-page-header">
                <span className="text-editor-page">
                    Создание теста
                </span>
            </div>

            <div className="editor-window-wrapper">
                <BaseTestForm/>
            </div>

            
        </div>
    )
}

export default EditTestPage