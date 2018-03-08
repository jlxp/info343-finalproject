/**
 * Displays the current question card for all users
 */

import React from "react";
import GameEnd from "./GameEnd";

export default class CardHand extends React.Component {

    render() {
        // finds card with index that matches next question card index and displays the question text
        let questionText = "";
        if(this.props.stateSnap && this.props.blackCardsSnap) {
            let state = this.props.stateSnap.val();
            this.props.blackCardsSnap.forEach(cardSnap => {
                let card = cardSnap.val();
                if(card.index === state.currQuestionIndex) {
                    questionText = card.question;
                }
            })
        }

        return (
            <div>
                <div className="black-card">
                    {questionText}
                </div>
                <GameEnd usersSnap={this.props.usersSnap} />
            </div>
        );
    }
}


