import React, { useState } from 'react'

import "./CardTest.css"

const CardTestItem = ({title,views})=>{

    const style={
        background: `url('https://swansoftwaresolutions.com/wp-content/uploads/2020/01/Benefits-of-Using-VUE.JS.jpeg') cover`,
        backgroundPosition: `center center`,
        backgroundRepeat: `no-repeat`,
        backgroundSize:`50%`,
        background: `green`
    }

    return (
        <div className="card-item">
            <div className="header-card-item" style={style}>
            </div>
            <div className='description-card-item'>
                <h3>{title}</h3>
                <div className="card-views">
                    <img src={process.env.PUBLIC_URL + "/icon/eye.svg"} />
                    <span className="views-count">{views}</span>
                </div>
            </div>
        </div>
    )
}

const CardTests = ()=>{
    const [cardItemsInfo, setCardItems] = useState([{
        'title': "Тест Математика: Многочлены. Преобразование фурье",
        'views': 1000
    }, {
        'title': "Какой сегодн1я ты рыбак?",
        'views': 10000
    },
    {
        'title': "Какой сегодн1я ты рыбак?",
        'views': 10000
    },{
        'title': "Какой сегодн1я ты рыбак?",
        'views': 10000
    },{
        'title': "Какой сегодн1я ты рыбак?",
        'views': 10000
    }]);

    const cards = cardItemsInfo.map((item)=>(
            <CardTestItem title={item.title} views={item.views}/>
        )
    )
    return (
        <div className="conteiner">
            <div className="card-items-collection">
                {cards}
            </div>
        </div>
    )
} 

export default CardTests;