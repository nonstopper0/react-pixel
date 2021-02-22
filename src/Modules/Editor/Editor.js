import React, { useState, useEffect } from 'react';
import { LioWebRTC } from 'react-liowebrtc';
import { toPng, toSvg } from 'html-to-image';
import { storeKey, getKey, removeKey } from '../Store/Key';
import { UndoRedo } from './Panels/Undo';
import './Editor.scss';

import Canvas from '../Canvas/Canvas';
import Colors from './Panels/Colors';
import Brush from './Panels/Brush';

import { BsBrush } from 'react-icons/bs';

// This is the main function all my panels and drawing components pull from. Think of this as the App() of this application.
export default function Editor(props) {

    const [dimension, setDimension] = useState(props.dimension)
    const [zoom, setZoom] = useState(500)
    const [currentColor, setCurrentColor] = useState('#bbbbbb')
    const [gridLines, setGridLines] = useState(false)
    const [hoverHelper, setHoverHelper] = useState(true);
    const [backgroundColor, setBackgroundColor] = useState('#ffffff')

    const [brush, openBrush] = useState(false)
    const [brushSize, setBrushSize] = useState(1)
    
    const [dropDownOpen, setDropDownOpen] = useState(false)

    // number for undo button
    const [number, setNumber] = useState(0)


    useEffect(() => {

        sessionStorage.clear();
        document.addEventListener('wheel', handleZoom);

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
    }

    // called from Colors.js through props
    const handleColor = (color) => {

        function hexToRgb(c){
            if(/^#([a-f0-9]{3}){1,2}$/.test(c)){
                if(c.length== 4){
                    c= '#'+[c[1], c[1], c[2], c[2], c[3], c[3]].join('');
                }
                c= '0x'+c.substring(1);
                return 'rgb('+[(c>>16)&255, (c>>8)&255, c&255].join(', ')+')';
            }
            return '';
        }
        setCurrentColor((prev) => hexToRgb(color));
    }

    const handleTool = (e, classToAdd, idToFind, variable, setVar) => {
        setVar(!variable)
        document.querySelector(`#${idToFind}`).classList.toggle(classToAdd)
    }

    // this code layout is super odd but it works perfectly? 
    // I think it is because the react state hooks dont update within the same function when using them this way so manipulating the setDropDown data works fine even when the checks later in the method dont work as the code maybe looks
    const handleOpenClose = (e, className, variable, setVar) => {
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
        setDimension(dimension * 2)
    }

    const storeHistory = (data) => {
        setNumber((previous) => {
            storeKey(previous, data)
            return previous + 1
        })
    }

    const handleUndo = () => {
        if (number > 0) {
            setNumber((num) => {
                let toRemove = getKey(num-1)
                UndoRedo(toRemove, 'undo')
                return num - 1
            })
        }
    }

    const handleRedo = () => {
        setNumber((num) => {
            let toRedo = getKey(num)
            if (toRedo) {
                UndoRedo(toRedo, 'redo')
                return num + 1
            }
            return num
        })
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
                    <button onClick={() => handleUndo()}>Undo</button>
                    <button onClick={() => handleRedo()}>Redo</button>
                    <button onClick={() => resize()}>Resize</button>
                    <button onClick={() => setGridLines(!gridLines)}>Gridlines</button>
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
                <button onClick={()=> setBrushSize(brushSize + 1)}>Size +</button>
                <button onClick={()=> setBrushSize(brushSize - 1)}>Size -</button>
                { brush ? <Brush history={storeHistory} size={brushSize} currentColor={currentColor} /> : null }
                
          </nav>
          <div className="canvas-container">
            <Canvas grid={gridLines} backgroundColor={backgroundColor} zoom={zoom} dimension={dimension}/>
          </div>
      </div>
    );
}
