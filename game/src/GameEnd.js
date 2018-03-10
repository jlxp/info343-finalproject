/**
 * Controls whether or not a player has 5 points, in which case the game should end and the 
 * end of game Modal should be displayed
 */

import React from "react";
import GameOverModal from './GameOverModal';
import firebase from "firebase/app";


export default class GameEnd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
    }

    componentWillMount() {
        firebase.database().ref(`users`).on("value", snapshot => {
            snapshot.forEach(userSnap => {
                let user = userSnap.val();
                if (user.points > 2) {
                    this.setState({showModal: true})
                    this.setState({winner: user.displayName})
                }
            })
        })
    }

    render() {
        if(this.state.showModal) {
            return (<GameOverModal winner={this.state.winner} showModal={this.state.showModal}/>);
        } else {
            return null
        }
    }
}