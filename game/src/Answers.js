import React from "react";
import Card from './Card';
import firebase from "firebase/app";
import AnswerCard from './AnswerCard.js';

export default class Answers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        let state_ref = firebase.database().ref(`gameState`);
        this.setState({stateRef: state_ref});
        this.valueListener = state_ref.on("value", snapshot => this.setState({stateSnap: snapshot}));
    }

    /** 
     * Called when page is unmounted
    */
    componentWillUnmount() {
        this.clearResponses();
        this.state.stateRef.off("value", this.valueListener); 
    }

    componentWillMount() {
        let stateRef = firebase.database().ref(`gameState/currResponses`);
        stateRef.on("value", snapshot => {
            let cardsArr = [];
            if(snapshot) {
                snapshot.forEach(responseSnap => {
                    let card = responseSnap.val().card;
                    cardsArr.push(<AnswerCard key={responseSnap.key} answer={card.answer} playerIndex={card.playerIndex} whiteCardsRef={this.props.whiteCardsRef} userUID={this.props.userID} clearCards={() => this.clearResponses()}/>)
                })
                this.setState({cards: cardsArr});
            } else {
                this.setState({cards: cardsArr});
            }
        })
    }

    clearResponses() {
        let emptyArr = [];
        this.setState({cards: emptyArr});
    }

    render() {
        return (
            <div id="response-list" className="container row justify-content-end">
                {this.state.cards}
            </div>
        );
    }
}

