import React, {useState} from 'react'

import "./SearchBar.css"
import FilterBar from "../FilterBar/FilterBar";
import { TextFieldUIBase } from '../../../../shared/components/TextFieldUI/TextField';


const SearchBar = ({testOption, setFilterData, setSearch}) => {


    console.log("SearchBar", testOption)

    const [userInput, setUserInput] = useState("Введите текст для поиска")
    const [filterVisible, setFilterVisible] = useState(false);


    const handleSearchClick = () => {
        setUserInput("");
    }

    const handleSearchChange = (e) => {
        setUserInput(e.target.value)
        setSearch(e.target.value)
    }

    const handleFilterClick = (e) => {
        setFilterVisible(!filterVisible);
    }


    return (
        <div className="search-bar-wrapper">
            <div className="search-bar">
                <div className="search-bar-left">
                    <img src={process.env.PUBLIC_URL + "/icon/search.svg"}/>
                    <TextFieldUIBase type={'tf-text-grey tf-field-standart'} placeHolder={"Введите текст для поиска"} onChangeAction={handleSearchChange}/>
                    {/* <input type="text" onClick={handleSearchClick} onChange={handleSearchChange} value={userInput}/> */}
                </div>

                <div className="search-bar-right">
                    <div className="filter-button" onClick={handleFilterClick}>
                        <img src={process.env.PUBLIC_URL + "/icon/filter.svg"}/>
                    </div>
                </div>

                {filterVisible ? <FilterBar visibleFunction={setFilterVisible}
                                            testOption={testOption} setFilterData={setFilterData}/>: null}
            </div>
        </div>
    );
}
export default SearchBar;
