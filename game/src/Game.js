import React from "react";
import {ROUTES} from "./Constants";
import firebase from "firebase/app";
import CardHand from './CardHand';
import Question from './Question';
import Answers from './Answers';
import "firebase/auth";
import 'firebase/database';
import './index.css';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            whiteCardsRef: undefined,
            whiteCardsSnap: undefined,
            blackCardsRef: undefined,
            blackCardsSnap: undefined,
            usersRef: undefined,
            usersSnap: undefined,
            gameStateRef: undefined,
            gameStateSnap: undefined,
            currResponsesRef: undefined,
            currResponsesSnap: undefined,
            currQuestionIndexRef: undefined,
            currQuestionIndexSnap: undefined
        }
    }

    /** 
     * Called when page is mounted
    */
    componentDidMount() {
        this.authUnlisten = firebase.auth().onAuthStateChanged(user => {
            if(user) { // if a user is signed in
                this.setState({userID: user.uid});

                let white_ref = firebase.database().ref(`cards/white_cards`);
                this.whiteCardsValueListener = white_ref.on("value", snapshot => this.setState({whiteCardsSnap: snapshot}));
                this.setState({whiteCardsRef: white_ref});

                let black_ref = firebase.database().ref(`cards/black_cards`);
                this.blackCardsValueListener = black_ref.on("value", snapshot => this.setState({blackCardsSnap: snapshot}));
                this.setState({blackCardsRef: black_ref});

                let users_ref = firebase.database().ref(`users`);
                this.userValueListener = users_ref.on("value", snapshot => this.setState({usersSnap: snapshot}));
                this.setState({usersRef: users_ref});

                let gameState_ref = firebase.database().ref(`gameState`);
                this.gameStateValueListener = gameState_ref.on("value", snapshot => this.setState({gameStateSnap: snapshot}));
                this.setState({gameStateRef: gameState_ref})

                let gameState_currResponses_ref = firebase.database().ref(`gameState/currResponses`);
                this.currResponsesValueListener = gameState_currResponses_ref.on("value", snapshot => this.setState({currResponsesSnap: snapshot}))
                this.setState({currResponsesRef: gameState_currResponses_ref});

                let gameState_currQuestionIndex_ref = firebase.database().ref(`gameState/currQuestionIndex`);
                this.currQuestionIndexValueListener = gameState_currQuestionIndex_ref.on("value", snapshot => this.setState({currQuestionIndexSnap: snapshot}))
                this.setState({currQuestionIndexRef: gameState_currQuestionIndex_ref});

                gameState_ref.update({currQuestionIndex: 1, currAnswerIndex:21})
                    .catch(err => this.setState({fbError: err}));

                firebase.database().ref(`users/${this.state.userID}/displayName`).on("value", snapshot => {
                    this.setState({displayName: snapshot.val()})
                })
                firebase.database().ref(`users/${this.state.userID}/points`).on("value", snapshot => {
                    this.setState({pointTotal: snapshot.val()})
                })

                this.shuffleCards();
                
            } else { // if no user currently signed in
                this.props.history.push(ROUTES.signIn);
            }
        });
    }

    /** 
     * Called when page is unmounted
    */
    componentWillUnmount() {
        this.authUnlisten(); // stops listening for user events
        //firebase.database().ref(`users`).remove();
        this.state.whiteCardsRef.off("value", this.whiteCardsValueListener);
        this.state.blackCardsRef.off("value", this.blackCardsValueListener);
        this.state.usersRef.off("value", this.userValueListener);
        this.state.gameStateRef.off("value", this.gameStateValueListener);
        this.state.currResponsesRef.off("value", this.currResponsesValueListener);
    }

    shuffleCards() {
        let indexes = [];
        for(let i = 1; i < 214; i++) {
            indexes.push(i);
        }
        indexes = this.shuffle(indexes);
        let answerCardsRef = firebase.database().ref(`cards/white_cards`);
        let i = 0;
        answerCardsRef.once("value", snapshot => {snapshot.forEach(cardSnap => {
            cardSnap.ref.update({
                index: indexes[i]
            })
            i++;
            })
        }); 

        let qIndexes = [];
        for(let j = 1; j < 55; j++) {
            qIndexes.push(j);
        }
        qIndexes = this.shuffle(qIndexes);
        let questionCardsRef = firebase.database().ref(`cards/black_cards`);
        let j = 0;
        questionCardsRef.once("value", snapshot => {snapshot.forEach(cardSnap => {
            cardSnap.ref.update({
                index: qIndexes[j]
            })
            j++;
            })
        }); 


        let zIndexes = [1, 2, 3, 4];
        let playersRef = firebase.database().ref(`users`);
        let z = 0;
        playersRef.once("value", snapshot => {snapshot.forEach(personSnap => {
            personSnap.ref.update({
                index: zIndexes[z]
            })
            if(z === 0) {
                personSnap.ref.update({
                    questionAsker: true
                })
            } else {
                personSnap.ref.update({
                    questionAsker: false
                })
            }
            personSnap.ref.update({
                cards: {
                    card1: (z * 5) + 1,
                    card2: (z * 5) + 2,
                    card3: (z * 5) + 3,
                    card4: (z * 5) + 4,
                    card5: (z * 5) + 5
                }
            })
            z++;
            })
        }); 
    }

    /**
     * Shuffles an array in-place.
     * Source: https://bost.ocks.org/mike/shuffle/
     * @param {[]} array 
     * @returns {[]} the shuffled input array
     */
    shuffle(array) {
        var m = array.length, t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }
        return array;
    }

    render() {
        if(this.state.gameStateSnap) {
            return (
                <div>
                    <div className="jumbotron jumbotron-fluid bg-info m-0 p-0">
                        <div className="container">
                            <h1 className="display-4">Nerds Against Humanity</h1>
                            <p className="lead">Cards Against Humanity game for Informatics students</p>
                        </div>
                    </div>
                    <div className="container row">
                        <h5 className="pl-5 col">Welcome, {this.state.displayName}!</h5>
                        <h5 className="col">Current Points: {this.state.pointTotal}</h5>
                    </div>
                    <div id="card-container" className="container row">
                        <div id="question-card" className="col">
                            <Question stateSnap={this.state.gameStateSnap} blackCardsSnap={this.state.blackCardsSnap} usersSnap={this.state.usersSnap}/>
                        </div>
                        <div id="answer-cards" className="col">
                            <Answers currResponsesSnap={this.state.currResponsesSnap} currQuestionIndexSnap={this.state.currQuestionIndexSnap} gameStateSnap={this.state.gameStateSnap} usersSnap={this.state.usersSnap} userID={this.state.userID}/>
                        </div>
                    </div>
                    <div id="player-hand" className="m-5 justify-content-center">
                        <CardHand usersSnap={this.state.usersSnap} whiteCardsSnap={this.state.whiteCardsSnap} whiteCardsRef={this.state.whiteCardsRef} userID={this.state.userID}/>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}
