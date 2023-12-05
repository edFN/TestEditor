import React, {useEffect, useState} from 'react';
import { BorderTextFieldUI } from '../../../../shared/components/TextFieldUI/TextField';
import Selector from '../../../../shared/components/Selector/Selector';

import ImageSelection from '../../../../shared/components/ImageSelector/ImageSelector';

import './BaseTest.css'

const BaseTestForm = ({options})=>{
    return (
        <div className='editor-base-form'>
            <div className="editor-form-horizontal-layout">
            <div className="editor-form-vertical-layout">
                    <BorderTextFieldUI borderType={"tf-20rem tf-allow-shadow"} backgroundColor={"white"} label={"Название"} onChangeAction={(e)=>{}} />
                    <Selector chooseOption={[
                        {value:1,
                        display_name:"One"
                        },
                        {value:1,
                            display_name:"adfasda"
                            },
                    ]} label={"Категория"}/>
                </div>
                <ImageSelection/>

                
                
            </div>
        </div>
    )
}

export default BaseTestForm