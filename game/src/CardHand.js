import React from "react";
import Card from './Card'

export default class CardHand extends React.Component {
    render() {
        let cards = [];

        if(!this.props.whiteCardsRef) {
            return <p>loading cards...</p>
        }
        this.props.whiteCardsRef.limitToFirst(5).on("value", snapshot => {snapshot.forEach(cardSnap => {
            cards.push(<Card key={cardSnap.key} cardSnap={cardSnap} />)
            })
        });
        return (
            <div id="card-list" className="container row justify-content-center">
                {cards}
            </div>
        );
    }
}

