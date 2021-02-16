import React, { useState, useContext, useEffect } from 'react';
import './Editor.scss';

import Canvas from '../Canvas/Canvas'
import Colors from './Panels/Colors';

export default function Editor(props) {
    const [firstLoad, setFirstLoad] = useState(true) 
    const [dimension, setDimension] = useState(props.dimension)
    const [zoom, setZoom] = useState(500)
    const [top, setTop] = useState(50);
    const [left, setLeft] = useState(50);
    const [currentColor, setCurrentColor] = useState()
    const [colorPanel, openColorPanel] = useState(false)

    const handleZoom = (e) => {
        if (e.deltaY > 0) {
            setZoom((zoom) => zoom - 50)
        } else if (e.deltaY < 0) {
            setZoom((zoom) => zoom + 50)
            if (e.x < ((window.innerWidth / 2)-window.innerWidth/4)) {
                setLeft((left) => {
                    if (left < 70) {
                        return
                    }
                    return left + 5
                })
            } else if (e.x > ((window.innerWidth / 2)+window.innerWidth/4) && left > 0 ) {
                setLeft((left) => {
                    if (left > 30) {
                        return
                    }
                    return left - 5
                })
            }
        }
    }

    useEffect(() => {
        console.log('adding event listeneder')
        document.addEventListener('wheel', (e) => {
            handleZoom(e)
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
          <div style={{top: `${top}%`, left: `${left}%`}} className="canvas-container">
            <Canvas zoom={zoom} dimension={dimension}/>
          </div>
      </div>
    );
}
