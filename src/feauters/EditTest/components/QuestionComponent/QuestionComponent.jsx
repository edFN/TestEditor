import React, {useState} from "react";


import "./QuestionComponent.css"
import {Selector} from "../../../../shared/components/Selector/Selector";
import {BorderTextFieldUI} from "../../../../shared/components/TextFieldUI/TextField";


const TextAnswerText = ({onChange})=>{
    const [answerText, setAnswerText] = useState({
        is_right:true,
        answer_text:""
    })

    const handleTextChanged= (e)=>{
        setAnswerText({
            is_right: true,
            answer_text: e.target.value
        })
        onChange(answerText)
    }
    return (
        <>
            <div className={"one-variant-answer-div"}>
                <BorderTextFieldUI borderType={"tf-30rem tf-border-black"} backgroundColor={"white"}  onChangeAction={handleTextChanged} label={"Ответ"} />
            </div>
        </>

    )
}

const OneVariantAnswer = ({onChange})=>{
    const [answers,setAnswers] = useState([])

    console.log("Answers", answers)

    const handleChangeRadio = (e, index)=>{
        const updatedAnswer = [...answers]
        updatedAnswer[index].is_right = e.target.checked
        setAnswers(updatedAnswer)
        onChange(answers)
    }

    const handleChangeText = (e,index)=>{
        const updatedAnswer = [...answers]
        updatedAnswer[index].answer_text = e.target.value
        setAnswers(updatedAnswer)
        onChange(answers)
    }

    const items = answers.map((item, index)=>(
        <div className="one-variant-choose">
        <input type='radio' value={item.is_right} onChange={(e)=>handleChangeRadio(e,index)}/>
        <BorderTextFieldUI borderType={"tf-15rem tf-border-black"} backgroundColor={"white"}  onChangeAction={(e)=>{handleChangeText(e,index)}} />
        </div>
    ))

    const handleClickLabel = (e)=>{
        setAnswers([...answers, {
            "answer_text": "",
            "is_right": false
        }])
        onChange(answers)
        console.log(answers)
    }

    return (
        <>
        <div className={"one-variant-answer-div"}>
            {items}
        </div>
        <label onClick={handleClickLabel}>Добавить вариант ответа</label>
        </>
    )
}



const MultipleVariant = ({onChange})=>{
    const [answers,setAnswers] = useState([])

    console.log("Answers", answers)

    const handleChangeRadio = (e, index)=>{
        const updatedAnswer = [...answers]
        updatedAnswer[index].is_right = e.target.checked
        setAnswers(updatedAnswer)
        onChange(answers)
    }

    const handleChangeText = (e,index)=>{
        const updatedAnswer = [...answers]
        updatedAnswer[index].answer_text = e.target.value
        setAnswers(updatedAnswer)
        onChange(answers)
    }

    const items = answers.map((item, index)=>(
        <div className="one-variant-choose">
            <input type='checkbox' value={item.is_right} onChange={(e)=>handleChangeRadio(e,index)}/>
            <BorderTextFieldUI borderType={"tf-15rem tf-border-black"} backgroundColor={"white"}  onChangeAction={(e)=>{handleChangeText(e,index)}} />
        </div>
    ))

    const handleClickLabel = (e)=>{
        setAnswers([...answers, {
            "answer_text": "",
            "is_right": false
        }])
        onChange(answers)
        console.log(answers)
    }
    return (
        <>
            <div className={"one-variant-answer-div"}>
                {items}
            </div>
            <label onClick={handleClickLabel}>Добавить вариант ответа</label></>
    )
}


const QuestionComponent = ({index, handleQuestion, initial})=>{
    const [data, setData] = useState(initial)

    const handleQuestionChange = (e)=>{
        setData({...data, [e.target.name]: e.target.value})
        handleQuestion(data,index)
    }

    const handleAnswers = (answers)=>{
        setData({...data, answers: answers})
        console.log(data)
    }


    return (
        <div className="question-wrapper">
            <div className={"horizontal-layout-question"}>
                <div className={"header-question-number"}>
                    <h2>Вопрос №{index+1}</h2>
                </div>
            </div>

            <div className="question-editor-block">
                <div className={"horizontal-layout-question"}>
                    <Selector chooseOption={[
                        {
                            display_name: "Одиночный выбор",
                            value: 1
                        },
                        {
                            display_name: "Множественный выбор",
                            value: 2
                        },
                        {
                            display_name: "Текст",
                            value: 3
                        }
                    ]} label="Тип вопроса" onChange={(e)=>handleQuestionChange(e)} name={'type'}/>

                </div>
                <div className="question-field">
                    <label className="tf-label-field">Текст вопроса</label><br/>
                    <textarea className='question-textarea' name={'question'} onChange={handleQuestionChange}></textarea>
                </div>
            </div>

            {data.type == 1 && <OneVariantAnswer  onChange={handleAnswers} />}
            {data.type == 2 && <MultipleVariant  onChange={handleAnswers}/>}
            {data.type == 3 && <TextAnswerText onChange={handleAnswers}/>}


        </div>
    )

}

export default QuestionComponent