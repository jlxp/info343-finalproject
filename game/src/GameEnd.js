import React from "react";
import GameOverModal from './GameOverModal';


export default class GameEnd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
    }

    render() {
        let showModal = false;
        let displayName = undefined;
        if(this.props.usersSnap) {
            this.props.usersSnap.forEach(userSnap => {
                let user = userSnap.val();
                if(user.points > 4) {
                    showModal = true;
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