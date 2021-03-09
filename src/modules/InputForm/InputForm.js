import React, {useState} from "react"
import './InputForm.css'
import {userInfo} from '../../user-context'
import {Redirect} from 'react-router-dom';
import Axios from "axios"
import config from '../../config'

function InputForm(props) {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    
    return (
        <userInfo.Consumer>
            {(user) => {
                const login = (e) => {
                    e.preventDefault()
                    const validUserName = userName.split(' ').join('')
                    if ((userName.length === validUserName.length)
                        && (password.length > 4)) {
                            Axios.post(`${config.getServerPath()}/login`, {
                                userName: userName,
                                password: password
                            }).then((response) => {
                                if (response.data.status === 'ok') {
                                    user.changeUserStatus()
                                    user.changeUserName(userName)
                                } else {
                                    alert('Неверное имя пользователя или пароль')
                                }
                            })
                    } else {
                        alert('Имя пользователя не должно содержать пробелы а пароль должен быть длиннее 4 символов')
                    }
                }
                if (user.isAuth) return <Redirect to={{ pathname: '/ideas' }} />
                return (
                    <div className='form-wrapper f-c'>
                        <form onSubmit={login}>
                            <div className='form-field'>
                                <p>Имя пользователя</p>
                                <input type='text' name='username' required onChange={(e) => {
                                    setUserName(e.target.value)
                                }} />
                            </div>
                            <div className='form-field'>
                                <p>Пароль</p>
                                <input type='password' name='password' required onChange={(e) => {
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