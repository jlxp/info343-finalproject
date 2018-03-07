import React from "react";
import firebase from "firebase/app";
import GameEnd from "./GameEnd";
import Answers from "./Answers";


export default class AnswerCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            end: undefined
        }
    }

    componentWillMount() {
        firebase.database().ref(`users`).once("value", snapshot => {
            snapshot.forEach(userSnap => {
                let user = userSnap.val();
                if (user.uid === this.props.userUID) {
                    this.setState({questionAsker: user.questionAsker})
                    this.setState({questionAskerIndex: user.index})
                    if(this.state.questionAskerIndex === 4) {
                        this.setState({nextQuestionAskerIndex: 1})
                    } else {
                        let curr = this.state.questionAskerIndex;
                        curr++;
                        this.setState({nextQuestionAskerIndex: curr})
                    }
                }
            })
        })
    }

    handleClick(evt, num) {
        evt.preventDefault();
        let playerIndex = this.props.playerIndex;
        let currQIRef = firebase.database().ref(`gameState/currQuestionIndex`);
        let currQuestionIndex;
        currQIRef.once("value", snapshot => {
            currQuestionIndex = snapshot.val();
        })
        let nextIndex = currQuestionIndex + 1;
        currQIRef.set(nextIndex);
        firebase.database().ref(`users`).once("value", snapshot => {
            snapshot.forEach(userSnap => {
                let user = userSnap.val();
                if(user.index === playerIndex) {
                    let uid = user.uid;
                    let currPoints = user.points;
                    currPoints++;
                    firebase.database().ref(`users/${uid}/points`).set(currPoints);
                }
            })
        })
        // if(this.state.questionAsker) {
        // }
        firebase.database().ref(`users`).once("value", snapshot => {
            snapshot.forEach(userSnap => {
                let user = userSnap.val();
                if(user.questionAsker) {
                    userSnap.ref.update({
                        questionAsker: false
                    })
                }

            })
        })
        firebase.database().ref(`users`).once("value", snapshot => {
            snapshot.forEach(userSnap => {
                let user = userSnap.val();
                console.log(this.state.nextQuestionAskerIndex);
                if(user.index === this.state.nextQuestionAskerIndex) {
                    userSnap.ref.update({
                        questionAsker: true
                    })
                }
            })
        })
        firebase.database().ref(`gameState/currResponses`).remove();
        this.props.clearCards();
    }

    render() {
        let answer = this.props.answer;
        return (
            <div className="white-card col mr-2" onClick={evt => this.handleClick(evt, answer.index)}>
                {answer}
            </div>
        );
    }
}
