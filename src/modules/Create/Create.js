import '../InputForm/InputForm.css'
import {userInfo} from '../../user-context'
import {Redirect} from 'react-router-dom';
import React, {useState} from "react"

function Create() {
    const [ideaHeader, setIdeaHeader] = useState('')
    const [ideaText, setIdeaText] = useState('')
    const [isCreated, setIsCreated] = useState(false)
    return (
        <userInfo.Consumer>
            {(user) => {
                const create = (e) => {
                    e.preventDefault()
                    const currentDateTime = new Date()
                    setIsCreated(true)
                    alert('Идея успешно создана')
                }

                if (isCreated) return <Redirect to={{ pathname: '/ideas' }} />
                if (!user.isAuth) return <Redirect to={{ pathname: '/ideas' }} />
                return (
                    <div className='form-wrapper f-c'>
                        <form onSubmit={create}>
                            <div className='form-field'>
                                <p>Заголовок</p>
                                <input type='text' name='ideaHeader' required maxLength='100' onChange={(e) => {
                                    setIdeaHeader(e.target.value)
                                }} />
                            </div>

                            <div className='form-field'>
                                <p>Текст идеи</p>
                                <textarea required onChange={(e) => {
                                    setIdeaText(e.target.value)
                                }}></textarea> 
                            </div>

                            <div className='form-field f-c'><button>Создать идею</button></div>
                        </form>
                    </div>
                )
            }}
        </userInfo.Consumer>
    )
}

export default Create