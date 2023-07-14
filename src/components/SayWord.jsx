import React from 'react'
import { useParams } from 'react-router-dom'

const SayWord = () => {

    const { word } = useParams()

  return (
    <div>
        <h1>the word is: {word}</h1>
    </div>
  )
}

export default SayWord