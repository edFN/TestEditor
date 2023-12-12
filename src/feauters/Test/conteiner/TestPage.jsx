import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import TestPanel from "../components/TestPanel/TestPanel";
import sendAnswer from "../services/sendAnswers";

const TestPage = ()=>{

    const {id} = useParams()

    const [questionList, setQuestionList] = useState([])


    const [currentIndex, setCurrentIndex] = useState(0)


    const [currentAnswers, setCurrentAnswers] = useState(null)

    useEffect(()=> {
        fetch(`http://localhost:8000/test/editor/${id}/`, {
            method: "GET"
        }).then((response) => response.json()).then((data)=> {
            setQuestionList(data.questions)
            console.log(data.questions)

            let filledAnswerTemplate = []

            if(data.questions == 'undefined'){
                window.location = '/'
            }

            data.questions.forEach((item)=>{
                if(item.type === 3){
                    filledAnswerTemplate.push(
                        {
                            question_id: item.id,
                            answer_text: "",
                            answer_id:[]
                        })
                }
                else{
                    filledAnswerTemplate.push({
        
                            question_id: item.id,
                            answer_id: [],
                            answer_text:""
                        }
                    )
                }
            })

            console.log("tempalte", filledAnswerTemplate)

            setCurrentAnswers(filledAnswerTemplate)

            console.log("filledAnswers", filledAnswerTemplate)


        })
    },[])

    const handleAnswerChoiceChange=(data, index)=>{
        const updateAnswer = [...currentAnswers]
        updateAnswer[index].answer_id = data
        setCurrentAnswers(updateAnswer)


        console.log("AnswerChange", currentAnswers)
    }

    const handleAnswerTextChange=(index,e)=>{
        const updateAnswer = [...currentAnswers]
        updateAnswer[index].answer_text = e.target.value
        setCurrentAnswers(updateAnswer)       
    };
    
    const handleClickPass = (e, index)=>{
        if(currentIndex == questionList.length-1){
            console.log("Passed")
            sendAnswer(id,currentAnswers)
        }else{
            const newIndex = currentIndex + 1
            setCurrentIndex(newIndex)
        }
    }

    const handleClickAnswered = (e, index)=>{
        
        console.log("index", index)
        console.log("CurrentAnswer",currentAnswers[index])

        if(currentAnswers[index].answer_text.length === 0 &&
            currentAnswers[index].answer_id.length === 0){
                alert("Не был получен ответ на данный вопрос")
                return;
        }

        if(currentIndex == questionList.length-1){
            console.log("Passed")
            sendAnswer(id,currentAnswers)
        }
        else{
            const newIndex = currentIndex + 1
            setCurrentIndex(newIndex)
        }
    }

    if(!currentAnswers){
        return <h1>Loading</h1>
    }


    console.log(questionList)

    if(questionList.length < 1){
        return <h1>No Questions</h1>
    }

    return (
        <TestPanel item={questionList[currentIndex]} 
        handleAnswerChoiceChange={handleAnswerChoiceChange}
        handleAnswerTextChange = {handleAnswerTextChange}
        handleClickAnswer={handleClickAnswered} 
        handleClickPass={handleClickPass}
        index={currentIndex}
        currentAnswer = {currentAnswers[currentIndex]}
        />
        
    )
}

export default TestPage
