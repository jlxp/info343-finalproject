import React from "react";

export default class Card extends React.Component {
    render() {
        let answer = this.props.cardSnap.val();
        return (
            <div className="white-card col mr-2" onClick={() => console.log("Make click handler here!!!")}>
                {answer.answer}
            </div>
        );
    }
}
