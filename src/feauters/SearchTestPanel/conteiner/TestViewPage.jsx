
import React, {useState} from 'react'
import SearchBar from "../components/SearchBar/SearchBar";
import CardTests from "../components/CardTest/CardTest";
import PageLayout from "../../../shared/layouts/PageLayout/PageLayout";
import { BorderTextFieldUI } from '../../../shared/components/TextFieldUI/TextField';

const TestViewPage = () => {
    return (
        <>
            <SearchBar/>
            <CardTests/>
        </>

    )
}

export default TestViewPage