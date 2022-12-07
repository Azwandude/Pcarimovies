const Movie = ({Poster,Title,Genre,Description,Overall_rating,Views,Duration}) => {
    const IMAGE_API='https://m.media-amazon.com/images/M/MV5BMWE3MjViNWUtY2VjYS00ZDBjLTllMzYtN2FkY2QwYmRiMDhjXkEyXkFqcGdeQXVyODQzNTE3ODc@._V1_.jpg'

    return(
        <div className="movie" key={Genre}>
            <h4>{Title}</h4>
            <img src={IMAGE_API + Poster} alt="Title"/>
            <div className="movie-overview">{Description}</div>
            <div>{Duration}</div>
            <div>{Views} views</div>
            <div>{Overall_rating} ⭐</div>
            
        </div>
    )
}

export default Movie;