import React from "react";

export default class CardHand extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questionText: undefined
        }
    }

    render() {
        if(!this.props.blackCardRef) {
            return <p>loading question...</p>
        }

        let currQuestionIndex = 1; //WE SHOULD CHANGE THIS LATER

        let question;
        this.props.blackCardRef.once("value", snapshot => {snapshot.forEach(cardSnap => {
            let card = cardSnap.val();
            if(card.index === currQuestionIndex) {
                console.log("got here");
                this.setState({questionText: card.question})
            }
            return false;
        })})

        return (
            <div className="black-card">
                {this.state.questionText}
            </div>
        );
    }
}


