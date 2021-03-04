import './Header.css'
import '../../App.css'
import User from '../User/User'
import {Link} from 'react-router-dom';
import React, {useState, useEffect} from "react"
import {userInfo} from '../../user-context'

function Header(props) {
    return (
        <userInfo.Consumer>
            {(user) => {
                return (
                <header className="f-c">
                    <div className="container f-c header-container">
                        <div className="element f-c">
                            <Link to='/'><h1>Идея.есть</h1></Link>
                        </div>
                        {(user.isAuth) ? <User /> : <ButtonBlock /> }               
                    </div>
                </header>
                )
            }}
        </userInfo.Consumer>
    )
}

function ButtonBlock() {
    return (
        <div className='f-c'>
            <Link to='/login'><button>Вход</button></Link>
            <Link to='/register'><button>Регистрация</button></Link>
        </div>
    )
}
export default Header