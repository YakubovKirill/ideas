import './App.css';
import Header from './modules/Header/Header'
import Footer from './modules/Footer/Footer'
import Ideas from './modules/Ideas/Ideas'
import InputForm from './modules/InputForm/InputForm'
import Register from './modules/Register/Register'
import MainContent from './modules/MainPage/MainContent'
import React, {useState, useEffect} from "react"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {userInfo} from './user-context'

function App() {
  const [user, setUser] = useState({
    userName: 'guest',
    isAuth: false,
    changeUserStatus: () => {},
    changeUserName: () => {}
  })

  useEffect(() => {
    const changeUserStatus = () => {
      setUser((prevState) => ({
        ...prevState,
        isAuth: user.isAuth ? false: true
      }))
    }

    const changeUserName = (name) => {
      setUser((prevState) => ({
        ...prevState,
        userName: name
      }))
    }

    setUser((prevState) => ({
      ...prevState,
      changeUserStatus: changeUserStatus,
      changeUserName: changeUserName
    }))
  },[user.isAuth])

  return (
    <userInfo.Provider value={user}>
      <Router>
        <div className="App">
          <main>
            <Header />
            <Switch>
              <Route path='/' exact component={MainContent} />
              <Route path='/ideas' exact component={Ideas} />
              <Route path='/login' exact component={InputForm} />
              <Route path='/register' exact component={Register} />
            </Switch>
            <Footer />
          </main>
        </div>
      </Router>
    </userInfo.Provider>
  );
}

export default App;
