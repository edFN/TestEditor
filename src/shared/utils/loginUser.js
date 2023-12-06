import registrationForm from "../../feauters/Registration/components/RegistrationForm/RegistrationForm";


function isLoggedIn(){
    return localStorage.hasOwnProperty("access_token")
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

        console.log("User", user)

        localStorage.setItem("access_token", user.access)
        localStorage.setItem("refresh_token", user.refresh)
    }catch(error){
        console.error(`Authorization error ${error.message}`)
    }
}


export {isLoggedIn, loginUser}