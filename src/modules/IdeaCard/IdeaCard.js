import './IdeaCard.css'

function IdeaCard(props) {
    return (
        <div className="idea-card">
            <div className="author-header">
                <div className="auhtor-img"></div>
                <div className="author-wrap">
                    <div className="author-name"><p>Elon Musk</p></div>
                    <div className="posted-time"><p>3 min ago</p></div>
                </div>
            </div>

            <div className="text-block">
                <div className="idea-header"><p>30 seconds to mars</p></div>
                <div className="idea-text"> <p> Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text</p></div>
            </div>

            <div className="buttons-block f-c">
                <div className="like-btn f-c">
                    <img src="like.svg" alt="like" className="icon-img" />
                    <p>2k</p>
                </div>
            </div>
        </div>
    )
}

export default IdeaCard