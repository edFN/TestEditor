import React, {useEffect, useRef, useState} from 'react'

import "./CardTest.css"
import ButtonUI from "../../../../shared/components/Button/Button";
import CenterLayout from "../../../../shared/layouts/CenterLayout/CenterLayout";
import useTestList from "../../hooks/useTestList";

const CardTestItem = (props)=>{

    const defaultImageUrl = "https://d33wubrfki0l68.cloudfront.net/cb70de8399b0465df86781dad24222909debd694/6730f/images/2018/04/26/010-010-header-2.png"

    const [visibleDescription, setDescription] = useState(false);

    const styles={
        background: `url(` + props.cardInfo.image + ")" + `, lightgray 50%`,
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

const CardTests = ({testList})=>{

    const cards = testList.map((item)=>(
            <CardTestItem cardInfo = {item}/>
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


const CardDecriptionWindow = (props)=>{


    const cardRef = useRef();


    const styles={
        background: `url(` + props.image + ")" + `, lightgray 50%`,
        backgroundPosition: `center center`,
        // backgroundRepeat: `no-repeat`,
        backgroundSize:`cover`,

    }

    const handleClickOutside = (e)=>{
        if(cardRef.current && !cardRef.current.contains(e.target)){
            props.closeFunction(e);
        }
    }

    const handleClickStart = (e)=>{
        if(props.is_private === true){
            if(localStorage.getItem('access_token') !== null){
                setTimeout(()=>window.location = `/test/${props.id}`, 600)
            }else{
                alert("Вам недоступен данный тест. Нужна регистрация")
            }
        }else{
            setTimeout(()=>window.location = `/test/${props.id}`, 600)
        }
    }

    return (
        <div className="wrapper-background-card-description" onClick={handleClickOutside}>
            <div className="card-description-window" ref={cardRef}>

                <div className="card-description-image" style={styles}></div>
                <div className="card-description-content">
                    <div className="card-description-content__header">
                        <span>{props.title}</span>
                    </div>

                    <div className="card-description-content__description">
                        {props.description}
                    </div>

                    <div className="card-description-content__filter">

                        <div className="content__category">
                            <span>Категория</span>
                            <div className="card_filter_block">
                                <span>{props.type}</span>
                            </div>
                        </div>

                        <div className="content__access">
                            <span>Доступность</span>
                            <div className="card_filter_block">
                                <span>{props.is_private ? "Приватный" : "Публичный"}</span>
                            </div>
                        </div>
                    </div>
                    <CenterLayout>
                            <ButtonUI text="Пройти текст" type={'big green'} onClickEvent={handleClickStart}
                        />
                    </CenterLayout>
                </div>
            </div>
        </div>
    )
}

export default CardTests;