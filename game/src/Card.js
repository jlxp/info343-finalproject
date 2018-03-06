import React from "react";
import firebase from "firebase/app";


export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            answers: 0
        };
    }

    componentWillMount() {
        firebase.database().ref(`users`).once("value", snapshot => {
            snapshot.forEach(userSnap => {
                let user = userSnap.val();
                if (user.index === this.props.userIndex) {
                    this.setState({questionAsker: user.questionAsker})
                }
            })
        })
    }

    handleClick(evt, num) {
        evt.preventDefault();
        if(!this.state.questionAsker) {
            if(this.state.answers < 1) {
                console.log(this.state.answers);
                //let curr = 1;
                this.state.answers++;
                //this.setState({answers: curr});
                let ref = firebase.database().ref(`gameState/currResponses`);
                ref.push({index: num})
                    .catch(err => this.setState({fbError: err}));
            }
        }
        console.log("REPLACE PLAYED CARD");
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
