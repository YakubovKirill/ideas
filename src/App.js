import './App.css';
import Header from './modules/Header/Header'
import Footer from './modules/Footer/Footer'
import MainContent from './modules/MainPage/MainContent'

function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <MainContent />
        <Footer />
    </main>
    </div>
  );
}

export default App;
