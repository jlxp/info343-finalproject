import React from "react";
import AnswerCard from './AnswerCard.js';

export default class Answers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillUnmount() {
        this.clearResponses();
    }

    clearResponses() {
        let emptyArr = [];
        this.setState({cards: emptyArr});
    }

    render() {
        let cardsArr = [];
        if(this.props.currResponsesSnap) {
            this.props.currResponsesSnap.forEach(responseSnap => {
                let card = responseSnap.val().card;
                cardsArr.push(<AnswerCard key={responseSnap.key} answer={card.answer} playerIndex={card.playerIndex} userUID={this.props.userID} clearCards={() => this.clearResponses()} usersSnap={this.props.usersSnap} currQuestionIndexSnap={this.props.currQuestionIndexSnap}/>)
            })
        } 
        return (
            <div id="response-list" className="container row justify-content-end">
                {cardsArr}
            </div>
        );
    }
}

