import './ContinueWatchingMovieCard.css';
import ellipse from './Ellipse.png';

//component that produces a movie card that shows that user how long is left on that movie
export default function ContinueWatchingMovieCard({title, duration, genres, url }) {
    return (
        <div className = 'continue-watching-movie-card'>
            <div className = "continue-watching-image">
                <img src={url} alt="Movie Poster"/>
            </div>
            <div className ="continue-watching-title">{title}</div>
            <div className = "continue-watching-duration">{duration} remaining</div>
            <div className = "continue-watching-genres">
                {genres[0]}
                <img src={ellipse} alt="Ellipse"/>
                {genres[1]}
            </div> 
        </div>
    )
  }