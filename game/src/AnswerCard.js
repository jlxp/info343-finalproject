import React from "react";
import firebase from "firebase/app";


export default class AnswerCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
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
        if(this.state.questionAsker) {
            let playerIndex = this.props.cardSnap.val().playerIndex;
            firebase.database().ref(`users`).once("value", snapshot => {
                snapshot.forEach(userSnap => {
                    let user = userSnap.val();
                    if(user.index === playerIndex) {
                        let currPoints = user.points;
                        currPoints++;
                        userSnap.ref.update({
                            points: currPoints
                        })
                    }
                })
            })
        }
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
                    console.log("should be updating question asker");
                    userSnap.ref.update({
                        questionAsker: true
                    })
                }
            })
        })

        //this.state.questionAskerIndex + 1
    }

    render() {
        let answer = this.props.cardSnap.val();
        return (
            <div className="white-card col mr-2" onClick={evt => this.handleClick(evt, answer.index)}>
                {answer.answer}
            </div>
        );
    }
}
