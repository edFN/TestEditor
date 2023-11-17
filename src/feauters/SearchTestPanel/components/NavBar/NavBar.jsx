import React from 'react'

import "./NavBar.css"

import AvatarImg from "../../assets/avatar.png";

const NavBar = () => {

    const navigationItems = [
        "Главное", "Руководство", "Редактор тестов"
    ]


    const listItems = navigationItems.map(item => (<li><a href="#">{item}</a></li>))

    return (
        <header>
            <div className="conteiner">
                <nav className="header-nav">
                    <ul className="nav-list">
                        {listItems}
                    </ul>
                    <div className="user-avatar">
                        <img src={AvatarImg}/>
                        <span>Зубенко михаил петрович</span>
                    </div>

                </nav>
        </div>
    </header>)
}

export default NavBar;