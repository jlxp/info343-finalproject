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
            userSnap: undefined,
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
                    let ref = firebase.database().ref(`users`);
                    this.valueListener = ref.on("value", snapshot => this.setState({userSnap: snapshot}));
                    this.state.userRef = ref;
                }
    
            }
        )
    }

    componentWillUnmount() {
        this.unlistenAuth();
    }

    handleSubmit(evt) {
        evt.preventDefault();
        if (this.state.userName !== undefined) {
            console.log(this.state.userName);
            let player = {
                uid: this.state.currentUser,
                displayName: this.state.userName,
                points: 0
            }
            console.log("A");
            this.state.userRef.push(player);
            this.state.players++;
            console.log(this.state.userSnap.numChildren());
            if (this.state.userSnap.numChildren() === 3) {
                this.props.history.push(ROUTES.game);
            }
        }
    }

    render() {
        let playersNames = [];
        if (this.state.userSnap) {
            this.state.userSnap.forEach(user => {
                playersNames.push(<p>{user.val().displayName}</p>)
            });
        }
        let waiting = null;
        if (this.state.userSnap.numChildren() === 3) {
            waiting = <div> waiting for more players to join...</div>;
        }

        return(
            <div>
                <header className="jumbotron jumbotron-fluid bg-primary text-white">
                    <div className="container-fluid">
                        <h1> Start a new game </h1>
                        <h6> you must have 4 players to start the game </h6>
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
                <div>
                    <h2>Current Players</h2>
                    {playersNames}
                    {waiting}
                </div>
            </div>
        );
    }
}


