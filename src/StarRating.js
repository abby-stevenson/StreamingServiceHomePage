import starFull from './Star.png';
import halfStar from './HalfStar.png';

/* component that calculates the appropriate amount of stars to display based on the rotten tomatoes score 
and then returns a component that can display the stars */
export default function StarRating({ score }) {
    const stars = [];
    const fullStars = Math.floor(score / 20);
    // display a half star if the remainder is greater than 10
    const halfStars = score % 20 >= 10 ? 1 : 0;
    //adds the full stars to the list of stars 
    for (let i = 0; i < fullStars; i++) {
      stars.push(<img src={starFull} alt="Full Star" />);
    }
    //if there is a half star adds it to the list too
    if (halfStars) {
      stars.push(<img key = "half" src={halfStar} alt="Half Star" />);
    }
    //returns the component to display the stars
    return <div>{stars}</div>;
  };