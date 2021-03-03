import React from "react"

export const userInfo = React.createContext({
    userName: 'guest',
    isAuth: false,
    changeUserStatus: () => {},
    changeUserName: (name) => {}
});