import axios from "axios";

export const login = async (username, password) => {
    let { data } = await axios.post("http://localhost:8800/api/auth/login", { username, password })
    return data;
}

export const logout = async () => {
    return await axios.get("http://localhost:8800/api/auth/logout")
    sessionStorage.removeItem("user");
}

export const register = async (userData) => {
    return await axios.post("http://localhost:8800/api/auth/register", userData);
}
