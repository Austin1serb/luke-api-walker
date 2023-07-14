
import './App.css';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import SayWord from './components/SayWord';
import Number from './components/Number';
import StyledWordPage from './components/StyledWordPage';
import { useEffect, useState } from 'react';




function App() {


  
  const [word, setWord] = useState("");

  // const navigator = useNavigate();

  // const buttonClick = () => {
  //   navigator('/say/' + word);
  // }


  return (
    <div className="App">
  
      <Link to={'/home'} >Home </Link>
      
{/* 
      <hr />
      <input type="text" onChange={e => { setWord(e.target.value) }} /> */}
      

      <Routes>
        <Route exact path="/home" element={<h1>Welcome!</h1>} />
        <Route exact path="/:word/:color1/:color2" element={<StyledWordPage/>} />
        <Route exact path="/:number" element={<Number />} />
     
        
        
      </Routes>
    </div>
  );
}

export default App;
