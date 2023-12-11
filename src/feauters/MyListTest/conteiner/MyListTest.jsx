
import React, {useEffect, useState} from 'react';
import ListTestItem from "../components/ListTestItem/ListTestItem";

import './MyListTestPage.css'
import SearchPanelList from "../components/SearchPanelList/SearchPanelList";
import ButtonUI from "../../../shared/components/Button/Button";
import useTestList from "../../SearchTestPanel/hooks/useTestList";
import deleteService from "../hooks/deleteService";
import {isLoggedIn} from "../../../shared/utils/loginUser";

const MyListTestPage = ()=>{

    if(isLoggedIn() === false){
        window.location = '/login'
    }

    const [testList, setTestList] = useTestList(true);

    console.log(testList)


    if(!testList){
        return <h1>Loading...</h1>
    }

    const handleDelete = (id) => deleteService(parseInt(id), testList, setTestList)


    const presentList = testList.map((item)=>(
        <ListTestItem id={item.id} title={item.title} handleDelete={handleDelete}/>
    ))


    const searchHandle = (e) => {
        fetch(`http://localhost:8000/test/editor/?author=${localStorage.getItem("user_id")}&search=${e.target.value}`, {
            method: 'GET',
        }).then(response => response.json()).then(
            (data) => {
                console.log("Tests", data)
                setTestList(data)
            }
        ).catch((err) => console.log(err))
    }

    console.log(testList)

    return (
        <div className='mylist-test-wrapper'>
            <div className='mylist-test-header'>
                <div className='mylist-test-header-text'>
                    <h3>Список ваших тестов</h3>
                </div>
            </div>

                <div className='mylist-window-wrapper'>
                <div className='mylist-window-filter-panel'>
                    <SearchPanelList onChange={searchHandle}/>
                    <ButtonUI text={"Добавить новый"} type={"green button-height-3rem"} onClickEvent={(e)=>window.location = '/edit'}/>
                </div>
                <div className='mylist-list-items'>
                    {presentList}
                </div>
            </div>
        </div>
    )
}


export default MyListTestPage