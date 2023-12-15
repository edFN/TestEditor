import React, {useEffect, useState} from 'react';
import { BorderTextFieldUI } from '../../../../shared/components/TextFieldUI/TextField';
import {Selector} from '../../../../shared/components/Selector/Selector';

import ImageSelection from '../../../../shared/components/ImageSelector/ImageSelector';

import MessageScoreForm from '../MessageScoreForm/MessageScoreForm';

import './BaseTest.css'
import TagSelect from "../../../../shared/components/TagSelect/TagSelect";
import useTestOptions from "../../../SearchTestPanel/hooks/useTestOptions";

const BaseTestForm = ({onChange, handleImage, initial, changeMessage})=>{

    const testOption = useTestOptions()

    if (!testOption) {
        // Показать загрузочный индикатор или другое сообщение о загрузке
        return <div>Loading...</div>;
    }

    return (
        <div className='editor-base-form'>
            <div className="editor-form-horizontal-layout">
                <div className="editor-form-vertical-layout">
                        <BorderTextFieldUI borderType={"tf-25rem tf-allow-shadow"} name="title" backgroundColor={"white"} label={"Название"} onChangeAction={(e)=>onChange(e)}
                        initial={initial.title}/>
                        <Selector chooseOption={testOption.type.choices} label={"Категория"} name={"type"} onChange={(e)=>onChange(e)} initial = {initial.type}/>

                </div>
                <div className="editor-form-vertical-layout">          
                    <Selector chooseOption={[
                                {value:false,
                                display_name:"Публичный"
                                },
                                {value:true,
                                    display_name:"Приватный"
                                    }

                                ]} label="Доступность" name="is_private" onChange={(e)=>onChange(e)} initial={initial.is_private}/>
                    
                    <Selector chooseOption={[
                                {value:false,
                                display_name:"Не показывать"
                                },
                                {value:true,
                                    display_name:"Показывать"
                                    }

                                ]} label="Показывать протокол тестирования"  onChange={(e)=>onChange(e)} name={"is_record_statistic"} initial={initial.is_record_statistic}/>
                    {/* <TagSelect/> */}

                                

                </div>
                <ImageSelection name={"image"} onChange={handleImage} initial={initial.image} />

        </div>
            <label>Описание</label><br/>
            <textarea className='question-textarea' name={'description'} value={initial.description} onChange={(e)=>onChange(e)}></textarea>
        <MessageScoreForm onChange={onChange} handleMessage={changeMessage} initial={initial.message_results}/>

        </div>
    )
}

export default BaseTestForm