import {userInfo} from '../../user-context'
import './User.css'

function User(props) {
    return (
        <userInfo.Consumer>
            {(user) => {
                return (
                    <div className='user-nick f-c'>
                        <h3>{user.userName}</h3>
                        <button onClick={user.changeUserStatus}>Выход</button>
                    </div>
                )
            }}
            
        </userInfo.Consumer>
    )
}

export default User