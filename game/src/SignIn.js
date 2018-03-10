/**
 * Controls the sign in process - has a user enter a display name to join the game and then shows players that
 * have currently joined. The game requires 4 users to play so once a 4th player has joined, the users are
 * re-directed to the game screen so they can begin play.
 */

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
        this.unlistenAuth = firebase.auth().onAuthStateChanged(user => {
            if (user) { //gets current user
                this.setState({currentUser: user.uid});
                // sets a reference to user data in Firebase and listens for changes in data
                let ref = firebase.database().ref(`users`);
                this.valueListener = ref.on("value", snapshot => this.setState({userSnap: snapshot}));
                this.setState({userRef: ref});
            }
        })
    }

    componentWillUnmount() {
        // stops listening for Firebase chaanges
        this.unlistenAuth();
        this.state.userRef.off("value", this.valueListener);
    }

    handleSubmit(evt) {
        // adds a player to firebase when they join the game
        evt.preventDefault();
        if (this.state.userName !== undefined) {
            let player = {[this.state.currentUser]: {
                uid: this.state.currentUser,
                displayName: this.state.userName,
                points: 0,
                cards: {}
            }}
            this.state.userRef.update(player);
        }
    }

    render() {
        // if there are 4 players ready to play, redirects all players to game
        if(this.state.userSnap) {
            if (this.state.userSnap.numChildren() === 4) {
                this.props.history.push(ROUTES.game);
            }
        }

        // displays all users who have currently joined
        let playersNames = [];
        if (this.state.userSnap) {
            this.state.userSnap.forEach(user => {
                playersNames.push(<p>{user.val().displayName}</p>)
            });
        }
        // lets joined users know they are waiting for more users to join in order to start game
        let waiting = null;
        if(this.state.userSnap) {
            if (this.state.userSnap.numChildren() < 4) {
                waiting = <div> waiting for more players to join...</div>;
            }
        }

        return(
            <div>
                <header className="jumbotron jumbotron-fluid bg-danger text-white p-0">
                    <div className="container">
                        <h1 className="display-4">Nerds Against Humanity</h1>
                        <p className="lead">Cards Against Humanity game for Informatics students</p>
                    </div>
                </header>
                <form onSubmit={evt => this.handleSubmit(evt)} className="pl-5">
                    <h1> Start a new game </h1>
                    <p>The game will begin automatically after 4 players join</p>
                    <p></p>
                    <div className="form-group pt-3">
                        <label htmlFor="user-name">Choose a nickname</label>
                        <input type="text"
                            id="user-name"
                            className="form-control"
                            placeholder="ex: Notorious Dave Stearns"
                            onChange={event => this.setState({userName: event.target.value})}/>
                    </div>
                    <button className="btn btn-danger mb-2">Submit</button>
                </form>
                <div className="p-5">
                    <h2>Current Players</h2>
                    <div className="pl-4">
                        {playersNames}
                        <div className="text-danger" >
                            {waiting}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


