import React from "react";
import GameEnd from "./GameEnd";


export default class CardHand extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questionText: undefined,
            end: undefined
        }
    }

    componentWillMount() {
        this.setState({end: <GameEnd usersSnap={this.props.usersSnap}/>});
    }

    render() {
        let questionText = "";
        if(this.props.stateSnap && this.props.blackCardsSnap) {
            let state = this.props.stateSnap.val();
            let currentQuestionIndex = state.currQuestionIndex;
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
                {this.state.end}
            </div>
        );
    }
}


