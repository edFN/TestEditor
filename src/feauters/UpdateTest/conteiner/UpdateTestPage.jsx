import React, {useEffect, useState} from "react";


import './EditorTestPage.css'
import ButtonUI from "../../../shared/components/Button/Button";
import SuccessAlert from "../../../shared/components/SuccessAlert/SuccessAlert";
import ErrorAlert from "../../../shared/components/ErrorAlert/ErrorAlert";
import {isLoggedIn} from "../../../shared/utils/loginUser";
import {useParams} from "react-router-dom";
import QuestionComponent from "../../EditTest/components/QuestionComponent/QuestionComponent";
import BaseTestForm from "../../EditTest/components/BaseTestForm/BaseTest";

const UpdatedTestPage = ()=> {

    const {id} = useParams();


    console.log("ID",id)

    const [testForm, setTestForm] = useState({
        type:1,
        questions: [],
        image:null,
        title:null,
        description:"",
        is_different_message: false,
        is_private: false,
        is_record_statistic: false,
        hashtags: [],
        author:localStorage.getItem("user_id"),
        message_results: []
    })


    useEffect(()=>{
        fetch(`http://localhost:8000/test/editor/${id}?standart=true`, {
            method: 'GET',
        }).then((response) => {
            if(response.status !== 200){
                console.log(testForm)
                setTestForm(null)
                return
            }
            return response.json()
        }).then(data=>setTestForm(data))
    },[])



    useEffect(()=>{
        console.log(testForm)
    }, [testForm])

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
        fetch(`http://localhost:8000/test/editor/${id}/`, {
            headers: new Headers({'content-type': 'application/json'}),
            method: 'PUT',
            body: JSON.stringify(testForm)
        }).then((response)=>{
          if(response.status === 200){
              setAlertState(true)
              setTimeout(()=>window.location='/list',1200)
          }else {
              setAlertState(false)
          }
        })
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

    const handleMessageChange = (data,index)=>{
        setTestForm({...testForm, message_results: data})
    }



    console.log("Questions",testForm.questions)

    const questionList = testForm.questions.map((item,index)=>(
        <div className="question-editor">
            <QuestionComponent index={index} handleQuestion={handleChangeQuestion} initial={item}  />
        </div>
    ))


    console.log("TestForm",testForm)

    if(testForm === null){
        return <h1>Нет такого теста</h1>
    }
    else {

        return (
            <>
                <div className="editpage-wrapper">
                    <div className="editor-page-header">
                <span className="text-editor-page">
                    Создание теста
                </span>
                    </div>

                    <div className="editor-window-wrapper">
                        <BaseTestForm onChange={handleChangeTest} changeMessage={handleMessageChange} handleImage={handleImage} initial = {testForm}/>
                    </div>
                    <div className={'question-editor-list'}>
                        {questionList}
                        <label onClick={(e) => handleAddQuestion(e)}>Добавить вопрос</label>
                    </div>
                    <div className="button-offset">
                        <ButtonUI type={'green'} text={"Сохранить"} onClickEvent={handleFormSend}/>
                    </div>
                </div>
                {alertState === true ?
                    <SuccessAlert
                        message="Вы успешно обновили тест. Вы будете переведены на страницу с вашими тестами"/> :
                    alertState === false ? <ErrorAlert message="Были допущены ошибки во время редактирования теста"/> : null}

            </>
        )
    }
}

export default UpdatedTestPage