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

    if(isLoggedIn()){
       window.location = '/'
    }

    const [alertState, setAlertState] = useState(null)

    const handleFormLogin = (e) => {
        setFormLogin({...formLogin, [e.target.name]: e.target.value})
    }

    const submitForm = () => {
        if (loginUser(formLogin.email, formLogin.password)) {
            setAlertState(true)

            setTimeout(()=>window.location='/', 1500)

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


                </div>
            </div>

            {alertState === true ?
                <SuccessAlert message="Вы успешно вошли. Вы будете переведены на главную страницу"/> :
                alertState === false ? <ErrorAlert message="Неверно заполнены данные"/> : null}

        </div>
    )
}

export default LoginPage