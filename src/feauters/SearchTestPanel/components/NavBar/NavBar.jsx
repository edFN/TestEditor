import React from 'react'

import "./NavBar.css"

import AvatarImg from "../../assets/avatar.png";

const NavBar = ({user}) => {

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
                        <img src={user === null ? {AvatarImg}: user.avatar}/>
                        {user !== null ? <span>{`${user.last_name} ${user.first_name} ${user.patronymic}`}</span>: <span>Гость</span>}
                    </div>

                </nav>
        </div>
    </header>)
}

export default NavBar;