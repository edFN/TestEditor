

const sendAnswer = (index, answersList) => {

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
    }).then((response)=>{
        if(response.status !== 200){
            throw new Error("Problems")
        }

        return response.json()

    }).then(data=>console.log(data)).catch((err)=>console.log(err))
}

export default  sendAnswer