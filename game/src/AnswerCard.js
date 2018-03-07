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
                if(user.uid === this.props.userUID) {
                    this.setState({isUserQuestionAsker: user.questionAsker})
                }

                if(user.questionAsker) {
                    let questionAskerIndex = user.index;
                    console.log("USER INDEX", user.index);
                    if(questionAskerIndex === 4) {
                        this.setState({nextQuestionAskerIndex: 1})
                    } else {
                        let curr = questionAskerIndex;
                        curr++;
                        console.log("NEXT QUESTION ASKER: ", user.displayName);
                        console.log("prev", questionAskerIndex);
                        console.log("curr", curr);
                        this.setState({nextQuestionAskerIndex: curr})
                    }
                }
            })
        })
    }

    handleClick(evt, num) {
        firebase.database().ref(`users`).once("value", snapshot => {
            snapshot.forEach(userSnap => {
                let user = userSnap.val();
                if(user.uid === this.props.userUID) {
                    this.setState({isUserQuestionAsker: user.questionAsker})
                }

                if(user.questionAsker) {
                    let questionAskerIndex = user.index;
                    console.log("USER INDEX", user.index);
                    this.setState({currQAUID: user.uid});
                    if(questionAskerIndex === 4) {
                        this.setState({nextQuestionAskerIndex: 1})
                    } else {
                        let curr = questionAskerIndex;
                        curr++;
                        console.log("NEXT QUESTION ASKER: ", user.displayName);
                        console.log("prev", questionAskerIndex);
                        console.log("curr", curr);
                        this.setState({nextQuestionAskerIndex: curr})
                    }
                }
            })
        })


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
                    let currPoints = user.points + 1;
                    firebase.database().ref(`users/${uid}/points`).set(currPoints);
                }
            })
        })
        // if(this.state.questionAsker) {
        // }
        firebase.database().ref(`users`).once("value", snapshot => {
            snapshot.forEach(userSnap => {
                let user = userSnap.val();
                if(user.uid === this.props.userUID) {
                    let uid = user.uid;
                    firebase.database().ref(`users/${uid}/questionAsker`).set(false);
                }
            })
        })
        firebase.database().ref(`users`).once("value", snapshot => {
            snapshot.forEach(userSnap => {
                let user = userSnap.val();
                console.log("NEXT QUESTION ASKER", this.state.nextQuestionAskerIndex);
                if(user.index === this.state.nextQuestionAskerIndex && (user.uid === this.state.currQAUID)) {
                //if(user.index === this.state.nextQuestionAskerIndex && !(user.questionAsker)) {
                    console.log("----curr user", this.props.userUID);
                    console.log("----next answerer", this.state.nextQuestionAskerIndex);
                    let uid = user.uid;
                    firebase.database().ref(`users/${uid}/questionAsker`).set(true);
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
