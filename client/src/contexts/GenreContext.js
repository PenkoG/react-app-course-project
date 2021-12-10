import { createContext, useState } from "react";

export const GenreContext = createContext();

export const GenreProvider = ({
    children
}) => {

    const [selectedGenres, setSelectedGenres] = useState([]);

    const onChange = (genresArr) => {
        setSelectedGenres(genresArr)
        console.log(selectedGenres);
    }

    const resertGenres = () => {
        setSelectedGenres([])
    }

    return (
        <GenreContext.Provider value={{ selectedGenres, onChange, resertGenres }} >
            {children}
        </GenreContext.Provider  >

    )
}