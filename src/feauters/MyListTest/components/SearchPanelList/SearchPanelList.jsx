import React, {useEffect, useState} from 'react';

import './SeachPanelList.css'
import {TextFieldUIBase} from "../../../../shared/components/TextFieldUI/TextField";

const SearchPanelList = () => {
    return (
        <div className='small-search-panel'>
            <img src={process.env.PUBLIC_URL + "/icon/search.svg"} className="search-icon-small"/>
            <TextFieldUIBase type={'tf-text-grey tf-field-standart tf-background-white'} placeHolder={"Введите текст для поиска"} onChangeAction={(e)=>{}}/>
            {/* <input type="text" onClick={handleSearchClick} onChange={handleSearchChange} value={userInput}/> */}
        </div>
    )
}

export default SearchPanelList
