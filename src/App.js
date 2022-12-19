import React, {useEffect, useState} from 'react';
import Navbar from './components/Navbar';
import Characters from './components/Characters';
import Next from './components/Next'

function App() {

  const [charactersPer, setCharactersPer] = useState([]);
  const [info, setinfo] = useState({});

  const initialUrl = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
      setCharactersPer(data.results);
      setinfo(data.info);
    } )
    .catch(error => console.log(error))
  };

  const onPrevious = () => {
    fetchCharacters(info.prev);
  }

  const onNext = () => {
    fetchCharacters(info.next);
  }

  useEffect(() => {
    fetchCharacters(initialUrl);
  }, []);

  return (
   <>
   <Navbar brand="Personaje Caricatura: Rick and Morty" />

   <div className='container mt-5' style={{ background: "#FEF9E7" }}>
    <Next 
    prev={info.prev} 
    next={info.next} 
    onPrevious={onPrevious} 
    onNext={onNext} 
    />
    <Characters characters={charactersPer}/ >
    <Next 
    prev={info.prev} 
    next={info.next} 
    onPrevious={onPrevious} 
    onNext={onNext} 
    />

   </div>
   </>
  );
};

export default App;
