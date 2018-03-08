import React from 'react';
import {Button, Modal, ModalBody, ModalFooter} from 'reactstrap';
import {ROUTES} from "./Constants";
import {withRouter} from 'react-router-dom';

class GameOverModal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            modal: this.props.showModal
        }
    }

    componentDidMount() {
        console.log("GAME OVER MODAL MOUNTED")
    }

    handleClick(evt){
        evt.preventDefault();
        this.props.history.push(ROUTES.signIn);
    }

    render() {
        console.log("IN RENDER OF GAME OVER MODAL")
        return (
            <div>
                <Modal isOpen={this.state.modal}>
                <ModalBody>{this.props.winner} has won the game. Thanks for playing!</ModalBody>
                <ModalFooter>
                    <Button onClick={evt => this.handleClick(evt)}>Play Again</Button>
                </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default withRouter(GameOverModal);