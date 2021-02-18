import React, { useState, useEffect } from 'react';
import { toPng } from 'html-to-image'
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
    const [gridLines, turnOnGrid] = useState(false)
    
    useEffect(() => {
        document.addEventListener('wheel', (e) => {
            handleZoom(e);
        })
    }, [])
    
    const handleZoom = (e) => {
        if (e.deltaY > 0) {
            setZoom((zoom) => zoom > 50 ? zoom - 50 : zoom);
        } else if (e.deltaY < 0) {
            setZoom((zoom) => zoom < 800 ? zoom + 50 : zoom);
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
        setCurrentColor(() => color);
    }

    const handleButton = (e) => {
            e.target.classList.toggle('active');
            console.log(e.target.classList);
    }
    
    const downloadImage = async (e) => {
       let canvas = await document.querySelector('#canvas');

       toPng(canvas)
        .then(dataUrl => {
            let img = new Image();
            img.src = dataUrl
            document.body.appendChild(img)
        })
        .catch(err => {
            console.log('gone wrong: ', err)
        })

    }


    return (
      <div className="editor">
          <nav className="top-nav">
              <div>File</div>
              <div>Edit</div>
              <div>Help</div>
          </nav>
          <nav className="left-nav">

                <Colors changeColor={handleColor}/>

                <button style={{backgroundColor: currentColor}} className="left-buttons" onClick={(e)=> {
                    openBrush(!brush)
                    handleButton(e)
                }}><BsBrush /></button>
                { brush ? <Brush currentColor={currentColor} /> : null }
                
          </nav>
          <div className="canvas-container">
            <Canvas currentColor={currentColor} zoom={zoom} dimension={dimension}/>
          </div>
      </div>
    );
}
