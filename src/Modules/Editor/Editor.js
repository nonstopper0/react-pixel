import React, { useState, useEffect } from 'react';
import { toPng, toSvg } from 'html-to-image'
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
    const [currentColor, setCurrentColor] = useState('#bbbbbb')
    const [gridLines, setGridLines] = useState(false)
    const [hoverHelper, setHoverHelper] = useState(true);
    const [brush, openBrush] = useState(false)
    const [dropDownOpen, setDropDownOpen] = useState(false)
    
    useEffect(() => {
        document.addEventListener('wheel', handleZoom);
        document.addEventListener('keypress', (e)=>console.log(e.keyCode))
        return function cleanup() {
            console.log("cleaning")
            document.removeEventListener('wheel', handleZoom)
        }
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

    // called from Colors.js through props
    const handleColor = (color) => {
        setCurrentColor(() => color);
    }

    const handleTool = (e, classToAdd, idToFind, variable, setVar) => {
        setVar(!variable)
        document.querySelector(`#${idToFind}`).classList.toggle(classToAdd)
    }

    // this code layout is super odd but it works perfectly? 
    // I think it is because the react state hooks dont update within the same function when using them this way so manipulating the setDropDown data works fine even when the checks later in the method dont work as the code maybe looks
    const handleOpenClose = (e, className, variable, setVar) => {
        console.log(e.target, className, variable, setVar)
        if (variable) {
            setVar(false)
            let divToClose = document.querySelector(`.${variable}`)
            divToClose.classList.add(className)
            if (variable === e.target.id) {
                return
            }
        }
        setVar(e.target.id)
        let divToOpen = document.querySelector(`.${e.target.id}`)
        divToOpen.classList.remove(className)
    }
    
    const downloadImage = async (e) => {
       let canvas = await document.querySelector('#canvas');

       e(canvas)
        .then(data => {
            let img = new Image();
            img.src = data
            document.body.appendChild(img)
        })
        .catch(err => {
            console.log('gone wrong: ', err)
        })
    }

    const resize = () => {
        setDimension(32)
    }


    return (
      <div className="editor">
          <nav className="top-nav">
              <div className="dd-wrapper">
                <button id="File" onClick={(e) => handleOpenClose(e, 'hidden', dropDownOpen, setDropDownOpen)}>File</button>
                <div className="drop-down hidden File">
                    <button onClick={()=> downloadImage(toSvg)}>Download</button>
                </div>
              </div>
              <div className="dd-wrapper">
                <button id="Edit" onClick={(e) => handleOpenClose(e, 'hidden', dropDownOpen, setDropDownOpen)}>Edit</button>
                <div className="drop-down hidden Edit">
                    <button onClick={() => resize()}>Resize</button>
                </div>
              </div>
              <div className="dd-wrapper">
                <button id="Help" onClick={(e) => handleOpenClose(e, 'hidden', dropDownOpen, setDropDownOpen)}>Help</button>
                <div className="drop-down hidden Help">
                </div>
              </div>
          </nav>
          <nav className="left-nav">

                <Colors changeColor={handleColor}/>

                <div className="button-wrapper">
                    <button className="left-button" onClick={(e)=> {
                        handleTool(e, 'brush-inactive', 'brush', brush, openBrush)
                    }}>Brush</button>
                    <div style={{backgroundColor: currentColor}} id="brush" className="brush-button brush-inactive"></div>
                </div>
                { brush ? <Brush currentColor={currentColor} /> : null }
                
          </nav>
          <div className="canvas-container">
            <Canvas currentColor={currentColor} zoom={zoom} dimension={dimension}/>
          </div>
      </div>
    );
}
