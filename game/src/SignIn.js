import React from "react";
import firebase from "firebase/app";

export default class SignInView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        firebase.auth().signInAnonymously();
    }

    componentDidMount() {
        this.unlistenAuth = firebase.auth.onAuthStateChanged(
            user => {
                //do stuff
                
            }
        )
    }
}