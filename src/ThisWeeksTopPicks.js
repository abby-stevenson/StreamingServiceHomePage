import './ThisWeeksTopPicks.css';
import logo from './logo.png';

export default function ThisWeeksTopPicks() {
    return (
        <body>
        <h1>
            This Week's Top Picks
        </h1>
        <div className="top-picks">
            
            <div className="main-focus">
                <img src={logo} alt="Logo"/>
            </div>
            <div className="grid-movies">
                <div>
                    <img src={logo} alt="Logo"/>
                    <img src={logo} alt="Logo"/>
                </div>
                <div>
                    <img src={logo} alt="Logo"/>
                    <img src={logo} alt="Logo"/>
                </div>
            </div>
        </div>
        </body>
        );
};