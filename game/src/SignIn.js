import React from "react";
import {ROUTES} from "./Constants";
import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

export default class SignInView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: undefined,
            userName: undefined,
            userRef: undefined
        };
        firebase.auth().signInAnonymously();
    }

    componentDidMount() {
        this.unlistenAuth = firebase.auth().onAuthStateChanged(
            user => {
                //do stuff
                if (user) {
                    this.setState({currentUser:user.uid});
                    
                    // this.valueListener = ref.on("value", snapshot => this.setState({cardSnap: snapshot}));
                    //this.state.userRef = ref;
                }
    
            }
        )
    }

    componentWillUnmount() {
        this.unlistenAuth();
        // this.state.tasksRef.off("value", this.valueListener);
    }

    handleSubmit(evt) {
        evt.preventDefault();
        console.log(this.state.userName);
        let userRef = firebase.database().ref(`users`);
        let player = {
            uid: this.state.currentUser,
            displayName: this.state.userName
        }
        console.log("A");
        userRef.push(player);
        this.props.history.push(ROUTES.game);
    }

    render() {
        return(
            <div>
                <header className="jumbotron jumbotron-fluid bg-primary text-white">
                    <div className="container-fluid">
                        <h1> Start a new game </h1>
                    </div>
                </header>
                <form onSubmit={evt => this.handleSubmit(evt)}>
                    <div className="form-group">
                        <label htmlFor="user-name">User Name</label>
                        <input type="text"
                            id="user-name"
                            className="form-control"
                            placeholder="your user name"
                            onChange={event => this.setState({userName: event.target.value})}/>
                    </div>
                    <button className="btn btn-primary mb-2">Submit</button>
                </form>
            </div>
        );
    }
}
