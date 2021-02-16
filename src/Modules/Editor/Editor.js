import React, { useState, useContext, useEffect } from 'react';
import './Editor.scss';

import Canvas from '../Canvas/Canvas'
import Colors from './Panels/Colors';

export default function Editor(props) {
    const [firstLoad, setFirstLoad] = useState(true) 
    const [dimension, setDimension] = useState(props.dimension)
    const [zoom, setZoom] = useState(500)
    const [currentColor, setCurrentColor] = useState()
    const [colorPanel, openColorPanel] = useState(false)

    const handleZoom = (y) => {
        if (y > 0) {
            let newZoom = zoom - 50
            console.log(newZoom)
            setZoom((zoom) => zoom - 50)
        } else if (y < 0) {
            setZoom((zoom) => zoom + 50)
        }
    }

    useEffect(() => {
        console.log('adding event listeneder')
        document.addEventListener('wheel', (e) => {
            console.log(e)
            handleZoom(e.deltaY)
        })
    }, [])

    return (
      <div className="editor">
          <nav className="top-nav">
              <button>File</button>
              <button>Edit</button>
              <button>Help</button>
          </nav>
          <nav className="left-nav">
                <button onClick={()=> openColorPanel(!colorPanel)}>Color
                </button>
                {colorPanel ? <Colors changeColor={setCurrentColor} /> : null}
          </nav>
          <div className="canvas-container">
            <Canvas zoom={zoom} dimension={dimension}/>
          </div>
      </div>
    );
}
