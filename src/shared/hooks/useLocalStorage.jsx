import {useEffect, useState} from "react";


function getSavedValue(key, initialValue) {
    const savedValue = JSON.parse(localStorage.getItem(key))

    console.log("BEFORE", savedValue)

    if (savedValue) return savedValue

    console.log("AFTER", savedValue)

    if (initialValue instanceof Function) return initialValue()

    return initialValue
}

export default function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        return getSavedValue(key, initialValue)
    })

    useEffect(() => {

        if (value instanceof Object) {
            localStorage.setItem(key, JSON.stringify(value))
        }else {
            localStorage.setItem(key, value)
        }
    }, [value])

    return [value, setValue]
}