import ReactPlayer from "react-player/youtube"
import { useState, useEffect } from "react"
import LoadingPage from "../Loading/LoadingPage";

export default function Video({ movie }) {
    console.log(movie.videoUrl);

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
