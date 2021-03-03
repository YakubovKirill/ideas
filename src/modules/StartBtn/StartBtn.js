import './StartBtn.css'
import {Link} from 'react-router-dom';

function StartBtn(props) {
    return (
        <div className='content-btn-wrap f-c'>
            <Link to={props.linkTo}><button>{props.text}</button></Link>
        </div>
    )
}

export default StartBtn