/* eslint-disable react/prop-types */

import SingleMovie from "./SingleMovie";

const MovieStore = ({movies}) => {
    console.log(movies);
    // eslint-disable-next-line no-unused-vars
 
    
    return (
        <div>
            <h1>Movei in 2000-2024 : {movies.length} Movies</h1>
            {
                movies.map(movie => <SingleMovie
                movieProps={movie}
                key={movie.id}
                ></SingleMovie>)
            }
           
        </div>
    );
};

export default MovieStore;