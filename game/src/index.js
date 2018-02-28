import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBcE7abhopPObG3j7pvwtWSiQ5ai9_h7o4",
    authDomain: "finalproject-game.firebaseapp.com",
    databaseURL: "https://finalproject-game.firebaseio.com",
    projectId: "finalproject-game",
    storageBucket: "",
    messagingSenderId: "914720479546"
  };
  firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
