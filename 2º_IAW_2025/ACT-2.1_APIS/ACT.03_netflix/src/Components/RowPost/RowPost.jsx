import { useEffect, useState } from 'react'
import './RowPost.css'
import { getMoviesByCategory, getVideos } from '../../service/movie-service'
import YouTube from 'react-youtube'
import { imageUrl } from '../../Constants/Constants'

export default function RowPost(props) {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        getMoviesByCategory(props.url).then((data) => {
            setMovies(data.results)
        })
    }, [])

    // Videos
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };
    const [urlId, setUrlId] = useState('')
    const handleMovies = (id) => {
        getVideos(id).then((data) => {
            if (data.results.length !== 0) {
                setUrlId(data.results[0])
            }
        })
    }
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="posters">
                {movies.map((movie) =>
                    <img key={movie.id}
                        src={`${imageUrl + movie.backdrop_path}`} alt=""
                        className={props.isSmall ? 'smallPoster' : 'poster'}
                        onClick={() => handleMovies(movie.id)}
                    />
                )}
            </div>
            {urlId && <YouTube opts={opts} videoId={urlId.key} />}
        </div>
    )
}