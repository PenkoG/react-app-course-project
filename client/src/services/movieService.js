import axios from "axios";

const baseUrl = "https://course-custom-server.herokuapp.com";

export const getOne = async (movieId) => {
    return await axios.get(`${baseUrl}/api/movies/find/${movieId}`);
}

export const getAll = async () => {
    return await axios.get(`${baseUrl}/api/movies`);
}

export const getHighestRating = async (userId) => {
    return await axios.get(`${baseUrl}/api/movies`);
}

export const getByName = async (name) => {
    return await axios.get(`${baseUrl}/api/movies/search/${name}`);
}

export const getMyMovies = async (userId) => {
    return await axios.get(`${baseUrl}/api/movies/my-movies/${userId}`);
}

export const deleteOne = async (movieId, accessToken) => {
    return await axios.delete(`${baseUrl}/api/movies/${movieId}`, { headers: { 'token': accessToken } });
}

export const createOne = async (data, accessToken) => {
    return await axios.post(`${baseUrl}/api/movies`, data, { headers: { 'token': accessToken } })
};

export const updateOne = async (data, movieId, accessToken) => {
    return await axios.put(`${baseUrl}/api/movies/${movieId}`, data, { headers: { 'token': accessToken } });
};