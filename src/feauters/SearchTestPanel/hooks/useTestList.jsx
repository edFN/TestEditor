import { useEffect, useState } from "react"


const useTestList = (is_my=false) => {

    const [testList, setTestList] = useState([])



    let API_BASE_URL = "http://localhost:8000/test/editor";

    if(is_my){
        if(!localStorage.getItem("user_id") === null)
            API_BASE_URL = API_BASE_URL + `?author=${localStorage.getItem('user_id')}`
    }

    useEffect(()=>{
        fetch(API_BASE_URL, {
            method: 'GET',
        }).then(response => response.json()).then(
            (data) => {
                console.log("Tests", data)
                setTestList(data)
            }
        ).catch((err)=>console.log(err))
    },[])


    return [testList, setTestList]

}

export default useTestList