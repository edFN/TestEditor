

const deleteService = async (id, testList, setTestList)=>{
    try{
        const response = await fetch(`http://localhost:8000/test/editor/${id}`, {
            method:"DELETE"
        })

        if (response.status === 204){
            setTestList([...testList.filter((item) => item.id !== id)])
        }else{
            throw new Error(response.status)
        }

    }catch (e){
        console.log(e)
    }
}

export default deleteService