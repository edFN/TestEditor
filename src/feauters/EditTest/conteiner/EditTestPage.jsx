import React, {useState} from "react";

import BaseTestForm from "../components/BaseTestForm/BaseTest";

import './EditorTestPage.css'
import QuestionComponent from "../components/QuestionComponent/QuestionComponent";

const EditTestPage = ()=> {

    const [testForm, setTestForm] = useState({
        type:null,
        questions: [],
        image:null,
        title:"",
        description:"",
        is_different_message: false,
        is_private: false,
    })

    const handleAddQuestion = (e)=>{
        setTestForm({...testForm, questions: [...testForm.questions, {
                answers: [],
                question: "",
                type: null,
                has_diff_point: false,
            }]
        })
    }

    const handleChangeQuestion = (data,index)=>{
        const updateQuestion = [...testForm.questions]
        updateQuestion[index] = data
        setTestForm({...testForm, questions: updateQuestion})
        console.log("TestForm", testForm)

    }

    const questionList = testForm.questions.map((item,index)=>(
        <div className="question-editor">
            <QuestionComponent index={index+1} handleQuestion={handleChangeQuestion} initial={item}  />
        </div>
    ))



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
            <div className={'question-editor-list'}>
                {questionList}
                <label onClick={(e)=>handleAddQuestion(e)}>Добавить вопрос</label>
            </div>


        </div>
    )
}

export default EditTestPage