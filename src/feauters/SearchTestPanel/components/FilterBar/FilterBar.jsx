import React from 'react'


import "./FilterBar.css"
import ChoiceSelect from "../../../../shared/components/ChoiceSelect/ChoiceSelect";
import DateSelect from "../../../../shared/components/DateSelect/DateSelect";
import TagSelect from "../../../../shared/components/TagSelect/TagSelect";


const FilterBar = ({visibleFunction}) => {

    const category = [
        {
            name: "Учебное",
            variable: "is_educational"
        },
        {
            name: "Психология",
            variable: "is_psycho"
        },
        {
            name:"Развлечение",
            variable: "is_fun"
        },{
            name:"Развлечение",
            variable: "is_fun"
        },{
            name:"Развлечение",
            variable: "is_fun"
        },{
            name:"Развлечение",
            variable: "is_fun"
        },{
            name:"Развлечение",
            variable: "is_fun"
        },{
            name:"Развлечение",
            variable: "is_fun"
        }
    ]

    return (
        <div className="filterbar-block">

            <div className="filter-bar-category">
                <h3>Категория</h3>
                <ChoiceSelect className={"category-choice"} fields={category}/>
            </div>

            <div className="filter-bar-other">
                <div className="filter-bar-other-range">
                    <h3>Период создания теста</h3>
                    <div className="range-block">
                        <DateSelect/>
                        <DateSelect/>
                    </div>
                </div>

                <div className="filter-bar-other-tags">
                    <h3>Теги</h3>
                    <TagSelect/>
                </div>
            </div>

            <div className="filter-bar-buttons">
                <div className="button-decline" onClick={(e)=>visibleFunction(false)}>
                    <span>Отмена</span>
                </div>
                <div className="button-accept">
                    <span>Применить</span>
                </div>
            </div>
        </div>
    )

}

export default FilterBar;