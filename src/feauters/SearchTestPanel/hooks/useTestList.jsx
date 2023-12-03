import { useEffect, useState } from "react"


const useTestList = () => {

    const [testList, setTestList] = useState([])


    const API_BASE_URL = "http://localhost:8000/test/editor";

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