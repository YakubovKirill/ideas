import './Header.css'
import '../../App.css'
import {Link} from 'react-router-dom';

function Header(props) {
    return (
        <header className="f-c">
            <div className="container f-c header-container">
                <div className="element f-c">
                    <Link to='/'><h1>Идея.есть</h1></Link>
                </div>
                <button>Вход</button>
            </div>
        </header>
    )
}

export default Header