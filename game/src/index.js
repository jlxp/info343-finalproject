import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from "firebase/app";


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCCCFBRGRMbkkQ2v_D1Za5hcoITcbDF6JU",
    authDomain: "cah-online-70115.firebaseapp.com",
    databaseURL: "https://cah-online-70115.firebaseio.com",
    projectId: "cah-online-70115",
    storageBucket: "cah-online-70115.appspot.com",
    messagingSenderId: "487758224411"
  };
  firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
