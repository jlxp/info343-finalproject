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

        // Right now I was testing it just getting the first index, I think this can be the
        // same for everyone and just controlled in state and then incrimented somewhere
        // or controlled as a variable in firebase - idk what is easier or more doable! 
        let currQuestionIndex = 1; 

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


