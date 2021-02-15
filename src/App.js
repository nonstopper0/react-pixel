import React, { useState, useContext } from 'react';
import './App.scss';

import Modal from './Modules/Modal/Modal'

function App() {
  const [modal, openModal] = useState(false);
  const [width, setWidth] = useState(16)
  const [height, setHeight] = useState(16)

  return (
    <div className="App">
      <div className="homepage-header-div">
        <h1>React Pixel</h1>
        <h3>An application for creating pixel art on the web!</h3>
      </div>
      <div className="button-div">
        <button onClick={() => openModal(!modal)}>START NOW</button>
      </div>
      <h2>{width}, {height}</h2>

      { modal ? <Modal step={['*', 2]} input={[width, height]} return={[setWidth, setHeight]} choices={['width', 'height']}/> : null }

    </div>
  );
}

export default App;
