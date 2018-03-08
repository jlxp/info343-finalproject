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
        }
    }

    handleClick(evt, num) {
        evt.preventDefault();
        this.props.usersSnap.forEach(userSnap => {
                let user = userSnap.val();
                if(user.uid === this.props.userUID) {
                    this.setState({isUserQuestionAsker: user.questionAsker})
                }

                if(user.questionAsker) {
                    let questionAskerIndex = user.index;
                    this.setState({currQAUID: user.uid});
                    if(questionAskerIndex === 4) {
                        this.setState({nextQuestionAskerIndex: 1})
                    } else {
                        let curr = questionAskerIndex;
                        curr++;
                        this.setState({nextQuestionAskerIndex: curr})
                    }
                }
            })
        let playerIndex = this.props.playerIndex;
        let currQIRef = firebase.database().ref(`gameState/currQuestionIndex`);
        let currQuestionIndex;
        currQIRef.once("value", snapshot => {
            currQuestionIndex = snapshot.val();
        })
        let nextIndex = currQuestionIndex + 1;
        currQIRef.set(nextIndex);
        this.props.usersSnap.forEach(userSnap => {
            let user = userSnap.val();
            if(user.index === playerIndex) {
                let uid = user.uid;
                let currPoints = user.points + 1;
                firebase.database().ref(`users/${uid}/points`).set(currPoints);
            }
        })
        // if(this.state.questionAsker) {
        // }
        this.props.usersSnap.forEach(userSnap => {
            let user = userSnap.val();
            if(user.uid === this.props.userUID) {
                let uid = user.uid;
                firebase.database().ref(`users/${uid}/questionAsker`).set(false);
            }
        })
        this.props.usersSnap.forEach(userSnap => {
            let user = userSnap.val();
            if(user.index === this.state.nextQuestionAskerIndex && (user.uid === this.state.currQAUID)) {
            //if(user.index === this.state.nextQuestionAskerIndex && !(user.questionAsker)) {
                let uid = user.uid;
                firebase.database().ref(`users/${uid}/questionAsker`).set(true);
            }
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
