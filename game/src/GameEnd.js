import React from "react";
import firebase from "firebase/app";
import GameOverModal from './GameOverModal';


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
                if (user.points > 4) {
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
