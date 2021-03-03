import React, {useState, useEffect} from "react"
import './InputForm.css'

function InputForm(props) {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const setData = (e) => {
        e.preventDefault()
    }

    return (
        <div className='form-wrapper f-c'>
            <form onSubmit={setData}>
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
}

export default InputForm