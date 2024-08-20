import './ThisWeeksTopPicks.css';
import FeatureMovieCard from './FeatureMovieCard.js';
import MovieCard from './MovieCard.js';

export default function ThisWeeksTopPicks() {
    return (
        <div>
        <h1>
            This Week's Top Picks
        </h1>
        <div className="top-picks">
            <div className="main-focus">
                <FeatureMovieCard 
                        title = {"Fantastic Mr. Fox"}
                        directors = {["Wes Anderson"]}
                        rating = {93}
                        genres = {["Family", "Comedy"]}
                        url = {"https://i.imgur.com/PDpAJLK.jpg"} />
            </div>
            <div className="grid-movies">
                <div className = "row">
                        <MovieCard 
                        title = {"Fantastic Mr. Fox"}
                        rating = {93}
                        genres = {["Family", "Comedy"]}
                        url = {"https://i.imgur.com/PDpAJLK.jpg"} />
                        <MovieCard 
                        title = {"Dune: Part 2"}
                        rating = {92}
                        genres = {["Sci-Fi", "Adventure"]}
                        url = {"https://i.imgur.com/UQHlMQ1.jpg"} />
                </div>
                <div className = "row">
                        <MovieCard 
                        title = {"Dune: Part 2"}
                        rating = {92}
                        genres = {["Sci-Fi", "Adventure"]}
                        url = {"https://i.imgur.com/UQHlMQ1.jpg"} />
                        <MovieCard 
                        title = {"Fantastic Mr. Fox"}
                        rating = {93}
                        genres = {["Family", "Comedy"]}
                        url = {"https://i.imgur.com/PDpAJLK.jpg"} />
                </div>
            </div>
        </div>
        </div>
        );
};