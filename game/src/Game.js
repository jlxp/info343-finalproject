import React from "react";
import {ROUTES} from "./Constants";
import firebase from "firebase/app";
import CardHand from './CardHand';
import Question from './Question';
import Answers from './Answers';
import GameEnd from './GameEnd';
import "firebase/auth";
import 'firebase/database';
import './index.css';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            x: undefined
        }
    }

    /** 
     * Called when page is mounted
    */
    componentDidMount() {
        this.authUnlisten = firebase.auth().onAuthStateChanged(user => {
            if(user) { // if a user is signed in
                let white_ref = firebase.database().ref(`cards/white_cards`);
                this.setState({userID: user.uid});
                //this.setState({displayName: user.displayName});
                this.setState({whiteCardsRef: white_ref});
            } else { // if no user currently signed in
                this.props.history.push(ROUTES.signIn);
            }
        });
    }

    componentWillMount() {
        let ref = firebase.database().ref(`gameState`);
        this.setState({stateRef: ref});
        ref.update({currQuestionIndex: 1, currAnswerIndex:21})
            .catch(err => this.setState({fbError: err}));
        this.shuffleCards();
    }

    /** 
     * Called when page is unmounted
    */
    componentWillUnmount() {
        this.authUnlisten(); // stops listening for user events
        firebase.database().ref(`users`).remove(); //UNCOMMENT THIS LATER!!!!!!!
    }

    shuffleCards() {
        let indexes = [];
        for(let i = 1; i < 213; i++) {
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
        return (
            <div>
                <div className="jumbotron jumbotron-fluid bg-info m-0 p-0">
                    <div className="container">
                        <h1 className="display-4">Nerds Against Humanity</h1>
                        <p className="lead">Cards Against Humanity game for Informatics students</p>
                    </div>
                </div>
                <div>{console.log(this.state.displayName)}</div>
                <div id="card-container" className="container row">
                    <div id="question-card" className="col">
                        <Question stateRef={this.state.stateRef}/>
                    </div>
                    <div id="answer-cards" className="col">
                        <Answers whiteCardsRef={this.state.whiteCardsRef} userID={this.state.userID}/>
                    </div>
                </div>
                <div id="player-hand" className="m-5 justify-content-center">
                    <CardHand whiteCardsRef={this.state.whiteCardsRef} userID={this.state.userID}/>
                </div>
            </div>
        );
    }
}
