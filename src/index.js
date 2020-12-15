import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { CameraFeed } from './components/camera-feed';

import './styles.css';

// Upload to local seaweedFS instance
const uploadImage = async file => {
    const formData = new FormData();
    formData.append('file', file);

    // Connect to a seaweedfs instance
};

function App() {
    return (
        <div className="App">
            <h1>Image capture test</h1>
            <p>Capture image from USB webcamera and upload to form</p>
            <CameraFeed sendFile={uploadImage} />
        </div>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
