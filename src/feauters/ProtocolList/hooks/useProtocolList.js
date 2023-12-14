import {useEffect, useState} from "react";


const useProtocolList = (id) => {


    console.log("ID", id)

    const [state, setState] = useState({
        error: null,
        list: null
    })

    useEffect(() => {
        fetch(`http://localhost:8000/test/protocol?test=${id}`, {
            method: "GET"
        }).then((response) => {
            if(response.status !== 200){
                throw new Error("Произошла ошибка")
            }
            return response.json()
        }).then((data)=>setState({...state, list: data})).catch((err)=>setState({...state, error: err.message}))
    }, [])

    return state
}

export default useProtocolList