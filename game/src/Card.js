/**
 * Controls a card component in a user's current card hand, allows clicking to play the card for the given question
 */

import React from "react";
import firebase from "firebase/app";

export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            answers: 0,
            clicked: false
        };
    }

    componentWillMount() {
        this.props.usersSnap.forEach(userSnap => {
            let user = userSnap.val();
            if (user.index === this.props.userIndex) { // checks if current user is currently the question asker
                firebase.database().ref(`users/${user.uid}/questionAsker`).on("value", snapshot => {
                    this.setState({questionAsker: (snapshot.val())})
                })
                this.setState({uid: user.uid})
            }
        })
        this.setState({card: this.props.cardSnap.val()});
    }

    // this is called when a user plays a card, updates the users current hand with a new card
    // and moves played card to the current responses
    handleClick(evt, num, prevCardKey) {
        evt.preventDefault();
        this.setState({clicked: true});
        console.log("Question Asker:", this.state.questionAsker);
        if(!this.state.questionAsker) { // only allows users to play a card if they are not the current question askers
            //if(this.state.answers < 1) {
                //this.state.answers++;
                console.log("in card js", this.state.card);
                this.props.currResponsesRef.push({card: this.state.card}) // pass card data
                    .catch(err => this.setState({fbError: err}));
            //}
            firebase.database().ref(`gameState/currAnswerIndex`).once("value", snapshot => {
                let currNextIndex = snapshot.val(); // gets index of next answer index
                this.props.usersSnap.forEach(userSnap => {
                    let i = 0; // keeps track of current card in a user's hand
                    userSnap.child("cards").forEach(cardSnap => {
                        i++;
                        if(cardSnap.val() === num) {
                            this.props.whiteCardsRef.once("value", cardSnapshot => {
                                cardSnapshot.forEach(whiteCardSnap => {
                                    let whiteCard = whiteCardSnap.val();
                                    // if answer card index matches next answer card in deck index
                                    if(whiteCard.index === currNextIndex) {
                                        console.log("found it!");
                                        let nextIndexCardSnap;
                                        let key = whiteCardSnap.key;
                                        // assigns newly dealt card to the current player index
                                        firebase.database().ref(`cards/white_cards/${key}`).update({
                                            answer: whiteCard.answer,
                                            index: whiteCard.index,
                                            playerIndex: this.props.userIndex
                                        });
                                        // creates an object with data for the new card to create card object
                                        firebase.database().ref(`cards/white_cards/${key}`).once("value", snapshot => {
                                            console.log("updating cards right?", snapshot.val());
                                            nextIndexCardSnap = snapshot;
                                        });
                                        let cardObj = {
                                            userID: this.props.userID,
                                            whiteCardsRef: this.props.whiteCardsRef,
                                            cardSnap: nextIndexCardSnap,
                                            userIndex: this.props.userIndex
                                        }
                                        // replaces card in users current hand
                                        this.props.replaceCardAtIndex(num, cardObj);
                                        let cardStr = "card" + i;
                                        firebase.database().ref(`users/${this.state.uid}/cards/${cardStr}`).set(currNextIndex);
                                        let nextIndex = currNextIndex + 1;
                                        firebase.database().ref(`gameState/currAnswerIndex`).set(nextIndex);
                                    }
                                })
                            })
                        }
                    })
                })
            }) 
        }
    }

    render() {
        let answer = this.props.cardSnap.val();
        //console.log(this.props.cardSnap.key);
        return (
            <div className="white-card col mr-2" onClick={evt => this.handleClick(evt, answer.index, this.props.cardSnap.key)}>
                {answer.answer}
            </div>
        );
    }
}
