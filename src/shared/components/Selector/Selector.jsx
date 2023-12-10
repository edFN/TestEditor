import React from "react";

import './Selector.css'

export const Selector=({chooseOption = [], name="", onChange={}, label=null, initial=null})=>{


    const chooseSelect = chooseOption.map(item => (
        <option value={item.value} >{item.display_name}</option>
    ))

    return (
        <div className="selector-ui">
        {label ?<label className="selector-label">{label}</label>: null}
        {label ? <br/> : null}

        <select name={name} className="selector-ui-custom" onChange={onChange} value={initial || ""}>
            {chooseSelect}
        </select>
        </div>
    )
}

export const SelectorInt=({chooseOption = [], name="", onChange={}, label=null})=>{

    const chooseSelect = chooseOption.map(item => (
        <option value={parseInt(item.value)}>{item.display_name}</option>
    ))

    return (
        <div className="selector-ui">
        {label ?<label className="selector-label">{label}</label>: null}
        {label ? <br/> : null}
        <select name={name} className="selector-ui-custom" onChange={onChange}>
            {chooseSelect}
        </select>
        </div>
    )
}

export const SelectorBool=({chooseOption = [], name="", onChange={}, label=null})=>{

    const chooseSelect = chooseOption.map(item => (
        <option value={item.value===true}>{item.display_name}</option>
    ))

    return (
        <div className="selector-ui">
        {label ?<label className="selector-label">{label}</label>: null}
        {label ? <br/> : null}
        <select name={name} className="selector-ui-custom" onChange={onChange}>
            {chooseSelect}
        </select>
        </div>
    )
}
