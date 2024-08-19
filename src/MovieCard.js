import './MovieCard.css';
import ellipse from './Ellipse.png';
import StarRating from './StarRating'

export default function MovieCard({title, rating, genres, url }) {
    return (
        <div className = 'movie-card'>
            <img src={url} alt="Movie Poster"/>
            <div class="title">{title}</div>
            <div class = "rating">
                <StarRating score = {rating} />    
            </div>        
            <div class = "genres">
                {genres[0]}
                <img src={ellipse} alt="Ellipse"/>
                {genres[1]}
            </div>
        </div>
    )
  }

 

