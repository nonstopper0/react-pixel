import React, { useState, useEffect, useRef, useCallback } from 'react';
import LioWebRTC from 'liowebrtc'
import { toPng, toSvg } from 'html-to-image';
import { BsBrush, BsFillBucketFill } from 'react-icons/bs';
import './Editor.scss';

import { storeKey, getKey, removeKey } from '../Store/Key';
import { UndoRedo } from './Panels/Undo';
import Canvas from '../Canvas/Canvas';
import Colors from './Panels/Colors';
import Brush from './Panels/Brush';
import Modal from '../Modal/Modal'


const webrtc = new LioWebRTC({
    dataOnly: true
});


// This is the main function all my panels and drawing components pull from. Think of this as the App() of this application.
export default function Editor(props) {

    const [dimension, setDimension] = useState(props.dimension)
    const [zoom, setZoom] = useState(500)
    const [currentColor, setCurrentColor] = useState('rgb(255, 0, 0)')
    const [colorPalette, setColorPalette] = useState(['rgb(220, 0, 0)', 'rgb(0, 220, 0)', 'rgb(0, 0, 220)'])
    const [gridLines, setGridLines] = useState(false)
    const [backgroundColor, setBackgroundColor] = useState('rgb(255,255,255)')
    
    const [toolOpen, setToolOpen] = useState(false)
    const [brushSize, setBrushSize] = useState(1)
    
    const [modalOpen, openModal] = useState(false)
    const [dropDownOpen, setDropDownOpen] = useState(false)
    
    const [isOnline, setIsOnline] = useState(false)
    
    // number for undo button
    const [number, setNumber] = useState(0)
    
    const [message, setMessage] = useState("Select a brush to get started!")
    const messagesRef = useRef()

    useEffect(() => {
        webrtc.on('joinedRoom', (name) => {
            console.log('succesfully joined room ', name)
        })
        
        webrtc.on('removedPeer', (peer) => {
            console.log(peer.id, ' left the room')
            setMessage(`User ${peer.id} has left the room`)
        })

        webrtc.on('leftRoom', (name) => {
            console.log('left')
        })
        
        webrtc.on('createdPeer', (peer) => {
            console.log(peer.id, ' joined the room!')
            setMessage(`User ${peer.id} has joined the room`)
        })
        
        webrtc.on('receivedPeerData', (type, data, peer) => {
            console.log('data received....')
            if (peer.id) {
                console.log(`data received from: ${peer.id}... contains: ${data}`)
                // draw peers data on the local clients screen using the Redo function from the undo and redo buttons
                UndoRedo(data, 'redo')
            }
        })

        // making sure all varaibles start fresh if user refreshes. may change this implementation at a later date.
        sessionStorage.clear();
        webrtc.leaveRoom()

        document.addEventListener('wheel', handleZoom);

        return function cleanup() {
            document.removeEventListener('wheel', handleZoom)
        }
    }, [])
    
    // called from wheel listener to "zoom" in and out pixels of canvas
    const handleZoom = (e) => {
        if (e.deltaY > 0) {
            setZoom((zoom) => zoom > 50 ? zoom - 50 : zoom);
        } else if (e.deltaY < 0) {
            setZoom((zoom) => zoom < 800 ? zoom + 50 : zoom);
        }
    }

    const handleNewtworkJoin = (roomName) => {
        if (!isOnline) {
            webrtc.joinRoom(roomName)
            setIsOnline(true)
            setMessage(`You have succesfully joined room ${roomName}...`)
        }
    }

    const handleNetworkLeave = () => {
        if (isOnline) {
            webrtc.leaveRoom()
            setIsOnline(false)
            setMessage(`You have disconnected from MultiDraw room...`)
        }
    }

    // called from Colors.js through props
    const handleColor = (color, convert) => {

        // from user: kennebec on StackOverflow
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

        setMessage(`Changed Brush color`)
        let convertedColor = convert ? hexToRgb(color) : color

        
        setCurrentColor((prev) => convertedColor);
        setColorPalette((arr) => {
            let newArr = []
            let indexOf = arr.indexOf(convertedColor)

            //if the same color comes through twice, dont make it appear twice in the palette
            if (convertedColor === arr[0]) {
                return arr
            }

            if (indexOf === -1) {
                return [convertedColor, arr[0], arr[1]]
            }
            indexOf === 2 ? newArr = [convertedColor, arr[0], arr[1]] : newArr = [convertedColor, arr[0], arr[2]]
            return newArr
        })
    }

    const handleTool = (e, classToAdd, idToFind) => {
        setToolOpen((previousTool) => {
            if (!previousTool) {
                console.log('no tool')
                document.querySelector(`#${idToFind}`).classList.toggle(classToAdd)
                return idToFind
            }
            if (previousTool === idToFind) {
                document.querySelector(`#${idToFind}`).classList.toggle(classToAdd)
            }
            return idToFind
        })
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


    // Resize button
    const resize = () => {
        setDimension(dimension * 2)
    }


    // Store brush strokes after mouse click is lifted for Undo button history aswell as to send over to Multidraw peers
    const storeHistory = (data) => {
        webrtc.shout("paint-data", data)
        setNumber((previous) => {
            storeKey(previous, data)
            return previous + 1
        })
    }


    // Grab Undo history from Session and remove strokes back to previous values
    const handleUndo = () => {
        if (number > 0) {
            setMessage('Undo...')
            setNumber((num) => {
                let toRemove = getKey(num-1)
                UndoRedo(toRemove, 'undo')
                return num - 1
            })
        }
    }

    const handleRedo = () => {
        setMessage('Redo...')
        setNumber((num) => {
            let toRedo = getKey(num)
            if (toRedo) {
                UndoRedo(toRedo, 'redo')
                return num + 1
            }
            return num
        })
    }

    const handleSave = (name) => {
        let saveArray = []
        for (let i = 0; i < dimension; i++) {
            for (let k = 0; k < dimension; k++) {
                let toSave = document.getElementById(`[${i}, ${k}]`).style['background-color']
                saveArray.push(toSave)
            }
        }
        localStorage.setItem('save', saveArray)
    }

    return (
      <div className="editor">

          <nav className="top-nav">
              <div className="dd-wrapper">
                <button id="File" onClick={(e) => handleOpenClose(e, 'hidden', dropDownOpen, setDropDownOpen)}>File</button>
                <div className="drop-down hidden File">
                    <button onClick={()=> downloadImage(toSvg)}>Download</button>
                    <button onClick={()=> handleSave('save')}>Save (Online)</button>
                </div>
              </div>
              <div className="dd-wrapper">
                <button id="Edit" onClick={(e) => handleOpenClose(e, 'hidden', dropDownOpen, setDropDownOpen)}>Edit</button>
                <div className="drop-down hidden Edit">
                    <button style={{color: isOnline ? 'grey' : 'white'}} disabled={isOnline ? true : false} onClick={() => handleUndo()}>Undo</button>
                    <button style={{color: isOnline ? 'grey' : 'white'}} disabled={isOnline ? true : false} onClick={() => handleRedo()}>Redo</button>
                    <button style={{color: isOnline ? 'grey' : 'white'}} disabled={isOnline ? true : false} onClick={() => resize()}>Resize</button>
                    <button onClick={() => setGridLines(!gridLines)}>Gridlines</button>
                </div>
              </div>
              <div className="dd-wrapper">
                <button id="MultiDraw" onClick={(e) => handleOpenClose(e, 'hidden', dropDownOpen, setDropDownOpen)}>MultiDraw</button>
                <div className="drop-down hidden MultiDraw">
                    <button style={{color: isOnline ? 'grey' : 'white'}} disabled={isOnline ? true : false} onClick={() => openModal("MultiDraw")}>Join</button>
                    <button onClick={() => handleNetworkLeave()}>Leave</button>
                </div>
              </div>
              <p ref={messagesRef} className="message-right">{message}</p>
          </nav>

          <nav className="left-nav">

                <div className="current-color">
                    <div className="color color-main" style={{backgroundColor: colorPalette[0]}}></div>
                    <div className="color" onClick={() => handleColor(colorPalette[1], false)} style={{backgroundColor: colorPalette[1]}}></div>
                    <div className="color" onClick={() => handleColor(colorPalette[2], false)} style={{backgroundColor: colorPalette[2]}}></div>
                </div>

                <Colors changeColor={handleColor}/>

                <div className="button-wrapper">
                    <button id="brush" className="left-button left-inactive" onClick={(e)=> {
                        handleTool(e, 'left-inactive', 'brush')
                    }}><BsBrush /></button>
                    <button onClick={()=> brushSize < 3 ? setBrushSize(brushSize + 1) : null}>+</button>
                    <button onClick={()=> brushSize > 1 ? setBrushSize(brushSize - 1) : null}>-</button>
                </div>
                { toolOpen === 'brush' && <Brush history={storeHistory} size={brushSize} currentColor={currentColor} /> }

                <div className="button-wrapper">
                    <button id="bucket" className="left-button left-inactive" onClick={(e)=> {
                        handleTool(e, 'left-inactive', 'bucket')
                    }}><BsFillBucketFill /></button>
                </div>
                
          </nav>


          <div className="canvas-container">
            <Canvas grid={gridLines} backgroundColor={backgroundColor} zoom={zoom} dimension={dimension}/>
          </div>

          { modalOpen ? <Modal
            window={modalOpen}
            close={() => openModal(!modalOpen)} 
            click={(text) => {
              handleNewtworkJoin(text)
              openModal(!modalOpen)
            }} /> : null }
      </div>
    );
}
