

import React, { useState } from 'react'

import "./TagSelect.css"

const TagItem = ({id,title, deleteFunction}) => {

    return (
        <div className="tag-item">
            <div className="tag-item-content">
                <span className="title">{title}</span>
                <span>
                <img src={process.env.PUBLIC_URL + "/icon/cross.svg"} onClick={(e)=>deleteFunction(id)} alt="" className="exit"/>
                </span>
            </div>
        </div>
    )
}

const TagSelect = () => {

    const [tagItems, setTagItems] = useState([
        "Новый", "Старый"
    ])

    const handleDelete = (id)=> {
        const newTagSelectedList = tagItems.filter((item,i) => i != id)
        setTagItems(newTagSelectedList);
    }

    return (
        <div className="selected-tags-list">
            {tagItems.map((item,index) => (
                <TagItem title={item} id={index} deleteFunction = {handleDelete}/>
            ))}
        </div>
    )

}

export default TagSelect;