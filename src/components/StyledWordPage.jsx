import React from 'react'
import { useParams } from 'react-router-dom';



const StyledWordPage = () => {

  const { word, color1, color2 } = useParams();
  const style = {
    color: color1,
    backgroundColor: color2,
  };
  return(
    <h1 style={style} >The Word is right here: <br /> {word}</h1>
  )
}
export default StyledWordPage