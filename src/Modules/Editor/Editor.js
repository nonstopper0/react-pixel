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
    const [brush, openBrush] = useState(false)
    const [currentColor, setCurrentColor] = useState('#bbbbbb')
    const [gridLines, turnOnGrid] = useState(false)
    const [dropDownOpen, setDropDownOpen] = useState(false)
    
    useEffect(() => {
        document.addEventListener('wheel', handleZoom);
        return document.removeEventListener('wheel', handleZoom);
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

    const handleTool = (e) => {
            e.target.classList.toggle('active');
            console.log(e.target.classList);
    }

    const openDropDown = (e) => {
        if (dropDownOpen) {
            closeDropDown()
            if (dropDownOpen === e.target.innerHTML) {
                return
            }
        }
            setDropDownOpen(e.target.innerHTML)
            let divToOpen = document.querySelector(`.${e.target.innerHTML}`)
            divToOpen.classList.remove('hidden')
    }

    const closeDropDown = () => {
        setDropDownOpen(false)
        let divToClose = document.querySelector(`.${dropDownOpen}`)
        divToClose.classList.add('hidden')
    }
    
    const downloadImage = async (e) => {
       let canvas = await document.querySelector('#canvas');

       toSvg(canvas)
        .then(data => {
            let img = new Image();
            img.src = data
            document.body.appendChild(img)
        })
        .catch(err => {
            console.log('gone wrong: ', err)
        })

    }


    return (
      <div className="editor">
          <nav className="top-nav">
              <div className="dd-wrapper">
                <button onClick={(e) => openDropDown(e)}>File</button>
                <div className="drop-down hidden File">
                    <button onClick={()=> downloadImage()}>Download</button>
                </div>
              </div>
              <div className="dd-wrapper">
                <button onClick={(e) => openDropDown(e)}>Edit</button>
                <div className="drop-down hidden Edit">
                    <button>Resize</button>
                </div>
              </div>
              <div className="dd-wrapper">
                <button onClick={(e) => openDropDown(e)}>Help</button>
                <div className="drop-down hidden Help">
                </div>
              </div>
          </nav>
          <nav className="left-nav">

                <Colors changeColor={handleColor}/>

                <button style={{backgroundColor: currentColor}} className="left-buttons" onClick={(e)=> {
                    openBrush(!brush)
                    handleTool(e)
                }}><BsBrush /></button>
                { brush ? <Brush currentColor={currentColor} /> : null }
                
          </nav>
          <div className="canvas-container">
            <Canvas currentColor={currentColor} zoom={zoom} dimension={dimension}/>
          </div>
      </div>
    );
}
