import React, {useState} from 'react'

import "./TagSelect.css"


const SearchTag = ({addFunction}) => {

    const [listTags, setList] = useState([
        "Белгород", "Одик"
    ])
    

    function makeListTags()
    {
        return listTags.map((item) => (
            <div className="list-tag-entry" onClick={(e)=>addFunction('#'+item)}>
                #{item}
            </div>
        ))
    }

    const tagSearchSelect = makeListTags(); 

    return (
        <div className="tag-search-block" >
           {tagSearchSelect}
            
        </div>
    )

}

const TagItem = ({id, title, deleteFunction}) => {

    return (
        <div className="tag-item">
            <div className="tag-item-content">
                <span className="title">{title}</span>
                <span>
                <img src={process.env.PUBLIC_URL + "/icon/cross.svg"} onClick={(e) => deleteFunction(id)} alt=""
                     className="exit"/>
                </span>
            </div>
        </div>
    )
}

const TagSelect = () => {

    const [tagItems, setTagItems] = useState([
        "Новый", "Старый"
    ])

    const [visibleSearch, setVisibleSearch] = useState(false);

    const handleDelete = (id) => {
        const newTagSelectedList = tagItems.filter((item, i) => i != id)
        setTagItems(newTagSelectedList);
    }

    const handleAddition = (name) => {
        let arr = [...tagItems]
        arr.push(name)
        setTagItems(arr)
    }
    return (
        <div className="selected-tags-list">
            {tagItems.map((item, index) => (
                <TagItem title={item} id={index} deleteFunction={handleDelete} addFunction={handleAddition}/>
            ))}
            <div className="selected-tags-list-add" onClick={(e)=>setVisibleSearch(!visibleSearch)}>+</div>
            {visibleSearch ? <SearchTag addFunction={handleAddition}/>: null}
        </div>
    )

}

export default TagSelect;