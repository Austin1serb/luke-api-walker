
import './App.css';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Index from './components/Index';
import CharacterDetails from './components/CharacterDetails';
import PlanetDetails from './components/PlanetDetails';

import { useEffect, useState } from 'react';


function App() {



  return (
    <div className="App">

      <Link to={'/'} >Home </Link>
      <hr />

  <Index/>

      <Routes>

        <Route path='/people/:number' element={<CharacterDetails/>} />
        <Route path='/planets/:number' element={<PlanetDetails/>} />



      </Routes>
    </div>
  );
}

export default App;
