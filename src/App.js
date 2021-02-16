import React, { useState, useContext } from 'react';
import './App.scss';

import Modal from './Modules/Modal/Modal'
import Editor from './Modules/Editor/Editor'
import Transition from './Modules/Page Transition/Transition'

function App() {
  const [editor, openEditor] = useState(false)
  const [transition, openTransition] = useState(false)
  const [dimension, setDimension] = useState(16)

  const updateDimensionCheck = (newNumber) => {
    if (newNumber >= 16 && newNumber <= 1024) {
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
      { transition ? <Transition /> : null }
      { editor ? <Editor /> : 
        <React.Fragment>
          <div className="homepage-header-div">
            <h1>React Pixel</h1>
            <h3>An application for creating pixel art on the web!</h3>
          </div>
          <div className="dimension-div">
            <h4>Canvas Size: {dimension} X {dimension}</h4>
            <button onClick={() => updateDimensionCheck(dimension / 2)}>-</button>
            <button onClick={() => updateDimensionCheck(dimension * 2)}>+</button>
          </div>
          <div className="button-div">
            <button onClick={() => startEditor()}>START NOW</button>
          </div>
      </React.Fragment>
    }
    </div>
  );
}

export default App;
