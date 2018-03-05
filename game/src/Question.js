import React from "react";
import firebase from "firebase/app";


export default class CardHand extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questionText: undefined
        }
    }

    componentWillMount() {
        this.props.stateRef.once("value", snapshot => {
            let state = snapshot.val();
            this.setState({currQuestionIndex: state.currQuestionIndex});
            firebase.database().ref(`cards/black_cards`).on("value", snapshot => {snapshot.forEach(cardSnap => {
                let card = cardSnap.val();
                if(card.index === this.state.currQuestionIndex) {
                    this.setState({questionText: card.question})
                }
            })})
        })
    }

    render() {
        return (
            <div className="black-card">
                {this.state.questionText}
            </div>
        );
    }
}


