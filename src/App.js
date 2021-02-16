import React, { useState, useContext } from 'react';
import './App.scss';

import Modal from './Modules/Modal/Modal'

function App() {
  const [modal, openModal] = useState(false);
  const [dimension, setDimension] = useState(16)

  //limit dimension sizes
  const updateDimensions = (newDimension) => {
    if (newDimension >= 16 && newDimension <= 1024) {
      setDimension(newDimension)
    }
  }

  return (
    <div className="App">
      <div className="homepage-header-div">
        <h1>React Pixel</h1>
        <h3>An application for creating pixel art on the web!</h3>
      </div>
      <div className="button-div">
        <button onClick={() => openModal(!modal)}>START NOW</button>
      </div>
      <h2>{dimension} x {dimension}</h2>

      { modal ? <Modal step={['*', 2]} input={[dimension]} return={[updateDimensions]} choices={['Dimension']}/> : null }

    </div>
  );
}

export default App;
