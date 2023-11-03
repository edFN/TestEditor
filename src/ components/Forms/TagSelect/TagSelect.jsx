

import React, { useState } from 'react'

import "./TagSelect.css"

const TagItem = ({parentList, title}) => {

    const handleClick = () => {
        const index = parentList.indexOf(title)
        
        console.log(parentList)

        if(index > -1){
            console.log("We are in")
            parentList.splice(index,1);
        }
    }

    return (
        <div className="tag-item">
            <span className="title">{title}</span>
            <img src={process.env.PUBLIC_URL + "/icon/cross.svg"} alt="" className="exit"  onClick={handleClick}/>
        </div>
    )
}

const TagSelect = () => {

    const [tagItems, setTagItems] = useState([
        "Новый", "Старый"
    ])

    const handleDelete = (item)=>{
        setTagItems(tagItems => tagItems.filter(i => i !== item));        
    }

    return (
        tagItems.map(item => (
            <TagItem title={item} parentList={tagItems}/>
        ))
    )

}

export default TagSelect;