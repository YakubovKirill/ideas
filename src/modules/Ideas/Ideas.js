import './Ideas.css'
import IdeaCard from '../IdeaCard/IdeaCard'
import StartBtn from '../StartBtn/StartBtn'
import {userInfo} from '../../user-context'

function Ideas() {
    return (
        <userInfo.Consumer>
            {(user) => {
                return (
                    <div id="content">
                        <div className="content-header f-c"><h2>Ваши крутые идеи</h2></div>
                        {
                            (user.isAuth) ? 
                            (<div className='add-idea-btn f-c'><StartBtn linkTo='/create' text='Создать идею' /></div>)
                            : ''
                        }
                        <div className="filter f-c">
                            <div className="filer-label text"><p>Показать</p></div>
                            <div className="filter-fields">
                                <select name="filter" id="filter">
                                    <option value="all">Все</option>
                                    <option value="new">Сначала новые</option>
                                    <option value="popular">Сначала популярные</option>
                                </select>
                            </div>
                        </div>

                        <div id="gallery" className="f-c">
                            <div className="gallery-wrap">
                                <IdeaCard />
                                <IdeaCard />
                                <IdeaCard />
                                <IdeaCard />
                            </div>
                        </div>
                    </div>
                )}}
        </userInfo.Consumer>
    )
}

export default Ideas