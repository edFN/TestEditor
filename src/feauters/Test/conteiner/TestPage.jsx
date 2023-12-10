import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import TestPanel from "../components/TestPanel/TestPanel";

const TestPage = ()=>{

    const {id} = useParams()

    const [questionList, setQuestionList] = useState([])

    useEffect(()=> {
        fetch(`http://localhost:8000/test/editor/${id}/`, {
            method: "GET"
        }).then((response) => response.json()).then((data)=> {
            setQuestionList(data.questions)
            console.log(data.questions)
        })
    },[])



    console.log(questionList)

    const [currentIndex, setCurrentIndex] = useState(0)

    if(questionList.length < 1){
        return <h1>No Questions</h1>
    }

    return (
        <TestPanel item={questionList[currentIndex]}/>
    )
}

export default TestPage
