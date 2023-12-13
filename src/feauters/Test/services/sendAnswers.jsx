

const sendAnswer = (index, answersList, setPage = ()=>{}) => {

    const answeredQuestions = answersList.filter((item)=>{
        return item.answer_text.length > 0 || item.answer_id.length > 0
    })

    console.log("Filtered Answered", answeredQuestions)

    const requestData = {
        answers: answeredQuestions
    }

    fetch(`http://localhost:8000/test/editor/${index}/accept_answers/`, {
        method: "POST",
        body: JSON.stringify(requestData),
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${localStorage.getItem("access_token")}`
        },
    }).then(async (response)=>{
        if(response.status !== 200){
            throw new Error("Problems")
        }
        const data = await response.json()
        setPage(data)

    }).then(data=>console.log(data)).catch((err)=>{
        return setPage({message:"Произошла ошибка", points: null, checklist: null})
    })
}

export default  sendAnswer