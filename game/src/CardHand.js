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
                    this.props.whiteCardsRef.on("value", snapshot => {
                        let cardsArr = [];
                        snapshot.forEach(cardSnap => {
                            let card = cardSnap.val();
                            if (card.index < (this.state.userIndex * 5 + 1) && (card.index > ((this.state.userIndex - 1) * 5))) {
                                cardsArr.push(<Card key={cardSnap.key} cardSnap={cardSnap} />)
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

