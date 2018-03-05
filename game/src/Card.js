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
                if (user.index === this.props.usedIndex) {
                    this.setState({questionAsker: user.questionAsker})
                }
            })
        })
    }

    handleClick(evt, num) {
        if(!this.state.questionAsker || !this.state.answered) {
            evt.preventDefault();
            this.setState({answered: true});
            let ref = firebase.database().ref(`gameState/currResponses`);
            ref.push({index: num})
                .catch(err => this.setState({fbError: err}));
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
