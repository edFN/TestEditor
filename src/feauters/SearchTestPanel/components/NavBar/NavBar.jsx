import React from 'react'

import "./NavBar.css"

import AvatarImg from "./avatar.png";
import {Link} from "react-router-dom";

const NavBar = ({user}) => {

    const navigationItems = [
        {
            name: "Главное",
            url: '/'
        },
        {
            name: "Руководство",
            url: '/'
        },
        {
            name: 'Мои тесты',
            url: '/list'
        }

    ]

    const listItems = navigationItems.map(item => (<li><Link to={item.url}>{item.name}</Link></li>))

    return (
        <header>
            <div className="conteiner">
                <nav className="header-nav">
                    <ul className="nav-list">
                        {listItems}
                    </ul>
                    <div className="user-avatar">
                        {user === null ? <img src={AvatarImg} onClick={(e)=>window.location='/login'}/>: user.avatar ? 
                        <img src={user.avatar} onClick={(e)=>{
                            localStorage.removeItem('access_token');
                            localStorage.removeItem("refresh_token");
                            window.location='/'
                        }}/>:<img src={AvatarImg} onClick={(e)=>{
                            localStorage.removeItem('access_token');
                            localStorage.removeItem("refresh_token");
                            window.location='/'
                        }}/>  }
                        {user !== null ? <span>{`${user.last_name} ${user.first_name} ${user.patronymic}`}</span>: <span>Гость</span>}
                    </div>

                </nav>
        </div>
    </header>)
}

export default NavBar;