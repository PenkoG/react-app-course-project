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

    const onSubmit = () => {
        setSelectedGenres([])
    }

    return (
        <GenreContext.Provider value={{ selectedGenres, onChange, onSubmit }} >
            {children}
        </GenreContext.Provider  >

    )
}