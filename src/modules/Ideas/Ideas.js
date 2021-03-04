import './Ideas.css'
import IdeaCard from '../IdeaCard/IdeaCard'

function Ideas() {
    return (
        <div id="content">
            <div className="content-header f-c"><h2>Ваши крутые идеи</h2></div>
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
    )
}

export default Ideas