import React from "react";

import './Selector.css'

const Selector=({chooseOption = [], name="", onChange={}, label=null})=>{

    const chooseSelect = chooseOption.map(item => (
        <option value={item.value}>{item.display_name}</option>
    ))

    return (
        <div className="selector-ui">
        {label ?<label className="selector-label">{label}</label>: null}
        {label ? <br/> : null}
        <select name={name} className="selector-ui-custom">
            {chooseSelect}
        </select>
        </div>
    )
}

export default Selector