import React, {useEffect, useState} from 'react';
import { BorderTextFieldUI } from '../../../../shared/components/TextFieldUI/TextField';
import {Selector} from '../../../../shared/components/Selector/Selector';

import ImageSelection from '../../../../shared/components/ImageSelector/ImageSelector';

import MessageScoreForm from '../MessageScoreForm/MessageScoreForm';

import './BaseTest.css'
import TagSelect from "../../../../shared/components/TagSelect/TagSelect";

const BaseTestForm = ({onChange})=>{
    return (
        <div className='editor-base-form'>
            <div className="editor-form-horizontal-layout">
                <div className="editor-form-vertical-layout">
                        <BorderTextFieldUI borderType={"tf-25rem tf-allow-shadow"} name="title" backgroundColor={"white"} label={"Название"} onChangeAction={(e)=>onChange(e)} />
                        <Selector chooseOption={[
                            {value:1,
                            display_name:"One"
                            },
                            {value:1,
                                display_name:"adfasda"
                                },
                        ]} label={"Категория"}/>
                </div>
                <div className="editor-form-vertical-layout">          
                    <Selector chooseOption={[
                                {value:false,
                                display_name:"Публичный"
                                },
                                {value:true,
                                    display_name:"Приватный"
                                    }

                                ]} label="Доступность" name="is_private" onChange={(e)=>onChange(e)}/>
                    
                    <Selector chooseOption={[
                                {value:false,
                                display_name:"Не показывать"
                                },
                                {value:true,
                                    display_name:"Показывать"
                                    }

                                ]} label="Показывать протокол тестирования" name="record_statistic" onChange={(e)=>onChange(e)}/>
                    <TagSelect/>
                                

                </div>
                <ImageSelection/>
        </div>

        <MessageScoreForm onChange={(e)=>{}}/>                        

        </div>
    )
}

export default BaseTestForm