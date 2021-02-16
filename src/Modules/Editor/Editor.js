import React, { useState, useContext } from 'react';
import './Editor.scss';

import Canvas from '../Canvas/Canvas'
import Colors from './Panels/Colors';

export default function Editor(props) {
    const [firstLoad, setFirstLoad] = useState(true) 
    const [dimension, setDimension] = useState(props.dimension)
    const [zoom, setZoom] = useState(100)
    const [currentColor, setCurrentColor] = useState()
    const [colorPanel, openColorPanel] = useState(false)

    if (firstLoad) {
        setFirstLoad(false)
        for (let i = 0; i < props.dimension; i++) {
        }
    }

    return (
      <div className="editor">
          <nav className="top-nav">
              <button>File</button>
              <button>Edit</button>
              <button>Help</button>
          </nav>
          <nav className="left-nav">
                <button onClick={()=> openColorPanel(true)}>Color
                    {colorPanel ? <Colors /> : null}
                </button>
          </nav>
          <div className="canvas-container">
            <Canvas dimension={dimension}/>
          </div>
      </div>
    );
}
