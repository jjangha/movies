import React from 'react'
import '../styles/Movie.css'

 function Movie({movieimg,movietitle,movieyear,moviesummary,genres}) {
  return (
    <div className='movie'><img src={movieimg} alt={movietitle} title={movietitle}/>
      <div className='movie_data'>
        <h3 className='movie_title'>{movietitle}</h3>
        <h4 className='movie_year'>{movieyear}</h4>
        <ul className='movie_genres'>
          {genres.map((genre,index) => (
            <li className='movie_genre' key={index}>{genre}</li>
            )) 

          }
        </ul>
        <p className='movie_summary'>{moviesummary.slice(0,180)}...</p>
      </div>
    </div>
  )
}
export default Movie