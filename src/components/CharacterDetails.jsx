import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const CharacterDetails = () => {
  const { word } = useParams()
  const { number } = useParams()

  const [data, setData] = useState([])
  const [error, setError] = useState(null);

  const getIndex = () => {
    axios.get(`https://swapi.dev/api/people/${number}/`)
      .then(res => setData(res.data))
      .catch((error) => {
        setError('These aren\'t the droids you\'re looking for');
      });
  }

  useEffect(getIndex, [])

  console.log(CharacterDetails)
  return (

    <div>

      <h1>Character Details</h1>
      {/* conditional Render if an error detected */}
      {error ? (
        <>
          <p>{error}</p>
          <img src="https://api.time.com/wp-content/uploads/2015/12/star-wars-episode-iii-revenge-of-the-sith-obi-wan.jpg?quality=85&w=1600" alt="Obi-Wan Kenobi" />
        </>
      ) : (
        <>
          <h2>{data.name}</h2>
          <p>Height: {data.height} cm</p>
          <p>Mass: {data.mass} ks</p>
          <p>Hair Color: {data.hair_color}</p>
          <p>Skin Color: {data.skin_color}</p>
        </>
      )}
    </div>
  );
};

export default CharacterDetails