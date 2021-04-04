import React, { useState, useContext } from 'react';
import './App.scss';

import Editor from './Modules/Editor/Editor'
import Transition from './Modules/Page Transition/Transition'

function App() {
  const [editor, openEditor] = useState(false)
  const [transition, openTransition] = useState(false)
  const [dimension, setDimension] = useState(16)

  const updateDimensionCheck = (newNumber) => {
    // current limits for pixel art is between 16 and 64. any higher than 64 and my current zoom function runs horrificly due to a re render every run
    if (newNumber >= 16 && newNumber <= 64) {
      setDimension(newNumber)
    }
  }

  const startEditor = () => {
    openTransition(true)
    setTimeout(() => {
      openEditor(true)
    }, 500)
    setTimeout(() => {
      openTransition(false)
    }, 1500)
  }

  return (
    <div className="App">
      { editor ? <Editor dimension={dimension}/> : 
        <div className="homepage-container">
          <div className="homepage-header-div">
            <h1>React Pixel</h1>
            <p>An application for creating pixel art on the web!</p>
          </div>
          <div className="dimension-div">
            <h4>Canvas Size: <span>{dimension}</span> X <span>{dimension}</span></h4>
            <button onClick={() => updateDimensionCheck(dimension / 2)}>-</button>
            <button onClick={() => updateDimensionCheck(dimension * 2)}>+</button>
          </div>
          <button className="start-button" onClick={() => startEditor()}>START NOW</button>
        </div>
    }
    { transition ? <Transition /> : null }
    </div>
  );
}

export default App;
