import { useEffect, useState } from "react"


const useReportUser = (id) => {
    
    console.log("PASSED ID", id)

    const [state, setState] = useState({
        report: null,
        error: null,
    })

    const API_BASE_URL = `http://localhost:8000/test/protocol/${id}`;

    let requestHeader = {}

    if(localStorage.getItem("access_token") !== null){
        requestHeader['Authorization'] = `Bearer ${localStorage.getItem("access_token")}`
    }   

    useEffect(()=>{
        
        fetch(API_BASE_URL, {
            method: "GET",
            headers: requestHeader
        }).then((response)=>{
            if(response.status === 400){
                throw new Error("Нет доступа к контенту")
            }
            
            if (response.status !== 200){
                throw new Error("Не известная ошибка")
            }
            
            return response.json()
    
        }).then((data)=>setState({...state, report:data})).catch((err)=>{
            setState({...state, error: err.message})
        })

    }, [])
    
    return [state,setState]

}

export default useReportUser