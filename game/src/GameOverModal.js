import React from 'react';
import {Button, Modal, ModalBody, ModalFooter} from 'reactstrap';
import {ROUTES} from "./Constants";
import {Link} from 'react-router-dom';
import {Route, withRouter} from 'react-router-dom';

class GameOverModal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            modal: this.props.showModal
        }
        //this.toggle = this.toggle.bind(this);
    }

    // toggle() {
    //     this.setState({
    //         modal: this.props.showModal
    //     });
    // }

    handleClick(evt){
        evt.preventDefault();
        this.props.history.push(ROUTES.signIn);
    }

    render() {
        console.log("called Modal");
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
//export default GameOverModal;