import './MovieCard.css';
import ellipse from './Ellipse.png';
import starFull from './Star.png';
import halfStar from './HalfStar.png';

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

 

function StarRating({ score }) {
    const stars = [];
    const fullStars = Math.floor(score / 20);
    const halfStars = score % 20 >= 10 ? 1 : 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<img src={starFull} alt="Full Star" />);
    }
    if (halfStars) {
      stars.push(<img key = "half" src={halfStar} alt="Half Star" />);
    }
    return <div>{stars}</div>;
  };
