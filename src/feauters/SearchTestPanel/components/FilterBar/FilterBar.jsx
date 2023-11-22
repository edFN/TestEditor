import React from 'react'


import "./FilterBar.css"
import ChoiceSelect from "../../../../shared/components/ChoiceSelect/ChoiceSelect";
import DateSelect from "../../../../shared/components/DateSelect/DateSelect";
import TagSelect from "../../../../shared/components/TagSelect/TagSelect";
import ButtonUI from '../../../../shared/components/Button/Button';

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

                <ButtonUI onClickEvent={(e)=>visibleFunction(false)} text="Отмена" style={{
                    backgroundColor:`#CE1832`,
                }}/>

                <ButtonUI text="Применить" style={{
                    backgroundColor:`#4C9ED8`,
                }}/>

            </div>
        </div>
    )

}

export default FilterBar;