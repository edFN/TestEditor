import { useEffect, useState } from "react"


const useTestOptions = () => {

    const [testOption, setTestOption] = useState(null)

    const API_BASE_URL = "http://localhost:8000/test/editor";

    useEffect(()=>{
        fetch(API_BASE_URL, {
            method: 'OPTIONS',
        }).then(async (response) => {

            if (response.status !== 200)
                console.log("Error")

            const response_data = await response.json()


            setTestOption(response_data.actions.POST)
            //setTestOption(response_data)

            console.log(testOption)

        }).catch((err)=>console.log(err))
    },[])

    useEffect(()=>{
        console.log("TestOption", testOption)
    },[testOption])

    return testOption

}

export default useTestOptions