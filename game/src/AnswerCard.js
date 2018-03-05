import React from "react";
import firebase from "firebase/app";


export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillMount() {
        firebase.database().ref(`users`).once("value", snapshot => {
            snapshot.forEach(userSnap => {
                let user = userSnap.val();
                if (user.uid === this.props.userID) {
                    this.setState({questionAsker: user.questionAsker})
                }
            })
        })
    }

    handleClick(evt, num) {
        if(this.state.questionAsker) {
            evt.preventDefault();
            console.log("Clicked card");
        }
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
