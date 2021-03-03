import './Header.css'
import '../../App.css'
import {Link} from 'react-router-dom';
import React, {useState, useEffect} from "react"

function Header(props) {
    return (
        <header className="f-c">
            <div className="container f-c header-container">
                <div className="element f-c">
                    <Link to='/'><h1>Идея.есть</h1></Link>
                </div>
                <Link to='/login'><button>Вход</button></Link>        
            </div>
        </header>
    )
}

export default Header