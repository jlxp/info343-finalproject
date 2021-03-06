/**
 * Manages all current answer cards for each question
 */

import React from "react";
import AnswerCard from './AnswerCard.js';

export default class Answers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    // makes sure responses are cleared
    componentWillUnmount() {
        let emptyArr = [];
        this.setState({cards: emptyArr});
    }

    render() {
        let cardsArr = [];
        // creates and AnserCard component for all cards currently in current responses (have been chosen as answers for the current question)
        if(this.props.currResponsesSnap) {
            this.props.currResponsesSnap.forEach(responseSnap => {
                let card = responseSnap.val().card;
                cardsArr.push(<AnswerCard key={responseSnap.key} answer={card.answer} playerIndex={card.playerIndex} userUID={this.props.userID} clearCards={() => this.clearResponses()} usersSnap={this.props.usersSnap} currQuestionIndexSnap={this.props.currQuestionIndexSnap} currResponsesSnap={this.props.currResponsesSnap}/>)
            })
        } 
        return (
            <div id="response-list" className="container row">
                {cardsArr}
            </div>
        );
    }
}

