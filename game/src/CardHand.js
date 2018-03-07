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
        // console.log('card hand props', this.props);
        firebase.database().ref(`users`).once("value", snapshot => {
            snapshot.forEach(userSnap => {
                let user = userSnap.val();
                // console.log("user=",user);
                if (user.uid === this.props.userID) {
                    // console.log("user ID matched");
                    this.setState({ userIndex: user.index })
                    let currHand = [];
                    let obj = user.cards;
                    for(let prop in obj) {
                        // console.log("prop=",prop);
                        currHand.push(obj[prop]);
                    }
                    this.props.whiteCardsRef.once("value", snapshot => {
                        let cardsArr = [];
                        snapshot.forEach(cardSnap => {
                            let card = cardSnap.val();
                            // console.log("card = ", card)
                            let i = 1;
                            // console.log("current hand:", currHand);
                            if(currHand.includes(card.index)) {
                                cardSnap.ref.update({
                                    playerIndex: this.state.userIndex
                                });
                                cardsArr.push({
                                    userID: this.props.userID,
                                    whiteCardsRef: this.props.whiteCardsRef,
                                    cardSnap: cardSnap,
                                    userIndex: this.state.userIndex
                                });
                            }
                        });
                        this.setState({cards: cardsArr});
                        console.log(cardsArr);
                    });
                }
            })
        })
    }

    replaceCardAtIndex = (cardIndex, cardObj) => {
        let index;
        for(let i = 0; i < this.state.cards.length; i++) {
            let currCardIndex = this.state.cards[i].cardSnap.val().index;
            if (currCardIndex === cardIndex) {
                index = i;
            } 
        }
        let cardsArr = this.state.cards.splice(0); //Duplicate state
        cardsArr[index] = cardObj;
        this.setState({cards: cardsArr})
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

