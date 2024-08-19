import './FeatureMovieCard.css';
import ellipse from './Ellipse.png';
import StarRating from './StarRating'

export default function FeatureMovieCard({title, directors, rating, genres, url }) {
    return (
        <div className = 'featured-movie-card'>
            <div className = "feature-movie-image">
                <img src={url} alt="Movie Poster"/>
            </div>
            <div class="feature-title">{title}</div>
            <div class = "description">A film by {directors}</div>
            <div class = "extra-information">  
                <div class = "feature-genres">
                    {genres[0]}
                    <img src={ellipse} alt="Ellipse"/>
                    {genres[1]}
                </div>
                <div class = "feature-rating">
                    <StarRating score = {rating} />    
                </div>  
            </div>    
        </div>
    )
  }
