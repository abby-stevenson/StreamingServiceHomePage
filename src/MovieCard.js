import './MovieCard.css';
import ellipse from './Ellipse.png';
import StarRating from './StarRating'

export default function MovieCard({title, rating, genres, url }) {
    return (
        <div className = 'movie-card'>
            <div className = "movie-image">
                <img src={url} alt="Movie Poster"/>
            </div>
            <div className = "title">{title}</div>
            <div className = "rating">
                <StarRating score = {rating} />    
            </div>        
            <div className = "genres">
                {genres[0]}
                <img src={ellipse} alt="Ellipse"/>
                {genres[1]}
            </div>
        </div>
    )
  }

 

