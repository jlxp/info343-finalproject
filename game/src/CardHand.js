import React from "react";
import Card from './Card';
import firebase from "firebase/app";


export default class CardHand extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        }
    }

    componentWillMount() {
        firebase.database().ref(`users`).once("value", snapshot => {
            snapshot.forEach(userSnap => {
                let user = userSnap.val();
                if (user.uid === this.props.userID) {
                    this.setState({ userIndex: user.index })
                    let currHand = [];
                    let obj = user.cards;
                    for(let prop in obj) {
                        currHand.push(obj[prop]);
                    }
                    console.log("current hand: " + currHand);
                    this.props.whiteCardsRef.on("value", snapshot => {
                        let cardsArr = [];
                        snapshot.forEach(cardSnap => {
                            let card = cardSnap.val();
                            if(currHand.includes(card.index)) {
                                cardSnap.ref.update({
                                    playerIndex: this.state.userIndex
                                })
                                cardsArr.push(<Card key={cardSnap.key} userID={this.props.userID} whiteCardsRef={this.props.whiteCardsRef} cardSnap={cardSnap} userIndex={this.state.userIndex}/>)
                            }
                        });
                        this.setState({cards: cardsArr});
                    });
                }
            })
        })
    }

    render() {
        if (!this.props.whiteCardsRef) {
            return <p>loading cards...</p>
        }
        return (
            <div id="card-list" className="container row justify-content-center">
                {this.state.cards}
            </div>
        );
    }
}

