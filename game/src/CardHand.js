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
        console.log('card hand props', this.props);
        firebase.database().ref(`users`).once("value", snapshot => {
            snapshot.forEach(userSnap => {
                let user = userSnap.val();
                if (user.uid === this.props.userID) {
                    console.log("user ID matched");
                    this.setState({ userIndex: user.index })
                    let currHand = [];
                    let obj = user.cards;
                    for(let prop in obj) {
                        currHand.push(obj[prop]);
                    }
                    this.props.whiteCardsRef.once("value", snapshot => {
                        let cardsArr = [];
                        snapshot.forEach(cardSnap => {
                            let card = cardSnap.val();
                            let i = 1;
                            if(currHand.includes(card.index) && (i < 5)) {
                                i++;
                                cardSnap.ref.update({
                                    playerIndex: this.state.userIndex
                                })
                                cardsArr.push({
                                    userID: this.props.userID,
                                    whiteCardsRef: this.props.whiteCardsRef,
                                    cardSnap: cardSnap,
                                    userIndex: this.state.userIndex
                                })
                            }
                        });
                        this.setState({cards: cardsArr});
                        console.log("ComponentWillMount state length: " + this.state.cards.length);
                    });
                }
            })
        })
    }

    replaceCardAtIndex = (cardIndex, cardObj) => {
        console.log("Called replace card method");
        let index;
        for(let i = 0; i < this.state.cards.length; i++) {
        //for(let i = 0; i < 5; i++) {
            let currCardIndex = this.state.cards[i].cardSnap.val().index;
            console.log("What is this", currCardIndex);
            if (currCardIndex === cardIndex) {
                index = i;
            } 
        }
        console.log("curr state length", this.state.cards.length);
        let cardsArr = this.state.cards.splice(0); //Duplicate state
        cardsArr[index] = cardObj;
        console.log("TAKE 1", this.state.cards);
        this.setState({cards: cardsArr})
        console.log("TAKE 2", this.state.cards);
    }

    render() {
        if (!this.props.whiteCardsRef) {
            return <p>loading cards...</p>
        }

        let cards = this.state.cards.map(cardObj => {
            return <Card key={cardObj.cardSnap.key} userID={cardObj.userID} whiteCardsRef={cardObj.whiteCardsRef} cardSnap={cardObj.cardSnap} userIndex={cardObj.userIndex} replaceCardAtIndex={this.replaceCardAtIndex}/>
        });

        console.log('rendering cards', cards);

        return (
            <div id="card-list" className="container row justify-content-center">
                {cards}
            </div>
        );
    }
}

