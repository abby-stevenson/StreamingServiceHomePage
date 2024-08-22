import './FeatureMovieCard.css';
import ellipse from './Ellipse.png';
import StarRating from './StarRating'

//component that produces a movie card that is larger on the page
export default function FeatureMovieCard({title, directors, rating, genres, url }) {
    return (
        <div className = 'featured-movie-card'>
            <div className = "feature-movie-image">
                <img src={url} alt="Movie Poster"/>
            </div>
            <div className ="feature-title">{title}</div>
            <div className = "feature-description">A film by {directors}</div>
            <div className = "extra-information">  
                <div className = "feature-genres">
                    {genres[0]}
                    <img src={ellipse} alt="Ellipse"/>
                    {genres[1]}
                </div>
                <div className = "feature-rating">
                    <StarRating score = {rating} />    
                </div>  
            </div>    
        </div>
    )
  }
