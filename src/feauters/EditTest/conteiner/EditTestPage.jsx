import React, {useEffect, useState} from "react";

import BaseTestForm from "../components/BaseTestForm/BaseTest";

import './EditorTestPage.css'
import QuestionComponent from "../components/QuestionComponent/QuestionComponent";
import ButtonUI from "../../../shared/components/Button/Button";

const EditTestPage = ()=> {

    const [testForm, setTestForm] = useState({
        type:1,
        questions: [],
        image:null,
        title:"",
        description:"",
        is_different_message: false,
        is_private: false,
        is_record_statistic: false,
        hashtags: [],
        author:1
    })

    useEffect(()=>{
        console.log(testForm)
    }, [testForm])

    const handleAddQuestion = (e)=>{
        setTestForm({...testForm, questions: [...testForm.questions, {
                answers: [],
                question: "",
                type: 1,
                has_diff_point: false,
            }]
        })
    }

    const handleFormSend = (e)=>{
        fetch('http://localhost:8000/test/editor/', {
            headers: new Headers({'content-type': 'application/json'}),
            method: 'POST',
            body: JSON.stringify(testForm)
        }).then(response=>console.log("Status",response.status))
    }

    const handleChangeQuestion = (data,index)=>{
        const updateQuestion = [...testForm.questions]
        updateQuestion[index] = data
        setTestForm({...testForm, questions: updateQuestion})
        console.log("TestForm", testForm)
    }

    const handleChangeTest = (e) =>{
        setTestForm({...testForm, [e.target.name]: e.target.value})
        console.log(testForm)
    }

    const handleImage = (image_url)=>{
        setTestForm({...testForm, image: image_url})
    }

    const questionList = testForm.questions.map((item,index)=>(
        <div className="question-editor">
            <QuestionComponent index={index} handleQuestion={handleChangeQuestion} initial={item}  />
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
                <BaseTestForm onChange={handleChangeTest} handleImage={handleImage}/>
            </div>
            <div className={'question-editor-list'}>
                {questionList}
                <label onClick={(e)=>handleAddQuestion(e)}>Добавить вопрос</label>
            </div>
            <div className="button-offset">
                <ButtonUI type={'green'} text={"Сохранить"} onClickEvent={handleFormSend}/>
            </div>
        </div>
    )
}

export default EditTestPage