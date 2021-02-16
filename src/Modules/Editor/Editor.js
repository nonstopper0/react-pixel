import React, { useState, useContext } from 'react';
import './Editor.scss';

export default function Editor(props) {
  return (
    <div className="editor">
        <nav className="top-nav">
            <button>File</button>
            <button>Edit</button>
            <button>Help</button>
        </nav>
    </div>
  );
}