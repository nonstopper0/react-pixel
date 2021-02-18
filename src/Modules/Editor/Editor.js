import React, { useState, useContext, useEffect } from 'react';
import './Editor.scss';

import Canvas from '../Canvas/Canvas';
import Colors from './Panels/Colors';
import Brush from './Panels/Brush';

import { BsBrush } from 'react-icons/bs'

export default function Editor(props) {
    const [dimension, setDimension] = useState(props.dimension)
    const [zoom, setZoom] = useState(500)
    const [top, setTop] = useState(50);
    const [left, setLeft] = useState(50);
    const [brush, openBrush] = useState(false)
    const [currentColor, setCurrentColor] = useState('#bbbbbb')
    
    useEffect(() => {
        document.addEventListener('wheel', (e) => {
            handleZoom(e)
        })
    }, [])
    
    const handleZoom = (e) => {
        if (e.deltaY > 0) {
            setZoom((zoom) => zoom > 50 ? zoom - 50 : zoom)
        } else if (e.deltaY < 0) {
            setZoom((zoom) => zoom < 800 ? zoom + 50 : zoom)
        }
            // Commenting this out because it is just not needed and overcomplicates.
            // if (e.x < ((window.innerWidth / 2)-window.innerWidth/4)) {
            //     setLeft((left) => {
            //         if (left < 70) {
            //             return
            //         }
            //         return left + 5
            //     })
            // } else if (e.x > ((window.innerWidth / 2)+window.innerWidth/4) && left > 0 ) {
            //     setLeft((left) => {
            //         if (left > 30) {
            //             return
            //         }
            //         return left - 5
            //     })
            // }
    }

    const handleColor = (color) => {
        setCurrentColor(() => color)
    }

    const handleButton = (e) => {
        console.log(e.target)
        e.target.classList.toggle('active')
        console.log(e.target.classList);
    }


    return (
      <div className="editor">
          <nav className="top-nav">
              <button>File</button>
              <button>Edit</button>
              <button>Help</button>
          </nav>
          <nav className="left-nav">

                <Colors changeColor={handleColor}/>

                <button style={{backgroundColor: currentColor}} className="left-buttons" onClick={(e)=> {
                    openBrush(!brush)
                    handleButton(e)
                }}><BsBrush /></button>
                <Brush currentColor={currentColor} />
                
          </nav>
          <div className="canvas-container">
            <Canvas currentColor={currentColor} zoom={zoom} dimension={dimension}/>
          </div>
      </div>
    );
}
