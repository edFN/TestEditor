import React, {useEffect, useState} from 'react';

import './ListItemTest.css'
import ButtonIcon from "../../../../shared/components/ButtonIcon/ButtonIcon";

import DeleteItem from "../../assets/delete.svg"
import EditItem from "../../assets/edit.svg"



const ListTestItem = ({id,title, handleDelete})=>{

    const handleEdit = () =>{
        window.location = `/edit/${id}`
    }

    return (
        <div className='list-test-item'>
            <div className="list-item-text">
                <span>{title}</span>
            </div>
            <div className="list-block-buttons">
                <ButtonIcon icon={EditItem} handleClick={(e)=>handleEdit()} type={"btn-icon-bg-blue"}/>
                <ButtonIcon icon={DeleteItem} type={"btn-icon-bg-red"} handleClick={(e)=>handleDelete(id)}/>
            </div>
        </div>
    )
}

export default ListTestItem
