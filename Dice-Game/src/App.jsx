import React, { useState } from 'react'
import Home from "./components/Home";
import Game from './components/Game';


function App() {
  const [isGameStarted, setisGameStarted] = useState(false);

  const toggleGameplay = () => {
    setisGameStarted((prev => !prev))
  };
  return (
    <>
      {isGameStarted ? <Game /> : <Home toggle={toggleGameplay} />}
    </>
  );
}

export default App;
