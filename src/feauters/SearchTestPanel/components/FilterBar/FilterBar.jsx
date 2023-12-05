import React, {useState} from 'react'


import "./FilterBar.css"
import {ChoiceSelect} from "../../../../shared/components/ChoiceSelect/ChoiceSelect";
import DateSelect from "../../../../shared/components/DateSelect/DateSelect";
import TagSelect from "../../../../shared/components/TagSelect/TagSelect";
import ButtonUI from '../../../../shared/components/Button/Button';
import useLocalStorage from "../../../../shared/hooks/useLocalStorage";

const FilterBar = ({visibleFunction, testOption,setFilterData}) => {


    const category = testOption.type.choices

    console.log("Category", category)

    const [filterSets, setFilter] = useLocalStorage('filterSearch',{
        type: [],
        created_at_in: '',
        created_at_out: '',
        hashtags: []
    })


    const handleTypeChanged = (e)=>{

        let updatedArray = []

        if(e.target.checked){
            updatedArray = [...filterSets.type,parseInt(e.target.name)]
        }else{
            updatedArray = filterSets.type.filter((type)=>type !== parseInt(e.target.name))
        }
        setFilter({...filterSets, type: updatedArray})
    }

    const handleDateChange = (name, value)=>{
        setFilter({...filterSets, [name]: value})
    }

    const handleClickAccept = (e) => {
        setFilterData(filterSets)
        visibleFunction(false)
    }


    return (
        <div className="filterbar-block">

            <div className="filter-bar-category">
                <h3>Категория</h3>
                <ChoiceSelect className={"category-choice"} name="type" onChange={handleTypeChanged} fields={category}
                initialState={filterSets.type}/>
            </div>

            <div className="filter-bar-other">
                <div className="filter-bar-other-range">
                    <h3>Период создания теста</h3>
                    <div className="range-block">
                        <DateSelect name="created_at_in" onChange={handleDateChange} initialState={filterSets.created_at_in}/>
                        <DateSelect name="created_at_out" onChange={handleDateChange} initialState={filterSets.created_at_out}/>
                    </div>
                </div>

                <div className="filter-bar-other-tags">
                    <h3>Теги</h3>
                    <TagSelect testOption={testOption}/>
                </div>
            </div>

            <div className="filter-bar-buttons">
                <ButtonUI onClickEvent={(e)=>visibleFunction(false)} text="Отмена" type={'small red'}/>
                <ButtonUI text="Применить" type={'small green'} onClickEvent={(e)=>handleClickAccept(e)}/>
            </div>
        </div>
    )

}

export default FilterBar;