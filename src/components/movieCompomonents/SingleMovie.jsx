/* eslint-disable react/prop-types */
import './Movie.css'

const SingleMovie = ({movieProps}) => {
    console.log(movieProps);
    const {movieName, releaseDate, actor} = movieProps
    
    return (
        <div className="movie_box">
            <h3>Movie Name: {movieName} </h3>
            <h4>ReleaseDate: {releaseDate} </h4>
            <h5>Actor : {actor}</h5>
        </div>
    );
};

export default SingleMovie;