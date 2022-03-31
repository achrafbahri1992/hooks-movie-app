import React from 'react'
import MovieCard from './MovieCard'


const MovieList = ({data}) => {
  return (
    <div className='moviecard'>
      
      {
        React.Children.toArray(data.map(el=><MovieCard items={el}/>))
      }
    </div>
  )
}

export default MovieList