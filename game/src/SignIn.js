import React from "react";
import {ROUTES} from "./Constants";
import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/database';
import './index.css';

export default class SignInView extends React.Component {
    constructor(props) {
        firebase.auth().signInAnonymously()
            .then(() => {this.props.history.push(ROUTES.game)})
        super(props);
    }

    render() {
        return (
            <div></div>
        );
    }
}


