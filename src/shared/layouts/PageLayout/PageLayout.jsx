import React, {useEffect, useState} from 'react'

import NavBar from '../../../feauters/SearchTestPanel/components/NavBar/NavBar'
import {isLoggedIn} from "../../utils/loginUser";

const PageLayout = ({children}) => {

    const [user, setUser] = useState(null)


    useEffect(() => {

        const setLoggedUser = async () => {
            const isLogged = await isLoggedIn()
            console.log("check is is logged", isLogged)

            if (isLogged === false) return

            fetch("http://localhost:8000/user/1", {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("access_token")}`
                }
            }).then(response => response.json()).then((data) => {
                console.log(data)
                setUser(data)
            }).catch((error) => console.error())
        }

        setLoggedUser()

    }, [])

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