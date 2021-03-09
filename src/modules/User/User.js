import {userInfo} from '../../user-context'
import './User.css'
import Axios from "axios"
import config from '../../config'

function User(props) {
    return (
        <userInfo.Consumer>
            {(user) => {
                const logOut = () => {
                    Axios.get(`${config.getServerPath()}/logout`).then((response) => {
                        if (!response.data.loggedIn) {
                            user.changeUserStatus()
                        }
                      })
                }
                return (
                    <div className='user-nick f-c'>
                        <h3>{user.userName}</h3>
                        <button onClick={logOut}>Выход</button>
                    </div>
                )
            }}
            
        </userInfo.Consumer>
    )
}

export default User