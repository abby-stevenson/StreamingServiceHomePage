import React from 'react';
import ContinueWatchingMovieCard from './ContinueWatchingMovieCard';
import { Link } from 'react-router-dom';
import arrow from './arrow.png';
import './YourRecommendations.css';

//component that displays the movies that the user is currently watching
export default function ContinueWatching() {
    return (
    <div>
        <div className = "header">
            <h1>
                Continue Watching
            </h1>
            <div className="dropdown">
                <button className="dropdown-btn">
                    <img src={arrow} alt="Arrow"/>
                    Continue Watching 
                </button>
                <div className="dropdown-content">
                <Link to="/recommendations"> Recommendations </Link>
                <a href="#">Continue Watching</a>
                </div>
            </div>
        </div>
        <div className="recommendations">
            <div className = "entry">
                 <ContinueWatchingMovieCard 
                title = {"Fantastic Mr. Fox"}
                duration = {"1h27m"}
                genres = {["Family", "Comedy"]}
                url = {"https://i.imgur.com/PDpAJLK.jpg"} />
            </div>
            <div className = "entry">
                <ContinueWatchingMovieCard 
                title = {"Dune: Part 2"}
                duration = {"2h46m"}
                genres = {["Sci-Fi", "Adventure"]}
                url = {"https://i.imgur.com/UQHlMQ1.jpg"} />
            </div>
            <div className = "entry">
                <ContinueWatchingMovieCard 
                title = {"Fantastic Mr. Fox"}
                duration = {"1h27m"}
                genres = {["Family", "Comedy"]}
                url = {"https://i.imgur.com/PDpAJLK.jpg"} />
            </div>
            <div className = "entry">
                <ContinueWatchingMovieCard 
                title = {"Dune: Part 2"}
                duration = {"2h46m"}
                genres = {["Sci-Fi", "Adventure"]}
                url = {"https://i.imgur.com/UQHlMQ1.jpg"} />
            </div>
            <div className = "entry">
                <ContinueWatchingMovieCard 
                title = {"Fantastic Mr. Fox"}
                duration = {"1h27m"}
                genres = {["Family", "Comedy"]}
                url = {"https://i.imgur.com/PDpAJLK.jpg"} />
            </div>
            </div>
        </div>
    );
};