import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';


// Initialize Firebase

var config = {
    apiKey: "AIzaSyCvdMlaq7CJG2k_050dKNtCUHr-Sk6fMSo",
    authDomain: "todoreact-5ad69.firebaseapp.com",
    databaseURL: "https://todoreact-5ad69.firebaseio.com",
    projectId: "todoreact-5ad69",
    storageBucket: "todoreact-5ad69.appspot.com",
    messagingSenderId: "694222479382"
};

firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
