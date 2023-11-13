import React, {useEffect, useRef, useState} from 'react'

import "./CardTest.css"

const CardTestItem = (props)=>{

    const defaultImageUrl = "https://d33wubrfki0l68.cloudfront.net/cb70de8399b0465df86781dad24222909debd694/6730f/images/2018/04/26/010-010-header-2.png"

    const [visibleDescription, setDescription] = useState(false)
    ;

    const styles={
        background: `url(` + props.cardInfo.imageUrl + ")" + `, lightgray 50%`,
        backgroundPosition: `center center`,
        backgroundRepeat: `no-repeat`,
        backgroundSize:`cover`,
    }

    const handleCardClick = ()=> {
        setDescription(!visibleDescription);
    }

    const closeFunction = (e) => {
            setDescription(false);
    }

    return (
        <div className="wrap-card-item">
            <div className="card-item" onClick={handleCardClick} >
                <div className="header-card-item" style={styles}>
                </div>
                <div className='description-card-item'>
                    <h3>{props.cardInfo.title}</h3>
                    <div className="card-views">
                        <img src={process.env.PUBLIC_URL + "/icon/eye.svg"} />
                        <span className="views-count">{props.cardInfo.views}</span>
                    </div>
                </div>
            </div>
            {visibleDescription? <CardDecriptionWindow {...props.cardInfo} closeFunction = {closeFunction} />: null}
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

    const [isDescriptionAvailable, setDescriptionAvailable] = useState(true);




    const cards = cardItemsInfo.map((item)=>(
            <CardTestItem cardInfo = {item}/>
        )
    )

    const cardDescription = {
        "title": "Работа",
        "description": "Lorem Ipsum - это текст-\"рыба\", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной \"рыбой\" для текстов на " +
            "латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, использу" +
            "я Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул " +
            "в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset " +
            "с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки" +
            " типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.",
        "category": "Психолохия",
        "imageUrl": "https://fikiwiki.com/uploads/posts/2022-02/1644882876_6-fikiwiki-com-p-smeshariki-krasivie-kartinki-7.jpg",
        "is_private":true

    }

    return (
        <div className="conteiner">
            <div className="card-items-collection">
                {cards}
            </div>
            {/*<CardDecriptionWindow {...cardDescription}/>*/}
        </div>
    )
}


const CardDecriptionWindow = (props)=>{


    const cardRef = useRef();

    const styles={
        background: `url(` + props.imageUrl + ")" + `, lightgray 50%`,
        backgroundPosition: `center center`,
        // backgroundRepeat: `no-repeat`,
        backgroundSize:`cover`,

    }

    const handleClickOutside = (e)=>{
        if(cardRef.current && !cardRef.current.contains(e.target)){
            props.closeFunction(e);
        }
    }


    return (
        <div className="wrapper-background-card-description" onClick={handleClickOutside}>
            <div className="card-description-window" ref={cardRef}>

                <div className="card-description-image" style={styles}></div>
                <div className="card-description-content">
                    <div className="card-description-content__header">
                        {props.title}
                    </div>

                    <div className="card-description-content__description">
                        {props.description}
                    </div>

                    <div className="card-description-content__filter">

                        <div className="content__category">
                            <span>Категория</span>
                            <div className="card_filter_block">
                                <span>{props.category}</span>
                            </div>
                        </div>

                        <div className="content__access">
                            <span>Доступность</span>
                            <div className="card_filter_block">
                                <span>{props.is_private ? "Приватный" : "Публичный"}</span>
                            </div>
                        </div>
                    </div>
                    <div className="button-conteiner-block">
                        <div className="card-button-start__test">
                            <span>Пройти тест</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardTests;