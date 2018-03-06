import React from "react";
import firebase from "firebase/app";
import CardHand from "./CardHand";


export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            answers: 0
        };
    }

    componentWillMount() {
        firebase.database().ref(`users`).once("value", snapshot => {
            snapshot.forEach(userSnap => {
                let user = userSnap.val();
                if (user.index === this.props.userIndex) {
                    this.setState({questionAsker: user.questionAsker})
                }
            })
        })
    }

    handleClick(evt, num) {
        evt.preventDefault();
        if(!this.state.questionAsker) {
            if(this.state.answers < 1) {
                //console.log(this.state.answers);
                //let curr = 1;
                this.state.answers++;
                //this.setState({answers: curr});
                let ref = firebase.database().ref(`gameState/currResponses`);
                ref.push({index: num})
                    .catch(err => this.setState({fbError: err}));
            }
        }
        firebase.database().ref(`gameState/currAnswerIndex`).once("value", snapshot => {
            let currNextIndex = snapshot.val();
            firebase.database().ref(`users`).once("value", snapshot => {
                snapshot.forEach(userSnap => {
                    let user = userSnap.val();
                    let obj = user.cards;
                    for(let prop in obj) {
                        if(obj[prop] === num) {
                            console.log("got match");
                            // userSnap.ref.update({
                            //     prop: currNextIndex
                            // });
                            firebase.database().ref('users')
                            prop: currNextIndex;
                            <CardHand whiteCardsRef={this.props.whiteCardsRef} userID={this.props.userID}/>
                            //update current answer index
                        }
                    }

                    // for(let i = 1; i < user.cards.length; i++) {
                    //     if(user.cards[i] === num) {
                    //         console.log("got match");
                    //         let str = "card" + i;
                    //         console.log("Dot notation: " + user.cards.str);
                    //         //user.cards.1 = currNextIndex;
                    //         <CardHand whiteCardsRef={this.props.whiteCardsRef} userID={this.props.userID}/>
                    //     }
                    // }
                })

            })


            // firebase.database().ref(`cards/white_cards`).on("value", snapshot => {
            //     snapshot.forEach(cardSnap => {
            //         let card = cardSnap.val();
            //         if(card.index === currIndex) {
            //             <Card key={this.props.key} cardSnap={cardSnap} userIndex={this.props.userIndex}/>
            //         }
            //     })
            // })
        })
    }


    render() {
        let answer = this.props.cardSnap.val();
        return (
            <div className="white-card col mr-2" onClick={evt => this.handleClick(evt, answer.index)}>
                {answer.answer}
            </div>
        );
    }
}
