import { useEffect, useState } from "react"


const useFormOptions = () => {
    const [formOption, setFormOption] = useState({})

    const API_BASE_URL = "http://localhost:8000/user";

    useEffect(()=>{
        fetch(API_BASE_URL, {
            method: 'OPTIONS',
        }).then(response => response.json()).then(
            (data) => {
                setFormOption(data.actions.POST)
            }
        ).catch((err)=>console.log(err))
    },[])

    return formOption

}

export default useFormOptions