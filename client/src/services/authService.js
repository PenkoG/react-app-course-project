import axios from "axios";

export const login = async (username, password) => {
    let { data } = await axios.post("http://localhost:8800/api/auth/login", { username, password })
    sessionStorage.setItem("user", data.username)
    return data;
}

export const logout = () => {
    sessionStorage.removeItem("user")

}

export const getUser = () => {
    return localStorage.getItem('user');
}

export const isAuthenticated = () => {
    return Boolean(getUser());
}
