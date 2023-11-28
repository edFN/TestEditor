import React, { useState } from 'react';
import useFormOptions from "../../hooks/useOptionsForm";
import {BorderTextFieldUI} from "../../../../shared/components/TextFieldUI/TextField";


import "./RegistrationForm.css"
import DateSelect from "../../../../shared/components/DateSelect/DateSelect";
import ButtonUI from "../../../../shared/components/Button/Button";

const RegistrationForm = () => {
    const registerFormData = useFormOptions();
    // console.log(registerFormData)

    const [formData, setFormData] = useState({
        email: '',
        lastName: '',
        name: '',
        birth_date: null,
        avatar: null
    })

    const onChange = (e) => {
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
        }).then(response => response.json()).then(
            data=>console.log(data)
        ).catch((error)=>console.log(error))
    }

    return (
        <div className="register-block">
            <div className="register-block-title">
                <h3>Регистрация</h3>
            </div>

            <div className='register-form'>
                <div className={"form-item"}>
                    <label>Email</label>
                    <BorderTextFieldUI placeHolder="vitya@selivanov.com" name="email" borderType={'tf-30rem'} className="form-register-item" onChangeAction={onChange}/>
                </div>
                <div className={"form-item"}>
                    <label>Фамилия</label>
                    <BorderTextFieldUI placeHolder="Антонов" name="lastName" borderType={'tf-30rem'} className="form-register-item" onChangeAction={onChange}/>
                </div>
                <div className={"form-item"}>
                    <label>Имя</label>
                    <BorderTextFieldUI placeHolder="Антон" name="name" borderType={'tf-30rem'} className="form-register-item" onChangeAction={onChange}/>
                </div>
                <div className={"form-item"}>
                    <label>Отчество</label>
                    <BorderTextFieldUI placeHolder="Антонович" name="patronymic" borderType={'tf-30rem'} className="form-register-item" onChangeAction={onChange}/>
                </div>
                <div className={"form-item"}>
                    <label>Дата рождения</label><br/>
                    <input type="date" name="birth_date" className={'birth_date-form'} onChange={onChange} />
                </div>
                <div className={"form-item"}>
                    <label>Аватарка</label><br/>
                    <input type='file' name="avatar" className={"avatar-date-form"} onChange={onChange}/>
                </div>
                <div className={"form-item"}>
                    <ButtonUI type={'green'} text={"Отправить"} onClickEvent={sumbitHandle} />
                </div>
            </div>

        </div>
    )

}

export default RegistrationForm