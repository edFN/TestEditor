import React, {useEffect, useState} from 'react'

import NavBar from '../../../feauters/SearchTestPanel/components/NavBar/NavBar'
import {isLoggedIn} from "../../utils/loginUser";

const PageLayout = ({children}) => {

    const  [user,setUser] = useState(null)

    useEffect(()=>{
        console.log(localStorage.getItem("access_token"))
        if(isLoggedIn()) {
            fetch("http://localhost:8000/user/1", {
                method:"GET",
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("access_token")}`
                }
            }).then(response => response.json()).then((data)=>{
                console.log(data)




                setUser(data)
            }).catch((error) => console.error())
        }
    },[])

    return (
        <>
        <NavBar user={user}/>
        <div className='conteiner'>
            {children}
        </div>
        </>
    )
}

export default PageLayout;