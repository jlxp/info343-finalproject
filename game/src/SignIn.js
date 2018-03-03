import React from "react";
import firebase from "firebase/app";
import 'firebase/auth';

export default class SignInView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        firebase.auth().signInAnonymously();
    }

    componentDidMount() {
        this.unlistenAuth = firebase.auth().onAuthStateChanged(
            user => {
                //do stuff
                if (user) {
                    let userID = user.uid;
                    let ref = firebase.database().ref(`cards`);
                    this.valueListener = ref.on("value", snapshot => this.setState({cardSnap: snapshot}));
                }
    
            }
        )
    }

    componentWillUnmount() {
        this.unlistenAuth();
        this.state.tasksRef.off("value", this.valueListener);
    }

    render() {
        return(
            <header className="jumbotron jumbotron-fluid bg-primary text-white">
                <div className="container-fluid">
                    <h1> Start a new game </h1>
                </div>
            </header>
        );
    }
}
