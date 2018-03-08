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
        if(this.props.stateSnap && this.props.blackCardsSnap) {
            let state = this.props.StateSnap.val();
            this.setState({currQuestionIndex: state.currQuestionIndex});
            this.props.blackCardsSnap.forEach(cardSnap => {
                let card = cardSnap.val();
                if(card.index === this.state.currQuestionIndex) {
                    this.setState({questionText: card.question})
                }
            })
        }
        // Calls GameEnd to check if game is over
        this.setState({end: <GameEnd usersSnap={this.props.usersSnap}/>});
    }

    render() {
        return (
            <div>
                <div className="black-card">
                    {this.state.questionText}
                </div>
                {this.state.end}
            </div>
        );
    }
}


