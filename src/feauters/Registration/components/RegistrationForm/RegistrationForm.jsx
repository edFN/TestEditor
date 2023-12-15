import React, {useEffect, useState} from 'react';
import useFormOptions from "../../hooks/useOptionsForm";
import {BorderTextFieldUI} from "../../../../shared/components/TextFieldUI/TextField";


import "./RegistrationForm.css"
import DateSelect from "../../../../shared/components/DateSelect/DateSelect";
import ButtonUI from "../../../../shared/components/Button/Button";
import SuccessAlert from "../../../../shared/components/SuccessAlert/SuccessAlert";
import ErrorAlert from "../../../../shared/components/ErrorAlert/ErrorAlert";
import {isLoggedIn, loginUser} from "../../../../shared/utils/loginUser";


const RegistrationForm = () => {
    const registerFormData = useFormOptions();
    console.log(registerFormData)

    const [alertState, setAlertState] = useState(null);

    
    const [formData, setFormData] = useState({
        email: '',
        last_name: '',
        first_name: '',
        birth_date: null,
        avatar: null,
        password: ''
    })

    const onChange = (e) => {

        if(e.target.name === 'avatar'){
            setFormData({
                ...formData,
                [e.target.name]: e.target.files[0]
            })

            return
        }

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        console.log(formData)
    }

    const sumbitHandle = () => {

        console.log(formData)

        const form = new FormData()

        for (const property in formData) {
            console.log(property)
            if (formData.hasOwnProperty(property)) {
                form.append(property, formData[property]);
                console.log(formData[property])
            }
        }

        console.log(form)

        fetch('http://localhost:8000/user/', {
            method:'POST',
            body: form
        }).then( async (response) =>{
            if(response.status === 201){
                setAlertState(true)
                await loginUser(formData.email, formData.password)
                setTimeout(()=>{
                    window.location.href="/"
                }, 3000)
            }else{
                setAlertState(false)
            }
        }).catch((error)=> {
            console.log("Ebany error")
            setAlertState(false)
        })
    }

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



    return (

            <div className="register-block">
                <div className="register-block-title">
                    <h3>Регистрация</h3>
                </div>

                <div className='register-form'>
                    <div className={"form-item"}>
                        <label>Email</label>
                        <BorderTextFieldUI placeHolder="vitya@selivanov.com" name="email" borderType={'tf-30rem'} type='tf-field-standart'
                                           className="form-register-item" onChangeAction={onChange}/>
                    </div>
                    <div className={"form-item"}>
                        <label>Фамилия</label>
                        <BorderTextFieldUI placeHolder="Антонов" name="last_name" borderType={'tf-30rem'} type='tf-field-standart'
                                           className="form-register-item" onChangeAction={onChange}/>
                    </div>
                    <div className={"form-item"}>
                        <label>Имя</label>
                        <BorderTextFieldUI placeHolder="Антон" name="first_name" borderType={'tf-30rem'} type='tf-field-standart'
                                           className="form-register-item" onChangeAction={onChange}/>
                    </div>
                    <div className={"form-item"}>
                        <label>Отчество</label>
                        <BorderTextFieldUI placeHolder="Антонович" name="patronymic" borderType={'tf-30rem'} type='tf-field-standart'
                                           className="form-register-item" onChangeAction={onChange}/>
                    </div>
                    <div className={"form-item"}>
                        <label>Пароль</label>
                        <BorderTextFieldUI placeHolder="Пароль" typeForm="password"
                                           name="password" borderType={'tf-30rem'} className="form-register-item" type='tf-field-standart'
                                           onChangeAction={onChange}/>
                    </div>
                    
                    <div className={"form-item"}>
                        <label>Дата рождения</label>
                        <input type="date" name="birth_date" className={'birth_date-form'} onChange={onChange}/>
                    </div>
                    <div className={"form-item"}>
                        <label>Аватарка</label>
                        <input type='file' name="avatar" className={"avatar-date-form"} onChange={onChange}/>
                    </div>
                    <div className={"form-item"}>
                        <ButtonUI type={'green'} text={"Регистрация"} type={'small green'} onClickEvent={sumbitHandle}/>
                    </div>
                </div>

                {alertState === true ?
                    <SuccessAlert message="Вы успешно зарегистрировались. Вас скоро переведут на страницу входа"/> :
                    alertState === false ? <ErrorAlert message="Были допущены ошибки во время регистрации"/> : null}
            </div>

        )


}

export default RegistrationForm