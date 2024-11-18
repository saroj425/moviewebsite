import React from 'react'
import { Link } from 'react-router-dom'

const Moviecard = ({movie}) => {
    console.log("moviemoviemoviemovie====Card",movie)
  return (
    <div>
        <div className='card' key={movie.id} style={{ border: "1px solid #ddd",borderRadius:"10px 10px 0px 0px"}}>
            <div className='card-body'>
              <img src={movie.primaryImage.url} alt={movie.primaryImage.caption.plainText} style={{ maxWidth: "100%" }} />
              <div className='text-div'>
                <h4>{movie.titleText.text.length > 36 ? `${movie.titleText.text.substring(0, 36)}...` : movie.titleText.text}</h4>
                <div className='releasediv'>
                  <p style={{fontSize:"14px"}}> <strong>Release Date:</strong> {`${movie.releaseDate.day}-${movie.releaseDate.month}-${movie.releaseDate.year}`} </p>|
                  <p style={{fontSize:"14px"}}> <strong>Type:</strong> {movie.titleType.text} </p>
                </div>
                <Link to={`/movie/${movie.id}`} style={{ display: "block", marginTop: "10px", textDecoration: "none", color: "blue" }}>
                    View Details
                </Link>
              </div>
            </div>            
          </div>
    </div>
  )
}

export default Moviecard