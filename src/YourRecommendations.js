import './YourRecommendations.css';
import logo from './logo.png';
import arrow from './arrow.png';

export default function YourRecommendations() {
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
                <div>
                    <img src={logo} alt="Logo"/>
                    <img src={logo} alt="Logo"/>
                    <img src={logo} alt="Logo"/>
                    <img src={logo} alt="Logo"/>
                </div>
            </div>
        </div>
        </body>
        );
};