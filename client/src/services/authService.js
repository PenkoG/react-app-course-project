import axios from "axios";

const baseUrl = "https://course-custom-server.herokuapp.com";

export const login = async (username, password) => {
    let { data } = await axios.post(`${baseUrl}/api/auth/login`, { username, password })
    return data;
}

export const logout = async () => {
    return await axios.get(`${baseUrl}/api/auth/logout`)
}

export const register = async (userData) => {
    return await axios.post(`${baseUrl}/api/auth/register`, userData);
}
