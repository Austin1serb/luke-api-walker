import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const PlanetDetails = () => {
  const { word } = useParams()
  const { number } = useParams()

  const [data, setData] = useState([])
  const [error, setError] = useState(null)

  const getIndex = () => {
    axios.get(`https://swapi.dev/api/planets/${number}/`)
      .then(res => setData(res.data))
      .catch((error) => {
        setError('These aren\'t the droids you\'re looking for');
      });
  }

  useEffect(getIndex, [])

  console.log(PlanetDetails)
  return (
    <div>
      <h1>Planet Details</h1>
      {/* conditional Render if an error detected */}
      {error ? (
        <>
          <p>{error}</p>
          <img src="https://api.time.com/wp-content/uploads/2015/12/star-wars-episode-iii-revenge-of-the-sith-obi-wan.jpg?quality=85&w=1600" alt="Obi-Wan Kenobi" />
        </>
      ) : (
        <>
          <h2>{data.name}</h2>
          <p>Climate: {data.climate} </p>
          <p>Terrain: {data.terrain} ks</p>
          <p>Surface Water: {data.surface_water}</p>
          <p>Population: {data.population}</p>
        </>
      )}
    </div>
  );
};


export default PlanetDetails