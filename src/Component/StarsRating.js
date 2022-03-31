import React from 'react'

const StarsRating = ({rate}) => {
  const stars =(rate)=> {
    let tab=[]
    for (let i=1 ; i<=5 ; i++){
      if (i<=rate){
        tab.push(<span style={{color :'gold', fontSize : "22px"}}> ★</span>)
      }else {
        tab.push(<span style={{color :'black' , fontSize : "22px"}}>☆</span> )
      }
    }return tab;
  }
  return (
    <div>{stars(rate)}</div>
  )
}

export default StarsRating