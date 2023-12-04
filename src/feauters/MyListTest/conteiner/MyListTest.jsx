
import React, {useEffect, useState} from 'react';
import ListTestItem from "../components/ListTestItem/ListTestItem";

import './MyListTestPage.css'
import SearchPanelList from "../components/SearchPanelList/SearchPanelList";
import ButtonUI from "../../../shared/components/Button/Button";
import useTestList from "../../SearchTestPanel/hooks/useTestList";
import deleteService from "../hooks/deleteService";

const MyListTestPage = ()=>{

    const [testList, setTestList] = useTestList();

    const handleDelete = (id) => deleteService(parseInt(id), testList, setTestList)


    const presentList = testList.map((item)=>(
        <ListTestItem id={item.id} title={item.title} handleDelete={handleDelete}/>
    ))

    return (
        <div className='mylist-test-wrapper'>
            <div className='mylist-test-header'>
                <div className='mylist-test-header-text'>
                    <h3>Список ваших тестов</h3>
                </div>
            </div>

            <div className='mylist-window-wrapper'>
                <div className='mylist-window-filter-panel'>
                    <SearchPanelList/>
                    <ButtonUI text={"Добавить новый"} type={"green button-height-3rem"}/>
                </div>
                <div className='mylist-list-items'>
                    {presentList.length ? {presentList}: <h1>Ничего не найдено</h1>}

                </div>
            </div>
        </div>
    )
}


export default MyListTestPage