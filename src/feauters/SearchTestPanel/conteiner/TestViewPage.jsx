import React, {useEffect, useState} from 'react'
import SearchBar from "../components/SearchBar/SearchBar";
import CardTests from "../components/CardTest/CardTest";
import useTestOptions from "../hooks/useTestOptions";
import useTestList from "../hooks/useTestList";
import useLocalStorage from "../../../shared/hooks/useLocalStorage";


const TestViewPage = () => {

    const testOptions = useTestOptions()

    const [testList, setTestList] = useTestList()


    console.log('TestList', testList)

    const [searchText, setSearchText] = useState("")

    const [filterData, setFilterData] = useState(null)

    useEffect(() => {

        console.log("search", searchText)


        const data = new URLSearchParams()

        if(searchText.length !== 0)
            data.append("search", searchText.toString())
        if(filterData !== null) {
            if (filterData.type.length !== 0)
                data.append('type', filterData.type)


            if (filterData.created_at_in.length !== 0)
                data.append("created_at_in", filterData.created_at_in)

            if (filterData.created_at_out !== 0)
                data.append("created_at_out", filterData.created_at_out)
        }

        fetch("http://localhost:8000/test/editor?" + data, {
            method: 'GET',
        }).then(response => response.json()).then(data => setTestList(data)).catch(error=>console.log("Error",error))


    }, [searchText, filterData])

    return (
        <>
            <SearchBar testOption={testOptions} setFilterData={setFilterData}
                       setSearch={setSearchText}/>
            <CardTests testList={testList}/>
        </>

    )
}

export default TestViewPage