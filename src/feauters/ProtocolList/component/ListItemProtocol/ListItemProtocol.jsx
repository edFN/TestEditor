

import "./ListItemProtocol.css"

const ListItemProtocol = ({item}) =>{

    const onClick = (e)=>{
        window.location = `/protocol/${item.id}`
    }

    return (
        <div className={'protocol-item-body'} onClick={onClick}>
            <div className="user-answer-protocol-item">
                <span>{item.user_answer}</span>
            </div>
            <div className="test-protocol-score">
                <span>{item.score}</span>
            </div>
        </div>
    )
}

export default ListItemProtocol