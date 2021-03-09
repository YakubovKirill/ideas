import './App.css';
import Header from './modules/Header/Header'
import Footer from './modules/Footer/Footer'
import Ideas from './modules/Ideas/Ideas'
import Create from './modules/Create/Create'
import InputForm from './modules/InputForm/InputForm'
import Register from './modules/Register/Register'
import MainContent from './modules/MainPage/MainContent'
import React, {useState, useEffect} from "react"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {userInfo} from './user-context'
import Axios from "axios"
import config from './config'

function App() {
  Axios.defaults.withCredentials = true
  const [user, setUser] = useState({
    userName: 'guest',
    isAuth: false,
    changeUserStatus: () => {},
    changeUserName: () => {}
  })

  useEffect(() => {
    Axios.get(`${config.getServerPath()}/login`).then((response) => {
      if (response.data.loggedIn) {
        setUser((prevState) => ({
          ...prevState,
          isAuth: true,
          userName: response.data.user.userName
        }))
      }
    })
  }, []) 

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
              <Route path='/create' exact component={Create} />
            </Switch>
            <Footer />
          </main>
        </div>
      </Router>
    </userInfo.Provider>
  );
}

export default App;
