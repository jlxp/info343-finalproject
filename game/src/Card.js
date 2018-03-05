import React from "react";
import firebase from "firebase/app";


export default class Card extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         questionText: undefined
    //     }
    // }

    // componentWillMount() {
    //     this.props.stateRef.once("value", snapshot => {
    //         let state = snapshot.val();
    //         this.setState({currQuestionIndex: state.currQuestionIndex});
    //         firebase.database().ref(`cards/black_cards`).once("value", snapshot => {snapshot.forEach(cardSnap => {
    //             let card = cardSnap.val();
    //             if(card.index === this.state.currQuestionIndex) {
    //                 this.setState({questionText: card.question})
    //             }
    //         })})
    //     })
    // }

    handleClick(evt, num) {
        evt.preventDefault();
        let ref = firebase.database().ref(`gameState/currResponses`);
        ref.push({index: num})
            .catch(err => this.setState({fbError: err}));
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
