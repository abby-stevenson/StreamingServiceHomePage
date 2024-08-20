import './YourRecommendations.css';
import arrow from './arrow.png';
import MovieCard from './MovieCard.js';
import { Link } from 'react-router-dom';


export default function YourRecommendations() {
    return (
        <div>
        <div className = "header">
            <h1>
                Your Recommendations
            </h1>
            <div className="dropdown">
                <button className="dropdown-btn">
                    <img src={arrow} alt="Arrow"/>
                    Recommendations
                </button>
                <div className="dropdown-content">
                    <a href="#"> Recommendations </a>
                    <Link to="/continue-watching">Continue Watching</Link>
                </div>
            </div>
        </div>
        <div className="recommendations">
                <div className = "entry">
                    <label>1</label>
                    <MovieCard 
                    title = {"Fantastic Mr. Fox"}
                    rating = {93}
                    genres = {["Family", "Comedy"]}
                    url = {"https://i.imgur.com/PDpAJLK.jpg"} />
                </div>
                <div className = "entry">
                    <label>2</label>
                   <MovieCard 
                    title = {"Dune: Part 2"}
                    rating = {92}
                    genres = {["Sci-Fi", "Adventure"]}
                    url = {"https://i.imgur.com/UQHlMQ1.jpg"} />
                </div>
                <div className = "entry">
                    <label>3</label>
                    <MovieCard 
                    title = {"Fantastic Mr. Fox"}
                    rating = {93}
                    genres = {["Family", "Comedy"]}
                    url = {"https://i.imgur.com/PDpAJLK.jpg"} />
                </div>
                <div className = "entry">
                    <label>4</label>
                   <MovieCard 
                    title = {"Dune: Part 2"}
                    rating = {92}
                    genres = {["Sci-Fi", "Adventure"]}
                    url = {"https://i.imgur.com/UQHlMQ1.jpg"} />
                </div>
                <div className = "entry">
                    <label>5</label>
                    <MovieCard 
                    title = {"Fantastic Mr. Fox"}
                    rating = {93}
                    genres = {["Family", "Comedy"]}
                    url = {"https://i.imgur.com/PDpAJLK.jpg"} />
                </div>
            </div>
        </div>
        );
};