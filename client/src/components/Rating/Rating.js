import Rating from '@mui/material/Rating';
import { useState } from 'react';

export default function RatingComponent() {
    const [rating, setRating] = useState(3);

    return (
        <Rating name="simple-controlled" value={rating} onChange={(event, newValue) => { setRating(newValue); }} />
    )
}