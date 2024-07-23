import { FaStar, FaStarHalfAlt } from "react-icons/fa";

/* eslint-disable react/prop-types */
const StarRating = ({ rating }) => {

  const fullStars = Math.floor(rating);
  const remainder = rating - fullStars;

  return (
    <div className="flex items-center">
       {[...Array(fullStars)].map((_, index) => (
        <FaStar key={index} className="text-yellow-400" />
      ))}
      {remainder > 0 && <FaStarHalfAlt className="text-yellow-400" />}
      <span className="ml-2">{rating}</span>
    </div>
  );
};

export default StarRating;
