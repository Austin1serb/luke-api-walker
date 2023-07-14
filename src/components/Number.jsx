import React from 'react'
import { useParams } from 'react-router-dom'

const Number = () => {

  const { number } = useParams();
  console.log(isNaN(number));

  return (
    <>
      {isNaN(number) ? (<div>The word is: {number}</div>) : (<div>The number is: {number}</div>)}
    </>
  )
}


export default Number