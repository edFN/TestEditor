import registrationForm from "../../feauters/Registration/components/RegistrationForm/RegistrationForm";

import {jwtDecode} from  'jwt-decode'

async function tryRefresh(){
    if(!localStorage.hasOwnProperty("refresh"))
        return false;

    fetch("http://localhost:8000/user/refresh",{
        method: "POST",
        body: JSON.stringify({
            refresh: localStorage.getItem("refresh")
        })
    }).then(async (response) => {
        if(response.status === 401){
            return false;
        }

        let data = await response.json()

        console.log(data)

        localStorage.setItem("access_token", data.access_token)

        console.log("We are ok")

        return true
    }).catch((err)=>{
        console.log("Error", err)
        return false;
    })

}


function isLoggedIn() {
    return new Promise((resolve, reject) => {
        console.log("We are in");

        if (!localStorage.hasOwnProperty("access_token")) {
            resolve(false);
        }

        let access_token = localStorage.getItem("access_token");

        console.log("Access", access_token);

        fetch('http://localhost:8000/user/verify', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                token: access_token
            })
        }).then((response) => {
            if (response.status !== 401) {
                console.log("ALL OK");
                resolve(true);
            }

            return tryRefresh();
        }).catch((err) => {
            resolve(false);
        });
    });
}


async function loginUser(email, password) {
    try {
        const response = await fetch("http://localhost:8000/user/login", {
            method: "POST",
            body: JSON.stringify({
                email: email,
                password: password
            }),
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        if (response.status === 401)
            throw new Error("UnAuthorized")

        const user = await response.json()

        const user_data = jwtDecode(user.access)

        console.log("User", user_data)

        localStorage.setItem("access_token", user.access)
        localStorage.setItem("refresh_token", user.refresh)
        localStorage.setItem("user_id", user_data.user_id)

        return true;

    }catch(error){
        console.error(`Authorization error ${error.message}`)
        return false;
    }
}


export {isLoggedIn, loginUser}