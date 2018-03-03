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
        // We are going to have to decide how to index things and change limit value!!
        this.props.blackCardRef.limitToFirst(1).on("value", snapshot => {snapshot.forEach(cardSnap => {
            let question = cardSnap.val();
            console.log("A: " + question);
            this.setState({questionText: question.question});
            })
        });
        
        return (
            <div className="black-card">
                {/* {this.state.questionText} */}
            </div>
        );
    }
}

