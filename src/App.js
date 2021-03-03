import './App.css';
import Header from './modules/Header/Header'
import Footer from './modules/Footer/Footer'
import Ideas from './modules/Ideas/Ideas'
import MainContent from './modules/MainPage/MainContent'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Header />
          <Switch>
            <Route path='/' exact component={MainContent} />
            <Route path='/ideas' exact component={Ideas} />
          </Switch>
          <Footer />
        </main>
      </div>
    </Router>
  );
}

export default App;
