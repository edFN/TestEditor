import React, {useState} from 'react'

import "./SearchBar.css"
import FilterBar from "../FilterBar/FilterBar";

const SearchBar = () => {

    const [userInput, setUserInput] = useState("Введите текст для поиска")
    const [filterVisible, setFilterVisible] = useState(false);

    const handleSearchClick = () => {
        setUserInput("");
    }

    const handleSearchChange = (e) => {
        setUserInput(e.target.value)
    }

    const handleFilterClick = (e) => {
        setFilterVisible(!filterVisible);
    }


    return (
        <div className="search-bar-wrapper">
            <div className="search-bar">
                <div className="search-bar-left">
                    <img src={process.env.PUBLIC_URL + "/icon/search.svg"}/>
                    <input type="text" onClick={handleSearchClick} onChange={handleSearchChange} value={userInput}/>
                </div>

                <div className="search-bar-right">
                    <div className="filter-button" onClick={handleFilterClick}>
                        <img src={process.env.PUBLIC_URL + "/icon/filter.svg"}/>
                    </div>
                </div>

                {filterVisible ? <FilterBar/>: null}
            </div>
        </div>
    );
}
export default SearchBar;
