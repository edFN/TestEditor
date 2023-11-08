import React, { useState } from 'react'

import "./CardTest.css"

const CardTestItem = ({title,views, imageUrl})=>{

    const defaultImageUrl = "https://d33wubrfki0l68.cloudfront.net/cb70de8399b0465df86781dad24222909debd694/6730f/images/2018/04/26/010-010-header-2.png"



    const styles={
        background: `url(` + imageUrl + ")" + `, lightgray 50%`,
        backgroundPosition: `center center`,
        backgroundRepeat: `no-repeat`,
        backgroundSize:`cover`,

    }

    return (
        <div className="card-item">
            <div className="header-card-item" style={styles}>
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
        'views': 10
    }, {
        'title': "Какой сегодня ты смешарик?",
        'views': 10000,
        'imageUrl': "https://fikiwiki.com/uploads/posts/2022-02/1644882876_6-fikiwiki-com-p-smeshariki-krasivie-kartinki-7.jpg"
    },
    {
        'title': "Какой сегодн1я ты рыбак?",
        'views': 10000

    },{
        'title': "Какой сегодн1я ты рыбак?",
        'views': 10000
    },{
        'title': "КакойsdfsdfdsfdsfdsfsdafdsfdsКакойsdfsdfdsfdsfdsfsdafdsfdsКакойsdfsdfdsfdsfdsfsdafdsfdsКакойsdfsdfdsfdsfdsfsdafdsfds сегодн1я ты рыбак?",
        'views': 10000,
        'imageUrl':'https://i.pinimg.com/originals/f8/56/b9/f856b91af5fd3bef29a666f4222dde47.jpg'
    }]);



    const cards = cardItemsInfo.map((item)=>(
            <CardTestItem title={item.title} views={item.views} imageUrl={item.imageUrl}/>
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