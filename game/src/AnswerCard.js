/**
 * Creates a card representing a card played by someone for the current round, allows current
 * question asker to click on a card and choose it as the winner for that question round
 */

import React from "react";
import firebase from "firebase/app";

export default class AnswerCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentWillMount() {
        if(this.props.usersSnap) {
            this.props.usersSnap.forEach(userSnap => {
                let user = userSnap.val();
                if(user.uid === this.props.userUID) {
                    // checks if current user is the current question asker
                    this.setState({isUserQuestionAsker: user.questionAsker})
                }
                if(user.questionAsker) {
                    // if user is current question asker set next index to appropriate next value
                    let questionAskerIndex = user.index;
                    if(questionAskerIndex === 4) {
                        this.setState({nextQuestionAskerIndex: 1})
                    } else {
                        let curr = questionAskerIndex;
                        curr++;
                        this.setState({nextQuestionAskerIndex: curr})
                    }
                }
            })
        }
    }

    // handles a click event meaning that the current question asker clicked on a card they chose to 
    // win the round
    handleClick(evt, num) {
        evt.preventDefault();
        this.props.usersSnap.forEach(userSnap => {
            let user = userSnap.val();
            if(user.uid === this.props.userUID) {
                this.setState({isUserQuestionAsker: user.questionAsker})
            }
            if(user.questionAsker) {
                let questionAskerIndex = user.index;
                if(questionAskerIndex === 4) {
                    this.setState({nextQuestionAskerIndex: 1})
                } else {
                    let curr = questionAskerIndex;
                    curr++;
                    this.setState({nextQuestionAskerIndex: curr})
                }
            }
        })
        // updates question index to next number to have new question for new round
        let nextIndex = this.props.currQuestionIndexSnap.val() + 1;
        this.props.currQuestionIndexSnap.ref.set(nextIndex);
        this.props.usersSnap.forEach(userSnap => {
            let user = userSnap.val();
            // finds user whose index matches that on winning card
            if(user.index === this.props.playerIndex) {
                // updates points for user who played the winning card
                let uid = user.uid;
                let currPoints = user.points + 1;
                firebase.database().ref(`users/${uid}/points`).set(currPoints);
            }
        })
        // updates current question asker
        this.props.usersSnap.forEach(userSnap => {
            let user = userSnap.val();
            let uid = user.uid;
            if(uid === this.props.userUID) { // if user is current question akser, switch to false
                firebase.database().ref(`users/${uid}/questionAsker`).set(false);
            } else if (user.index === this.state.nextQuestionAskerIndex) { //if users ID corresponds to next question asker, set to true
                firebase.database().ref(`users/${uid}/questionAsker`).set(true);
            }
        })
        // removes all current responses to clear for next round
        this.props.currResponsesSnap.ref.remove();
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
