import React from "react";
import firebase from "firebase/app";

export default class AnswerCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentWillMount() {
        console.log("called mount of answer card");
        if(this.props.usersSnap) {
            console.log("MOUNTING OF ANSWER CARD");
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
        let currQuestionIndex = this.props.currQuestionIndexSnap.val();
        let nextIndex = currQuestionIndex + 1;
        this.props.currQuestionIndexSnap.ref.set(nextIndex);
        this.props.usersSnap.forEach(userSnap => {
            let user = userSnap.val();
            if(user.index === playerIndex) {
                let uid = user.uid;
                let currPoints = user.points + 1;
                firebase.database().ref(`users/${uid}/points`).set(currPoints);
            }
        })
        this.props.usersSnap.forEach(userSnap => {
            let user = userSnap.val();
            if(user.uid === this.props.userUID) {
                let uid = user.uid;
                firebase.database().ref(`users/${uid}/questionAsker`).set(false);
            } else if (user.index === this.state.nextQuestionAskerIndex) {
                let uid = user.uid;
                firebase.database().ref(`users/${uid}/questionAsker`).set(true);
            }
        })
        firebase.database().ref(`gameState/currResponses`).remove();
        this.props.clearCards();
    }

    render() {
        let answer = this.props.answer;
        console.log("ANSWE", answer);
        return (
            <div className="white-card col mr-2" onClick={evt => this.handleClick(evt, answer.index)}>
                {answer}
            </div>
        );
    }
}
