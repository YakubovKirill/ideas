import '../InputForm/InputForm.css'
import {userInfo} from '../../user-context'
import {Redirect} from 'react-router-dom';
import React, {useState} from "react"
import Axios from "axios"

function Register(props) {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    return (
        <userInfo.Consumer>
            {(user) => {
                const register = (e) => {
                    e.preventDefault()
                    const validUserName = userName.split(' ').join('')
                    if ((userName.length === validUserName.length)
                        && (password.length > 4)) {
                            Axios.post('http://localhost:3001/register', {
                                userName: userName,
                                email: email,
                                password: password
                            }).then((response) => {
                                if (response.data.status === 'ok') {
                                    alert('Регистрация прошла успешно')
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
                        <form onSubmit={register}>
                            <div className='form-field'>
                                <p>Имя пользователя</p>
                                <input type='text' name='username' required onChange={(e) => {
                                    setUserName(e.target.value)
                                }} />
                            </div>

                            <div className='form-field'>
                                <p>E-mail</p>
                                <input type='email' name='email' required onChange={(e) => {
                                    setEmail(e.target.value)
                                }} />    
                            </div>

                            <div className='form-field'>
                                <p>Пароль</p>
                                <input type='password' name='password' required onChange={(e) => {
                                    setPassword(e.target.value)
                                }} />    
                            </div>
                            
                            <div className='form-field f-c'><button>Регистрация</button></div>
                        </form>
                    </div>
                )
            }}
        </userInfo.Consumer>
    )
}

export default Register