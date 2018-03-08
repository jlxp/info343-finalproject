/**
 * Controls whether or not a player has 5 points, in which case the game should end and the 
 * end of game Modal should be displayed
 */

import React from "react";
import GameOverModal from './GameOverModal';


export default class GameEnd extends React.Component {
    render() {
        let showModal = false;
        let displayName = undefined;
        if(this.props.usersSnap) {
            // checks if any current players have reached 5 points
            this.props.usersSnap.forEach(userSnap => {
                let user = userSnap.val();
                if(user.points > 4) {
                    showModal = true; // if someone has 5 points, triggers modal to end game
                    displayName = user.displayName;
                }
            })
        }
        if(showModal) {
            return (<GameOverModal winner={displayName} showModal={showModal}/>);
        } else {
            return null;
        }
    }
}