

const sendAnswer = (index, answersList, setPage = ()=>{}) => {

    const answeredQuestions = answersList.filter((item)=>{
        return item.answer_text.length > 0 || item.answer_id.length > 0
    })

    console.log("Filtered Answered", answeredQuestions)

    const requestData = {
        answers: answeredQuestions
    }

    let requestHeader = {
        "Content-Type": "application/json",
    }

    if(localStorage.getItem("access_token") !== null){
        requestHeader['Authorization'] = `Bearer ${localStorage.getItem("access_token")}`
    }       

    fetch(`http://localhost:8000/test/editor/${index}/accept_answers/`, {
        method: "POST",
        body: JSON.stringify(requestData),
        headers: requestHeader
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