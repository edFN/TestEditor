import React, {useEffect, useState} from "react";

import './LoginPage.css'
import {BorderTextFieldUI} from "../../../shared/components/TextFieldUI/TextField";
import ButtonUI from "../../../shared/components/Button/Button";
import {isLoggedIn, loginUser} from "../../../shared/utils/loginUser";
import SuccessAlert from "../../../shared/components/SuccessAlert/SuccessAlert";
import ErrorAlert from "../../../shared/components/ErrorAlert/ErrorAlert";

const LoginPage = () => {

    const [formLogin, setFormLogin] = useState({
        email: '',
        password: ''
    })

    useEffect(() => {
          const checkLoginStatus = async () => {
            try {
              const loggedIn = await isLoggedIn();
              if (loggedIn) {
                    window.location = '/'
              } 
            } catch (error) {
              console.error("Error checking login status:", error);
            }
          };
      
          checkLoginStatus();
        }, []);


    const [alertState, setAlertState] = useState(null)

    const handleFormLogin = (e) => {
        setFormLogin({...formLogin, [e.target.name]: e.target.value})
    }

    const submitForm = async () => {
        if (await loginUser(formLogin.email, formLogin.password) === true) {
            setAlertState(true)
            setTimeout(()=>window.location='/', 1200)

        } else {
            setAlertState(false)
        }
    }

    return (
        <div className="login-page-block-element">
            <div className="login-item-block">
                <h1>Вход</h1>

                <div className="form-login">
                    <div className={"form-item"}>
                        {/*<label className='tf-text-grey'>Email</label>*/}
                        <BorderTextFieldUI placeHolder="some@mail.ru" typeForm="email"
                                           name="email" borderType={'tf-30rem'} className="form-register-item"
                                           type='tf-field-standart'
                                           onChangeAction={handleFormLogin}
                        />
                    </div>

                    <div className={"form-item"}>
                        {/*<label className='tf-text-grey'>Пароль</label>*/}
                        <BorderTextFieldUI placeHolder="Пароль" typeForm="password"
                                           name="password" borderType={'tf-30rem'} className="form-register-item"
                                           type='tf-field-standart '
                                           onChangeAction={handleFormLogin}/>
                    </div>

                    <div className="login-button-block">
                        <ButtonUI type={'green'} text={"Вход"} type={'big green'} onClickEvent={submitForm}/>
                    </div>

                    <label style={{color:`#1bcf48`, textAlign:'center', marginTop: `0.7rem`}} onClick={(e)=>window.location='/register'}>Пройти регистрацию</label>

                </div>
            </div>

            {alertState === true ?
                <SuccessAlert message="Вы успешно вошли. Вы будете переведены на главную страницу"/> :
                alertState === false ? <ErrorAlert message="Неверно заполнены данные"/> : null}

        </div>
    )
}

export default LoginPage