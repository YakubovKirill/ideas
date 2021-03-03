import './MainContent.css';
import StartBtn from '../StartBtn/StartBtn'

function MainContent(props) {
    return (
        <div id="content">
            <div className="description-block f-c">
               <div className="container f-c">
                   <div className="desc-container">
                        <div className="text-header f-c"><h2>Просто. Быстро. Удобно</h2></div>
                        <div className="text"><p> Добро пожаловать на наш сервис. Здесь вы можете делиться своими идеями, черпать вдохновение из идей других людей, поддерживать их и находить поддержку в своих начинаниях </p></div>
                        <StartBtn linkTo='/ideas' text='Начать' />
                   </div>
                </div> 
            </div>

            <div className="instruction-block f-c">
                <div className="container f-c">
                    <div className="desc-container">
                        <div className="text-header f-c"><h2>Как пользоваться нашим сервисом</h2></div>
                        <StartBtn linkTo='/ideas' text='Начать' />
                    </div>
                </div>
            </div>

            <div className="why-block f-c">
                <div className="container f-c">
                    <div className="desc-container">
                        <div className="text-header f-c"><h2>Зачем это нужно ?</h2></div>
                        <div className="text">
                            <p>Зачастую людям приходят в голову разные идеи, мысли, рассуждения. Иногда хочется держать в тайне некоторые моменты.</p>
                            <p>Но иногда хочется поделиться своей мыслью или идеей со всем миром, чтобы узнать, действительно ли этамысль так хороша или стоит отложить ее в дальний ящик...</p>
                        </div>
                        <StartBtn linkTo='/ideas' text='Начать' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainContent