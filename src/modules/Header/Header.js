import './Header.css'
import '../../App.css'

function Header(props) {
    return (
        <header className="f-c">
            <div className="container f-c header-container">
                <div className="element f-c"><h1>Идея.есть</h1></div>
                <button>Вход</button>
            </div>
        </header>
    )
}

export default Header