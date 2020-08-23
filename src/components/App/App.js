import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import fetchImages from "../../api";
import PhotoGrid from "../PhotoGrid";

function App() {
    return (
        <div className="App">
                <PhotoGrid/>
        </div>
    );
}

export default App;
