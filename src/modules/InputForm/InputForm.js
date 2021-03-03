import React, {useState} from "react"
import './InputForm.css'
import {userInfo} from '../../user-context'
import {Redirect} from 'react-router-dom';

function InputForm(props) {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    
    return (
        <userInfo.Consumer>
            {(user) => {
                const login = (e) => {
                    e.preventDefault()
                    if ((userName !== '') && (password.length > 4)) {
                        user.changeUserStatus()
                        user.changeUserName(userName)
                        
                    } else alert('Неверное имя пользователя или пароль')
                }
                if (user.isAuth) return <Redirect to={{ pathname: '/ideas' }} />
                return (
                    <div className='form-wrapper f-c'>
                        <form onSubmit={login}>
                            <div className='form-field'>
                                <p>Имя пользователя</p>
                                <input type='text' name='username' onChange={(e) => {
                                    setUserName(e.target.value)
                                }} />
                            </div>
                            <div className='form-field'>
                                <p>Пароль</p>
                                <input type='password' name='password' onChange={(e) => {
                                    setPassword(e.target.value)
                                }} />    
                            </div>
                            <div className='form-field f-c'><button>Войти</button></div>
                        </form>
                    </div>
                )
            }}
        </userInfo.Consumer>
    )
}

export default InputForm