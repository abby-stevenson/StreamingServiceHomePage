import './YourRecommendations.css';
import logo from './logo.png';
import arrow from './arrow.png';
import axios from 'axios';
import MovieCard from './MovieCard.js';


export default function YourRecommendations() {
    axios.get('https://api.moviesdb.com/frontend/movies?type=top')
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    return (
        <body>
        <div className = "header">
            <h1>
                Your Recommendations
            </h1>
            <div class="dropdown">
                <button class="dropdown-btn">
                    <img src={arrow} alt="Arrow"/>
                    Recommendations
                </button>
                <div class="dropdown-content">
                    <a> Recommendations </a>
                    <a href="#">Continue Watching</a>
                </div>
            </div>
        </div>
        <div className="recommendations">
            <div className="movies">
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
        </body>
        );
};