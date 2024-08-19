import starFull from './Star.png';
import halfStar from './HalfStar.png';


export default function StarRating({ score }) {
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