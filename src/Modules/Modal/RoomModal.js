import React, { useEffect, useState }  from 'react'
import './Modal.scss';

export default function RoomModal(props) {
  const [textInput, setTextInput] = useState("")

  useEffect(() => {
    window.addEventListener('mousedown', handleClick )

    return () => {
      window.removeEventListener('mousedown', handleClick)
    }
  }, [])

  const handleClick = (e) => {
    if (!e.target.classList.contains("modal-component")) {
        props.close()
    }
  }

  const handleInput = (e) => {
    console.log(e.target.value)
    e.preventDefault()
    setTextInput((previous) => e.target.value)
  }

  return (
        <div className="Modal modal-component">
          <h1 className="modal-component">Join/Create MultiDraw Room</h1>
          <input 
            type="text"
            onChange={handleInput}
            placeholder="Room Name"
            value={textInput}
            className="modal-component"
          />
          <button className="modal-component" onClick={() => props.handleNetwork(textInput)}>Join</button>
        </div>
  );
}
