import ReactPlayer from "react-player/youtube"

export default function Video({ movie }) {

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
