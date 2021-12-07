import axios from "axios";

export const getOne = async (movieId) => {
    return await axios.get(`http://localhost:8800/api/movies/find/${movieId}`);
}

export const getAll = async () => {
    return await axios.get("http://localhost:8800/api/movies");
}

export const getMyMovies = async (userId) => {
    return await axios.get(`http://localhost:8800/api/movies/my-movies/${userId}`);
    // axios.get()
}

export const deleteOne = async (movieId, accessToken) => {
    return await axios.delete(`http://localhost:8800/api/movies/${movieId}`, { headers: { 'token': accessToken } });
}

export const createOne = async (data, accessToken) => {
    return await axios.post("http://localhost:8800/api/movies", data,
        { headers: { 'token': accessToken } })
};

export const updateOne = async (data, movieId, accessToken) => {
    return await axios.put(`http://localhost:8800/api/movies/${movieId}`, data, { headers: { 'token': accessToken } });
};