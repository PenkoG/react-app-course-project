import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({
    children
}) => {

    const [user, setUser] = useState({
        isAuthenticated: false,
        accessToken: '',
        username: '',
        name: '',
        _id: ''
    });

    const login = (userData) => {
        setUser({ ...userData, isAuthenticated: true })
    }

    const onLogout = () => {
        setUser({
            isAuthenticated: false,
            accessToken: '',
            username: '',
            name: '',
            _id: ''
        })
    }

    return (
        <UserContext.Provider value={{ user, login, onLogout }} >
            {children}
        </UserContext.Provider  >

    )
}