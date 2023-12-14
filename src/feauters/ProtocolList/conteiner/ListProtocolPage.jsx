import {useParams} from "react-router-dom";
import useProtocolList from "../hooks/useProtocolList";


import './ListProtocolPage.css'
import ReportAnswer from "../../ReportPage/components/ReportAnswer";
import ListItemProtocol from "../component/ListItemProtocol/ListItemProtocol";

const ListProtocolPage = () => {
    const {id} = useParams()

    const protocolState = useProtocolList(id)


    if(protocolState.list === null && protocolState.error === null ){
        return <h1>Loading....</h1>
    }

    console.log("ProtocolList",protocolState)



    return (
        <div className={"protocol-list-wrapper"}>
            {protocolState.error &&
                <div className={'protocol-list-error'}>
                    <span>Произошла ошибка: {protocolState.error}</span>
                </div> }
            {protocolState.list && <div className={'success-list-protocol'}>
                <h1>Список отчетов</h1>
                {protocolState.list.length === 0 && <span>Пока никто не прошел ваш тест</span>}
                {protocolState.list.length > 0 &&
                    <div className={"success-list-protocol-items"}>
                        {protocolState.list.map((item) => (
                            <ListItemProtocol item={item} />
                        ))}
                    </div>}
                </div>}
        </div>
    )
}

export default ListProtocolPage