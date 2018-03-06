import React from "react";
import Card from './Card';
import firebase from "firebase/app";
import AnswerCard from './AnswerCard.js';

export default class Answers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            responseCards: []
        }
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
        this.state.stateRef.off("value", this.valueListener); 
    }

    componentWillMount() {
        let stateRef = firebase.database().ref(`gameState/currResponses`);
        let responses = [];
        stateRef.on("value", snapshot => {
            snapshot.forEach(responseSnap => {
                let response = responseSnap.val();
                responses.push(response.index);
                if(responses) {
                    this.props.whiteCardsRef.on("value", snapshot => {
                        let cardsArr = [];
                        snapshot.forEach(cardSnap => {
                            let card = cardSnap.val();
                            if(responses.includes(card.index)) {
                                cardsArr.push(<AnswerCard key={cardSnap.key} cardSnap={cardSnap} userUID={this.props.userID}/>)
                            }
                        })
                        this.setState({cards: cardsArr});
                    });
                }
             })
        })
    }

    render() {
        return (
            <div id="response-list" className="container row justify-content-end">
                {this.state.cards}
            </div>
        );
    }
}

