import React from 'react'
import { useNavigate } from 'react-router-dom';
import {  useState } from 'react';

const Index = () => {




    // THIS IS FOR THE BUTTON
    const [word, setWord] = useState('');
    const [number, setNumber] = useState('');

    const navigator = useNavigate();
  
    const buttonClick = () => {
      navigator("/" +word+"/"+ number );
    }
    const style = {
      marginLeft: '20px',
      backgroundColor: 'blue',
      border: '1px solid blue',
      borderRadius: '5px',
      color: 'white',
      fontSize: '15px',
    }
    //BUTTON////
    const inputStyle = {
      marginLeft: "10px",
      width: "40px",
  
  
    }
    console.log(word)
    console.log(number)
  return (

    <div>
            <form action=""  >
        Search For: <select onChange={e => { setWord(e.target.value) }}  >
          <option value="">SELECT</option>
          <option value="People">People</option>
          <option value="Planets">Planets</option>
        
        </select>

        ID: <input style={inputStyle} type="number"  onChange={e=>{setNumber(e.target.value)}} />
        <button style={style} onClick={buttonClick} >Search</button>
      </form>
    </div>
  )
}

export default Index