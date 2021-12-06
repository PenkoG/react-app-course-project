import { useContext } from "react";
import ReactPlayer from "react-player/youtube"

import { MovieContext } from "../../contexts/MovieContext"

export default function Video() {
    const { movie } = useContext(MovieContext);

    return (
        <div className="player-wrapper">
            <ReactPlayer url={movie.videoUrl}
                muted={true}
                playing={true}
                loop={true}
                controls={false}
                pip={true}
                width="100%"
                height="100%" />
        </div>
    )
}
