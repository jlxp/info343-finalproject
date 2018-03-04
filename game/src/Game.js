import React from "react";
import {ROUTES} from "./Constants";
import firebase from "firebase/app";
import CardHand from './CardHand';
import Question from './Question';
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
                this.setState({userID: user.uid});
                let white_ref = firebase.database().ref(`cards/white_cards`);
                this.valueListener = white_ref.on("value", snapshot => this.setState({whiteCardsSnap: snapshot}));
                this.setState({whiteCardsRef: white_ref});
                let black_ref = firebase.database().ref(`cards/black_cards`);
                //this.valueListener = black_ref.on("value", snapshot => this.setState({blackCardsSnap: snapshot}));
                this.setState({blackCardRef: black_ref});
            } else { // if no user currently signed in
                this.props.history.push(ROUTES.signIn);
            }
        });
    }

    componentWillMount() {
        this.shuffleCards();
    }
  
    /** 
     * Called when page is unmounted
    */
    componentWillUnmount() {
        this.authUnlisten(); // stops listening for user events
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
        playersRef.once("value", snapshot => {snapshot.forEach(cardSnap => {
            cardSnap.ref.update({
                index: zIndexes[z]
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
                <div id="card-container" className="container row">
                    <div id="question-card" className="col">
                        <Question blackCardRef={this.state.blackCardRef}/>
                    </div>
                    <div id="answer-cards" className="col">
                    </div>
                </div>
                <div id="player-hand" className="m-5 justify-content-center">
                    <CardHand whiteCardsRef={this.state.whiteCardsRef}/>
                </div>
            </div>
        );
    }
}
