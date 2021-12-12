import { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
    const [movie, setMovie] = useState({
        _id: '',
        title: '',
        description: '',
        imgUrl: '',
        videoUrl: '',
        year: '',
        genre: '',
        duration: '',
        ownerId: '',
        rating: 0
    });

    const onMovieDetail = (movieData) => {
        setMovie(movieData)
    }

    return (
        <MovieContext.Provider value={{ movie, onMovieDetail }}>
            {children}
        </MovieContext.Provider>
    )
}