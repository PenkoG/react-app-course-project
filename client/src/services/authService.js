import axios from "axios";

//// Могат да се изкарат в компонентитете



export const login = async (username, password) => {

    let { data } = await axios.post("http://localhost:8800/api/auth/login", { username, password })
    // sessionStorage.setItem("user", data.username)
    return data;
}

export const logout = async () => {
    let respons = await axios.get("http://localhost:8800/api/auth/logout")
    // sessionStorage.removeItem("user")
}

export const getUser = () => {
    return localStorage.getItem('user');
}

export const isAuthenticated = () => {
    return Boolean(getUser());
}
