import React, {useEffect, useState} from "react";

import BaseTestForm from "../components/BaseTestForm/BaseTest";

import './EditorTestPage.css'
import QuestionComponent from "../components/QuestionComponent/QuestionComponent";
import ButtonUI from "../../../shared/components/Button/Button";
import SuccessAlert from "../../../shared/components/SuccessAlert/SuccessAlert";
import ErrorAlert from "../../../shared/components/ErrorAlert/ErrorAlert";
import {isLoggedIn} from "../../../shared/utils/loginUser";

const EditTestPage = ({id = null})=> {


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
        author:localStorage.getItem("user_id"),
        message_results: []
    })


    const [alertState, setAlertState] = useState(null)

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



    if(isLoggedIn() === false){
        window.location = '/login'
    }

    const handleFormSend = (e)=>{
        fetch('http://localhost:8000/test/editor/', {
            headers: new Headers({'content-type': 'application/json'}),
            method: 'POST',
            body: JSON.stringify(testForm)
        }).then((response)=>{
          if(response.status === 201){
              setAlertState(true)
              setTimeout(()=>window.location='/list',1200)
          }else {
              setAlertState(false)
          }
        })
    }

    const handleMessageChange = (data,index)=>{
        setTestForm({...testForm, message_results: data})
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
        <>
        <div className="editpage-wrapper">
            <div className="editor-page-header">
                <span className="text-editor-page">
                    Создание теста
                </span>
            </div>

            <div className="editor-window-wrapper">
                <BaseTestForm onChange={handleChangeTest} handleImage={handleImage}  changeMessage={handleMessageChange} initial={testForm}/>
            </div>
            <div className={'question-editor-list'}>
                {questionList}
                <label onClick={(e)=>handleAddQuestion(e)}>Добавить вопрос</label>
            </div>
            <div className="button-offset">
                <ButtonUI type={'green'} text={"Сохранить"} onClickEvent={handleFormSend}/>
            </div>
        </div>
            {alertState === true ?
                <SuccessAlert message="Вы успешно создали тест. Вы будете переведены на страницу с вашими тестами"/> :
                alertState === false ? <ErrorAlert message="Были допущены ошибки во время создания теста"/> : null}

        </>


    )
}

export default EditTestPage